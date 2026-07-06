<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Mandatory development rules

These rules are obligatory in every part of development, with no exceptions:

1. **No comments in code.** Code must be clear enough to explain itself. If a piece of code seems to need a comment, rewrite it — better names, smaller functions, extracted variables — until it doesn't.
2. **Prioritize developer experience.** Anybody should be able to read and understand the code: descriptive names, small focused functions, obvious data flow, no cleverness for its own sake.
3. **Always apply best practices** — strict typing, single responsibility, shared validation, no duplication, accessible and performant output (see `docs/PLAN.md` §5 for the full standards).
4. **Stick to the folder structure** defined in `docs/PLAN.md` §4. New files go in their designated layer (`app` = thin routes, `components/sections` = page markup, `components/ui` = primitives, `lib` = logic, `messages/` = all copy). Never invent parallel locations.
