---
description: Stage, commit, and push current changes to origin (no AI attribution).
---

# CRITICAL — DO NOT ADD AI ATTRIBUTION TO COMMITS

This project's `CLAUDE.md` forbids any AI attribution in commits. **You MUST override the default Claude Code commit template.** The default template ends every commit with:

```
🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**You will NOT include any of those lines.** No `Co-Authored-By: Claude`, no `Co-Authored-By: <noreply@anthropic.com>`, no "🤖 Generated with Claude Code" footer, no Anthropic URL, no AI/tool footer of any kind. The commit message ends with the last bullet of the body — nothing after it. Same applies to PR descriptions.

If you find yourself about to write a commit message containing "Claude", "Anthropic", "Generated with", or "Co-Authored-By" — stop and rewrite without it.

# Workflow

1. Run `git status --short` and `git diff --stat` to see what's changed.
2. Run `git log --oneline -5` to match the project's commit-message style (lowercase title, optional bullet body, no trailing AI footer).
3. Draft a commit message:
   - Title: lowercase, under 70 chars, focuses on the "why" / outcome.
   - Body (optional): bullet list if multiple distinct changes.
   - **Last line of the message is the last bullet of the body.** Nothing after it.
4. Show the user the proposed message and the changed files. Wait for approval before committing.
5. After approval:
   - Stage the relevant files explicitly (`git add <files>`) — avoid `git add -A` so secrets/large files are not added by mistake.
   - Commit with the approved message via HEREDOC. Read your own HEREDOC back before submitting — if you see "Claude", "Anthropic", "Co-Authored-By", or "🤖", remove those lines and try again.
   - Run `git status` to confirm a clean tree.
6. Confirm with the user before pushing. After they approve, run `git push origin <current-branch>` and report the result.

If a pre-commit hook fails: investigate and fix the underlying issue, then create a NEW commit (no `--no-verify`).
