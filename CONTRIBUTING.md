# Contributing to React Code Blocks

First off, thank you for considering contributing to React Code Blocks. It's people like you that make React Code Blocks such a great tool.

### Where do I go from here?

If you've noticed a bug or have a question, [search the issue tracker](https://github.com/rajinwonderland/react-code-blocks/issues) to see if someone else in the community has already created a ticket. If not, go ahead and make one!

### Fork & create a branch

If this is something you think you can fix, then [fork React Code Blocks](https://github.com/rajinwonderland/react-code-blocks/fork) and create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```bash
git checkout -b 325-add-language-support
```

### Working on the code

We use `pnpm workspaces` to house all of our demos and packages.

The `react-code-blocks` package is located under [`packages/react-code-blocks`](packages/react-code-blocks).

You can run the following command from the root of the project to start storybook:

```bash
pnpm rcb run storybook
```

### Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first 😸

### Committing Your Changes

We follow a set of conventions for commit messages to make the history easier to understand and to facilitate the creation of changelogs. To help with this process, we use `gacp` (Git Automated Commit and Push), which is a tool that helps to format commit messages according to the conventional commit format.

Before committing, make sure to stage your changes. You can do this with:

```bash
git add .
```

Instead of using git commit, we use an automated process via the command:

```bash
pnpm commit
```

This command will prompt you to fill out any required commit fields at commit time. No need to worry about the commit message format as gacp will guide you through the process.

### Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with React Code Blocks's master branch:

```bash
git remote add upstream https://github.com/rajinwonderland/react-code-blocks.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```bash
git checkout 325-add-language-support
git rebase master
git push --set-upstream origin 325-add-language-support
```

Finally, go to GitHub and [make a Pull Request](https://github.com/rajinwonderland/react-code-blocks/compare) 🎉

### Keeping your Pull Request updated

If a maintainer asks you to "rebase" your Pull Request, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

Here's a great article on rebasing, which basically just means getting the latest version of master and then putting your branch on top of it.

### Questions?

Feel free to contact either [@rajinwonderland](https://github.com/rajinwonderland) if you have any questions about contributing.
