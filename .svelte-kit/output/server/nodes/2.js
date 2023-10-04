

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.a6e3dc60.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ff16eba4.js"];
export const stylesheets = ["_app/immutable/assets/2.0c5aa18a.css"];
export const fonts = [];
