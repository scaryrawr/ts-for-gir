import { IntrospectedNamespace } from "../gir/namespace.js";
import { ClassStructTypeIdentifier, IntrospectedRecord } from "../index.js";

export default {
    namespace: "Tracker",
    version: "1.0",
    modifier(namespace: IntrospectedNamespace) {
        const SparqlError = namespace.getEnum("Error");

        if (!SparqlError) throw new Error("Error enum not found in Tracker.");

        namespace.members.delete("Error");

        SparqlError.name = "SparqlError";

        namespace.members.set("SparqlError", SparqlError);

        // Hack around broken references in Tracker

        const CursorClass = namespace.members.get("SparqlCursorClass");

        if (CursorClass instanceof IntrospectedRecord) {
            // @ts-expect-error This is a private property by Tracker is cursed
            CursorClass._structFor = new ClassStructTypeIdentifier("SparqlCursor", {
                namespace: "Tracker",
                version: "1.0"
            });
        }

        const ConnectionClass = namespace.members.get("SparqlConnectionClass");

        if (ConnectionClass instanceof IntrospectedRecord) {
            // @ts-expect-error This is a private property by Tracker is cursed
            ConnectionClass._structFor = new ClassStructTypeIdentifier("SparqlConnection", {
                namespace: "Tracker",
                version: "1.0"
            });
        }

        const BuilderClass = namespace.members.get("SparqlBuilderClass");

        if (BuilderClass instanceof IntrospectedRecord) {
            // @ts-expect-error This is a private property by Tracker is cursed
            BuilderClass._structFor = new ClassStructTypeIdentifier("SparqlBuilder", {
                namespace: "Tracker",
                version: "1.0"
            });
        }
    }
};
