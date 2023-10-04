export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0ab77341.js","app":"_app/immutable/entry/app.ee4c2451.js","imports":["_app/immutable/entry/start.0ab77341.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.c166c080.js","_app/immutable/entry/app.ee4c2451.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ff16eba4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/project_setup",
				pattern: /^\/project_setup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
