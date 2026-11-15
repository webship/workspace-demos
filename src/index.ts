/**
 * The Demos workspace for Webship Workspace: the `demos/` folder as a plugin.
 *
 * What the package carries is placed by the installer from the manifest (the folder's settings file,
 * its commands, its docs and its AI items, each in the folder of its kind) and listed by --activate; the dashboard draws the workspace from the
 * settings file like any other. Nothing to register at run time yet: this is where the folder's own
 * rail buttons, row menus or assistant context would go.
 */

import type { PluginApi } from '@webship.co/workspace-plugin-api';

export const WORKSPACE_KEY = 'demos';

/** The AI items the installer places, each in the workspace folder of its kind (ai/ in this package). */
export const AGENTS = ['demos-site-builder'];
export const SKILLS = ['demos-workflow'];
export const AI_COMMANDS = ['demos-build'];
export const PROMPTS = ['demos-build-a-demo'];

export function register(api: PluginApi): void {
  api.addAssistantContext(() => `The demos/ workspace is the Demos workspace (a plugin, @webship.co/workspace-demos); its commands are the cmd-*.sh scripts in that folder. It comes with AI items for work in this folder: the agent \`demos-site-builder\` (ai-agents/), the skill \`demos-workflow\` (ai-skills/), the command \`/demos-build\` (ai-commands/) and the prompt \`demos-build-a-demo\` (ai-prompts/).`);
}
