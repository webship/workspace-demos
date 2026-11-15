---
description: Build a demo site in the demos/ folder of the Webship Workspace with one of the folder's builders, installed and with its default accounts, say where it answers, and back it up.
argument-hint: '<builder or family> <name> [flags of the builder]'
---

# /demos-build

Build a demo in `~/workspace/demos` from: `$ARGUMENTS`

The arguments are the text typed after the command: the first word names the builder, the second
the demo, and what follows is passed to the builder as it is. With no name, stop and ask for one.
The workspace is container-based (DDEV by default): the builder runs the site in its own
container, and nothing is run on the host for it.

## 1. Find the builder

```bash
cd ~/workspace/demos
grep -H "^# workspace-name:" cmd-*-project.sh
```

The first word is a builder's file name, or enough of it to pick one: `webship` is
`cmd-webship11-0-x-project.sh`, `drupalcms` is `cmd-drupalcms2-x-project.sh`, `drupal11` is
`cmd-drupal11-recommended-project.sh`. When it fits more than one, list them and ask.

## 2. Make sure the name is free

```bash
ls -d ~/workspace/*/<name> 2>/dev/null
ddev list | grep -w <name>
```

A builder deletes a project of the same name first. If the name is taken, stop and ask.

## 3. Build, installed and with its accounts

```bash
bash cmd-webship11-0-x-project.sh --help
bash cmd-webship11-0-x-project.sh <name> --install --add-users
```

With the builder that was picked and the flags that were typed; a demo is always built with
`--install`, and with `--add-users` where the builder has it. Run it once. If it fails, show the
line that failed and stop.

## 4. Say where it answers, and back it up

```bash
bash cmd-tools-hostnames.sh <name>
bash cmd-tools-backup-demo.sh <name>
```

Report the builder, the address (`https://<name>.ddev.site`), that the default accounts are there
(never print a password), and where the backup is (`backups/demos/`). For an extra address or a
check with Webship-js, hand over to the `demos-site-builder` agent; the `demos-workflow` skill
lists every command of the folder.
