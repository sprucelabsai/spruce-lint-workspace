export const deprecation = {
    meta: {
        type: "problem",
        docs: {
            description: "disallow the use of deprecated APIs",
            category: "Best Practices",
            recommended: false,
        },
        schema: [], // no options
    },
    create: function (context) {
        let deprecatedIdentifiers = new Map(); // Stores deprecated identifiers

        return {
            // When any node is found
            '*': function (node) {
                const sourceCode = context.getSourceCode();
                const commentsBefore = sourceCode.getCommentsBefore(node);

                // Check if any preceding comment has the @deprecated tag
                commentsBefore.forEach(comment => {
                    if (/(@deprecated)/.test(comment.value)) {
                        
                        if (node.id && node.id.name) {
                            // Store this node's name as deprecated
                            deprecatedIdentifiers.set(node.id.name, node);
                        }
                    }
                });
            },

            // Check usage of any identifier
            'Identifier': function (node) {
                if (deprecatedIdentifiers.has(node.name)) {
                    const match = deprecatedIdentifiers.get(node.name);

                    if (node !== match.id) {
                        context.report({
                            node,
                            message: `Usage of deprecated API '${node.name}'.`,
                        });
                    }
                }
            }
        };
    },
};

const deprecationPlugin = {
    rules: {
        'no-deprecated': deprecation,
    },
}

export default deprecationPlugin;
