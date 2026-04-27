---
description: Stage, commit, and push current changes to origin (no AI attribution).
---

Run a git push workflow for this repository.

1. Run `git status --short` and `git diff --stat` to see what's changed.
2. Run `git log --oneline -5` to match the project's commit-message style (lowercase, brief title, optional bullet body).
3. Draft a commit message that summarizes the changes:
   - Title: lowercase, under 70 chars, focuses on the "why" / outcome.
   - Body (optional): bullet list if multiple distinct changes.
   - **Never** include `Co-Authored-By: Claude`, "Generated with Claude Code", or any AI attribution.
4. Show the user the proposed message and changed files. Wait for approval before committing.
5. After approval:
   - Stage the relevant files explicitly (`git add <files>`) — avoid `git add -A` so secrets/large files are not added by mistake.
   - Commit with the approved message via HEREDOC.
   - Run `git status` to confirm a clean tree.
6. Confirm with the user before pushing. After they approve, run `git push origin <current-branch>` and report the result.

If a pre-commit hook fails: investigate and fix the underlying issue, then create a NEW commit. Never use `--no-verify`.
