Build a demo site in the demos folder, get it ready to be shown and back it up.

The launch line is for Claude Code, the default; the text between the triple quotes can be given to another AI CLI as it is.

```
claude --permission-mode bypassPermissions """
Build a demo named <name> in the demos folder with <builder> and get it ready to be shown
# ~/workspace/demos · https://<name>.ddev.site · container-based (DDEV by default)
# <builder> is a cmd-*-project.sh of the folder, for example cmd-webship11-0-x-project.sh
# the builder deletes a project of the same name first: stop if <name> is a site somebody still needs
# nothing on the host: no composer, drush, npm or mysql outside the site's container
# a feature to write or a run to read: the book Automated Functional Testing Recipes first (its README.md, then the matching chapter), from .claude/automated-functional-testing-recipes/ in the project, ~/.claude/automated-functional-testing-recipes/ or https://github.com/webship/webship-js-ai-agent/tree/2.0.x/automated-functional-testing-recipes

1. bash <builder> --help
   tell me the flags it takes
2. bash <builder> <name> --install --add-users
3. bash cmd-tools-hostnames.sh <name>
   tell me the address the demo answers at
4. bash cmd-tools-testing.sh <name>
   bash cmd-tools-testing.sh <name> --run
   the demo is checked with Webship-js before it is shown
5. bash cmd-tools-backup-demo.sh <name>
   the folder and the database, into backups/demos/

If a command fails, show the line that failed and stop. Do not retry with other flags.
Report the address, the result of the run and where the backup is. Never print a password.
The demo stays: remove it only when I ask, with: bash cmd-tools-remove.sh <name>
"""
```
