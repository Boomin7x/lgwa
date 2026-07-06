export default {
    create(context) {
        return {
            Program() {
                const sourceCode = context.sourceCode
                const comments = sourceCode.getAllComments()
                for (const comment of comments) {
                    context.report({
                        node: comment,
                        message:
                            "Comments are not allowed. Make code self-explanatory instead.",
                    })
                }
            },
        }
    },
}
