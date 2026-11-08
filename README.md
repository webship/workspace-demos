# @webship.co/workspace-demos

The **Demos** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `demos/` folder (type `sites`), its settings file (`core/config/workspace.demos.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-demos
bash core/scripts/plugins.sh --activate demos     # puts `demos` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install demos      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## The commands

| Command |
| --- |
| `cmd-cucumber11-0-x-project.sh` |
| `cmd-drupal10-3-x-recommended-project.sh` |
| `cmd-drupal10-recommended-project.sh` |
| `cmd-drupal11-0-x-recommended-project.sh` |
| `cmd-drupal11-4-0-recommended-project.sh` |
| `cmd-drupal11-4-x-recommended-project.sh` |
| `cmd-drupal11-recommended-project.sh` |
| `cmd-drupal12-recommended-project.sh` |
| `cmd-drupalcms2-1-0-project.sh` |
| `cmd-drupalcms2-x-project.sh` |
| `cmd-tools-add-users.sh` |
| `cmd-tools-backup-demo.sh` |
| `cmd-tools-cancel-users.sh` |
| `cmd-tools-checks.sh` |
| `cmd-tools-clone.sh` |
| `cmd-tools-git-change-filemode-to-false.sh` |
| `cmd-tools-graphify.sh` |
| `cmd-tools-hostnames.sh` |
| `cmd-tools-obsidian.sh` |
| `cmd-tools-ragify.sh` |
| `cmd-tools-reclaim.sh` |
| `cmd-tools-remove.sh` |
| `cmd-tools-screen.sh` |
| `cmd-tools-testing.sh` |
| `cmd-tools-update-all.sh` |
| `cmd-webship11-0-0-project.sh` |
| `cmd-webship11-0-x-project.sh` |
| `cmd-webships2-0-0-project.sh` |
| `cmd-webships2-0-x-project.sh` |
| `cmd-webships3-0-x-project.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
