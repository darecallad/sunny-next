# Git Workflow & Commit Guidelines for AI Agents

This document outlines the mandatory git workflow for all AI agents working on this repository.

## 1. Feature Branch Policy
*   **Branch Naming:** Always use descriptive names (e.g., `feature/blog-automation`, `fix/hydration-error`).
*   **Base Branch:** Always branch from `master` (or `main`).

## 2. Squash-Before-Push Rule (CRITICAL)
To keep the git history clean, **you must squash all your commits into a single commit** before pushing your feature branch to the remote repository.

### Why?
*   We want one clean commit per feature.
*   We do not want to see "wip", "fix typo", "try again" commits in the final history.

### How to Squash (The AI Protocol)
Before you run `git push`, follow these steps:

1.  **Check your status:**
    ```powershell
    git status
    ```

2.  **Soft Reset to Base:**
    Reset your branch to the state of `master` (or your base branch) but keep your changes staged.
    ```powershell
    # Assuming you branched from 'master'
    git reset --soft master
    ```
    *If `master` is not the base, replace it with the correct branch name.*

3.  **Create One Unified Commit:**
    Create a single, descriptive commit message following [Conventional Commits](https://www.conventionalcommits.org/).
    ```powershell
    git commit -m "feat: add new blog post and optimize images"
    ```

4.  **Push to Origin:**
    ```powershell
    # If this is the first push:
    git push origin feature/your-branch-name

    # If you have already pushed before and are updating:
    git push --force origin feature/your-branch-name
    ```

## 3. Commit Message Convention
*   `feat:` New features
*   `fix:` Bug fixes
*   `docs:` Documentation changes
*   `style:` Formatting, missing semi-colons, etc.
*   `refactor:` Code refactoring
*   `chore:` Maintenance tasks

**Example:**
`feat: implement daily blog automation workflow and update guidelines`
