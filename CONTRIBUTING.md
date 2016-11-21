# Contributing

Welcome to Goalie! Glad to have you on the project.

When contributing to this repository, please follow the conventions and guidelines outlined in this document.

You may work on any [open issue][issues], but it is preferred that you utilize the [main project board][main-project] and only pick issues from the top of the backlog.

## Pull Requests

All pull requests will be reviewed by the project lead. They may request or suggest changes.

Once a pull request has been approved, it is up to the pull request issuer to merge the code.

## Code Quality

### Prefer clear names and small functions

Always aim for concise and appropriate names. When in doubt, use descriptive, longer names over shorter, less meaningful ones.

Keep your functions well-scoped, small, and easily readable. Keep environmental dependencies to a minimum.

### Use the linter

We use [ESLint][eslint] to promote consistency and readability across all source code.

Before you commit, run the linter and resolve any errors or warnings. The linter rules are not set in stone—edit the config if you feel the rules are too restrictive or not restrictive enough.

```shell-session
npm run lint
```

## Git Conventions

### Follow practical, conventional commit message style

We use [commitizen][commitizen] along with the [cz-conventional-changelog][cz-conventional-changelog] adapter to promote a consistently structured, readable, searchable, and information-dense git history.

To use commitizen from your command line, use the command `git cz` when you want to commit. You don't need to fill out all of the fields it prompts for, but you should at least provide:

- type of change
- terse, one-line commit description
- issue the commit closes (if any)

### Name branches with author, subject, and issue number

Branches should be named using the format `<author initials>/[#<issue number>]<subject / feature>`.

Example of branch name addressing issue `#5 - Add users table` written by author Lao Tzu: `lt/#5-users-table`.

If the branch doesn't cover any particular issue, or spans multiple issues, omit the `#N` in the branch name, e.g.: `lt/users-table`.

[commitizen]: http://commitizen.github.io/cz-cli/
[cz-conventional-changelog]: https://www.npmjs.com/package/cz-conventional-changelog
[eslint]: http://eslint.org/

[issues]: https://github.com/GuildCrafts/goalie/issues
[main-project]: https://github.com/GuildCrafts/goalie/projects/1
