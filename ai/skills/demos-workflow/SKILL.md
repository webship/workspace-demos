---
name: demos-workflow
description: How work is done in the `demos/` folder of the Webship Workspace — which `cmd-*.sh` builds a demo site, the flags of each command, how a demo gets its accounts and an address to give out, how it is checked with Webship-js and backed up before it is shown, and the settings keys of the folder. Use when asked to "build a demo", "which builder is there for a Webship demo", "add an address to the demo", "back up the demo", or when a command of `demos/` is about to be run.
argument-hint: '[what you are about to do in demos]'
---

# demos-workflow

`~/workspace/demos` is the Demos folder of a Webship Workspace (container-based, DDEV by default).
Demos are demo sites and default content, built to be shown: a demo is installed, has its accounts, answers at an address that can be given out, and is backed up before it is shown. It comes with the Demos plugin (`@webship.co/workspace-demos`), which places the commands below in the
folder. Every command finds the workspace from its own path; run it from the folder, and read
`bash <command> --help` before quoting a flag.

## The order of work

1. **Build** the demo, installed and with its accounts:
   `bash cmd-webship11-0-x-project.sh mysite --install --add-users`. The name is the folder, the
   container project and the address (`https://mysite.ddev.site`). A builder deletes a project of
   the same name first.
2. **Give it the address it is shown at**, when the name is not it:
   `bash cmd-tools-hostnames.sh mysite --add staging --start`.
3. **Check it** before it is shown: `bash cmd-tools-testing.sh mysite`, then
   `bash cmd-tools-testing.sh mysite --run`.
4. **Back it up** before the showing and before any change: `bash cmd-tools-backup-demo.sh mysite`
   (the folder and the database, into `backups/demos/`).
5. **Remove** it only when asked: `bash cmd-tools-remove.sh mysite`.

## Builders

| Builder | Builds | Flags |
| --- | --- | --- |
| `cmd-cucumber11-0-x-project.sh` | Cucumber 11.0.x | `--add-users` `--enable` `--install` `--php-version` `--require` `--skip-drop-database` `--skip-set-default-settings` |
| `cmd-drupal10-3-x-recommended-project.sh` | Drupal 10.3.x (recommended project) | `--add-users` `--dev` `--enable` `--install` `--launch` `--php-version` `--profile` `--require` |
| `cmd-drupal10-recommended-project.sh` | Drupal 10 (recommended project) | `--add-users` `--dev` `--enable` `--install` `--launch` `--php-version` `--profile` `--require` |
| `cmd-drupal11-0-x-recommended-project.sh` | Drupal 11.0.x (recommended project) | `--add-users` `--dev` `--enable` `--install` `--launch` `--php-version` `--profile` `--require` |
| `cmd-drupal11-4-0-recommended-project.sh` | Drupal 11.4.0 (recommended project) | `--add-users` `--dev` `--enable` `--install` `--launch` `--php-version` `--profile` `--require` |
| `cmd-drupal11-4-x-recommended-project.sh` | Drupal 11.4.x (recommended project) | `--add-users` `--dev` `--enable` `--install` `--launch` `--php-version` `--profile` `--require` |
| `cmd-drupal11-recommended-project.sh` | Drupal 11 (latest) | `--add-users` `--dev` `--enable` `--install` `--launch` `--php-version` `--profile` `--require` |
| `cmd-drupal12-recommended-project.sh` | Drupal 12 (latest) | `--add-users` `--dev` `--enable` `--install` `--launch` `--php-version` `--profile` `--require` |
| `cmd-drupalcms2-1-0-project.sh` | Drupal CMS 2.1.0 | `--add-users` `--install` `--php-version` |
| `cmd-drupalcms2-x-project.sh` | Drupal CMS 2.x | `--add-users` `--install` `--php-version` |
| `cmd-webship11-0-0-project.sh` | Webship 11.0.0 | `--add-users` `--enable` `--install` `--php-version` `--require` `--skip-drop-database` `--skip-set-default-settings` |
| `cmd-webship11-0-x-project.sh` | Webship 11.0.x | `--add-users` `--enable` `--install` `--php-version` `--require` `--skip-drop-database` `--skip-set-default-settings` |
| `cmd-webships2-0-0-project.sh` | Webships 2.0.0 | `--add-users` `--enable` `--install` `--php-version` `--require` `--skip-drop-database` `--skip-set-default-settings` |
| `cmd-webships2-0-x-project.sh` | Webships 2.0.x | `--add-users` `--enable` `--install` `--php-version` `--require` `--skip-drop-database` `--skip-set-default-settings` |
| `cmd-webships3-0-x-project.sh` | Webships 3.0.x | `--add-users` `--php-version` `--template` |

`--install` installs the site (without it the installer waits at the address); `--add-users` adds
the default accounts of the distribution. A builder deletes a project of the same name first.

## Tools

| Command | What it does | Flags |
| --- | --- | --- |
| `cmd-tools-add-users.sh` | Adds the default accounts of a distribution to a site: `<site> <distribution>` | none |
| `cmd-tools-backup-demo.sh` | An item as an archive and its database as a dump, into `backups/demos/` | none |
| `cmd-tools-cancel-users.sh` | Removes those accounts again: `<site> <distribution>` | none |
| `cmd-tools-checks.sh` | Runs the code-quality checks an item's `package.json` declares; `--list` prints the plan and runs nothing | `--browser` `--e2e` `--fail-fast` `--install` `--list` `--only` `--runner` `--skip` |
| `cmd-tools-clone.sh` | Folder and database under a new name, here or in another folder | `--branch` `--extra-hostname` `--no-build-copy` `--no-db` `--target-workspace` `--to` `--with-workspace-hostname` `--worktree` |
| `cmd-tools-git-change-filemode-to-false.sh` | Sets `core.fileMode` to false in the git checkout of every item of the folder | none |
| `cmd-tools-hostnames.sh` | The addresses a site answers at, and one more | `--add` `--remove` `--start` `--with-workspace` |
| `cmd-tools-reclaim.sh` | Disk held by projects whose folder is gone: a dry run unless `--apply` | `--apply` `--keep-days` `--list-protected` `--only` |
| `cmd-tools-remove.sh` | Containers, volumes and folder together; refuses work that is on no remote unless `--force` | `--backup` `--force` `--orphans` |
| `cmd-tools-screen.sh` | A detached session with a log the dashboard follows | `--follow` `--list` `--log` `--run` `--stop` |
| `cmd-tools-testing.sh` | Sets the Webship-js testing stack up on a site, or runs its suite in the site's container | `--browser` `--configure` `--dry-run` `--headed` `--path` `--retry` `--run` `--tags` |
| `cmd-tools-update-all.sh` | `composer update` in every site, **on the host**: not yet moved into the containers. Do not run it unasked; use `ddev composer update` in one site | none |

## Settings

| Key | File | What it says |
| --- | --- | --- |
| `doc.name` | `core/config/workspace.demos.settings.yml` | The folder under the workspace root: `demos` |
| `type` | `core/config/workspace.demos.settings.yml` | `sites`: the rows of the page are built sites, with the Build, Tests, Checks, Users, Backup and Remove actions |
| `composer` | `core/config/workspace.demos.settings.yml` | `full`: the COMPOSER menu may install and update here, in the site's container |
| `assistant.name`, `assistant.placeholder` | `core/config/workspace.demos.settings.yml` | What the assistant is called on this page; `default` takes the workspace's |
| `workspaces` | `core/config/settings.yml` | The active folders; `demos` is on it once the plugin is activated |
| `account.name`, `account.mail` | `core/config/settings.yml` | The workspace account: the administrator of every site a builder installs |

## Rules

- Containers only: never `composer`, `drush`, `php`, `npm` or `mysql` on the host for a site. In the
  site's folder: `ddev composer …`, `ddev drush …`, `ddev export-db --file=…`, `ddev start -y`,
  `ddev stop` (no `-y`).
- Never write database settings into `settings.php`.
- A demo is kept while it is shown: back it up with `bash cmd-tools-backup-demo.sh mysite` before a change, and remove it only when asked.

The Demos plugin places these beside this one, each in the workspace folder of its kind: the agent `demos-site-builder` (`ai-agents/`), the command `/demos-build` (`ai-commands/`) and the prompt `demos-build-a-demo` (`ai-prompts/`).

## The book

For any automated functional testing in this work (a Gherkin feature, a step definition, choosing a
step, a test run and its failures), read the book *Automated Functional Testing Recipes* first.

- **Where.** Use the first that exists: `.claude/automated-functional-testing-recipes/` in the project,
  `~/.claude/automated-functional-testing-recipes/` (installed by webship/webship-js-ai-agent,
  webship/webship-js-skills or webship/ai-agents), or
  https://github.com/webship/webship-js-ai-agent/tree/2.0.x/automated-functional-testing-recipes
- **How.** Its `README.md` first, then the chapter that matches the task (one file per chapter,
  named by its subject), not the single complete file.
- **Which wins.** The installed webship-js package and the step pack are the source of truth for
  step phrasing. When they differ from the book, follow them and say so.
