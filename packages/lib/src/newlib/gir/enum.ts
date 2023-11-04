import {  NumberType, TypeIdentifier } from "../gir.js";

import { IntrospectedBase } from './base.js';
import {  GirMemberElement, GirEnumElement, GirBitfieldElement } from "../../index.js";

import { GirComplexRecord, GirRecord } from "./class.js";
import { Field } from "./property.js";
import { IntrospectedStaticClassFunction } from "./function.js";
import { IntrospectedNamespace } from "./namespace.js";
import { parseDoc, parseMetadata, sanitizeIdentifierName, sanitizeMemberName } from "./util.js";
import { FormatGenerator } from "../generators/generator.js";
import { LoadOptions } from "../types.js";
import { GirVisitor } from "../visitor.js";

export class IntrospectedEnum extends IntrospectedBase {
  members = new Map<string, GirEnumMember>();
  flags: boolean = false;
  namespace: IntrospectedNamespace;
  ns: string;

  constructor(name: string, namespace: IntrospectedNamespace, options: { isIntrospectable?: boolean } = {}) {
    super(sanitizeIdentifierName(namespace.name, name));
    this.namespace = namespace;
    this.ns = namespace.name;
  }

  copy({
    members
  }: {
    parent?: undefined;
    members?: Map<string, GirEnumMember>;
  } = {}): IntrospectedEnum {
    const { namespace, name, flags } = this;

    const en = new IntrospectedEnum(name, namespace);

    for (const [key, member] of (members ?? this.members).entries()) {
      en.members.set(key, member.copy());
    }

    en.flags = flags;

    en._copyBaseProperties(this);

    return en;
  }

  accept(visitor: GirVisitor): IntrospectedEnum {
    const node = this.copy({
      members: new Map(
        Array.from(this.members.entries()).map(([name, m]) => {
          return [name, m.accept(visitor)];
        })
      )
    });

    return visitor.visitEnum?.(node) ?? node;
  }

  getType(): TypeIdentifier {
    return new TypeIdentifier(this.name, this.ns);
  }

  asString<T extends FormatGenerator<any>>(generator: T): ReturnType<T["generateEnum"]> {
    return generator.generateEnum(this);
  }

  asClass(): GirRecord {
    const { name, namespace } = this;

    const clazz = new GirComplexRecord({ name, namespace });

    clazz.fields.push(
      ...Array.from(this.members.values()).map(m => {
       const field = new Field({
          name: m.name,
          type: NumberType,
          writable: true,
          isStatic: true,
        });
        
      
          field.doc = m.doc;
          field.metadata = m.metadata;

        return field;
      })
    );
    clazz.members = [];
    return clazz;
  }

  static fromXML(
    modName: string,
    ns: IntrospectedNamespace,
    options: LoadOptions,
    _parent,
    m: GirEnumElement | GirBitfieldElement,
    flags = false
  ): IntrospectedEnum {
    const em = new IntrospectedEnum(sanitizeMemberName(m.$.name), ns);

    if (m.$["glib:type-name"]) {
      em.resolve_names.push(m.$["glib:type-name"]);

      ns.registerResolveName(m.$["glib:type-name"], ns.name, em.name);
    }

    if (m.$["c:type"]) {
      em.resolve_names.push(m.$["c:type"]);

      ns.registerResolveName(m.$["c:type"], ns.name, em.name);
    }

    if (options.loadDocs) {
      em.doc = parseDoc(m);
      em.metadata = parseMetadata(m);
    }

    if (!m.member) {
      return em;
    }

    m.member.forEach(m => {
      const member = GirEnumMember.fromXML(modName, ns, options, em, m);
      
      em.members.set(member.name, member);
    });

    em.flags = flags;

    return em;
  }
}

export class GirEnumMember extends IntrospectedBase {
  value: string;
  c_identifier: string;

  constructor(name: string, value: string, c_identifier: string) {
    super(name);
    this.value = value;
    this.c_identifier = c_identifier;
  }

  accept(visitor: GirVisitor): GirEnumMember {
    const node = this.copy();
    return visitor.visitEnumMember?.(node) ?? node;
  }

  copy(): GirEnumMember {
    const { value, name, c_identifier } = this;

    return new GirEnumMember(name, value, c_identifier)._copyBaseProperties(this);
  }

  static fromXML(
    _: string,
    _ns: IntrospectedNamespace,
    options: LoadOptions,
    _parent,
    m: GirMemberElement
  ): GirEnumMember {
    const upper = m.$.name.toUpperCase();
    const c_identifier = m.$["c:identifier"];

    const enumMember = new GirEnumMember(upper, m.$.value, c_identifier);

    if (options.loadDocs) {
      enumMember.doc = parseDoc(m);
      enumMember.metadata = parseMetadata(m);
    }

    return enumMember;
  }

  asString<T extends FormatGenerator<any>>(generator: T): ReturnType<T["generateEnumMember"]> {
    return generator.generateEnumMember(this);
  }
}

function isEnumElement(e: unknown): e is GirEnumElement {
  return typeof e === "object" && e != null && "function" in e;
}

export class IntrospectedError extends IntrospectedEnum {
  functions: Map<string, IntrospectedStaticClassFunction> = new Map();

  asString<T extends FormatGenerator<any>>(generator: T): ReturnType<T["generateError"]> {
    return generator.generateError(this);
  }

  copy({
    members
  }: {
    parent?: undefined;
    members?: Map<string, GirEnumMember>;
  } = {}): IntrospectedEnum {
    const { namespace, name, flags } = this;

    const en = new IntrospectedError(name, namespace);

    for (const [key, member] of (members ?? this.members).entries()) {
      en.members.set(key, member.copy());
    }

    for (const [key, func] of this.functions.entries()) {
      en.functions.set(key, func.copy({ parent: en }));
    }

    en.flags = flags;

    return en._copyBaseProperties(this);
  }

  static fromXML(
    modName: string,
    ns: IntrospectedNamespace,
    options: LoadOptions,
    parent,
    m: GirEnumElement | GirBitfieldElement
  ): IntrospectedEnum {
    const err = new IntrospectedError(sanitizeMemberName(m.$.name), ns);

    if (m.$["glib:type-name"]) {
      err.resolve_names.push(m.$["glib:type-name"]);

      ns.registerResolveName(m.$["glib:type-name"], ns.name, err.name);
    }

    if (m.$["c:type"]) {
      err.resolve_names.push(m.$["c:type"]);

      ns.registerResolveName(m.$["c:type"], ns.name, err.name);
    }

    if (options.loadDocs) {
      err.doc = parseDoc(m);
      err.metadata = parseMetadata(m);
    }

    if (m.member) {
      m.member.forEach(m => {
        const member = GirEnumMember.fromXML(modName, ns, options, parent, m);
        err.members.set(member.name, member);
      });
    }

    if (isEnumElement(m) && m.function) {
      m.function.forEach(f => {
        const func = IntrospectedStaticClassFunction.fromXML(modName, ns, options, err, f);
        err.functions.set(func.name, func);
      });
    }

    return err;
  }
}
