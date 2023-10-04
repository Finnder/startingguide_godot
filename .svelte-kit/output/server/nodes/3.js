

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/project_setup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4054145a.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ff16eba4.js"];
export const stylesheets = [];
export const fonts = [];
