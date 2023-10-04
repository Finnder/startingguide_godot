import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
const SidebarBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "placeholder" } = $$props;
  let { link = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<a${add_attribute("href", "/" + link, 0)} class="sidebar-btn bg-white rounded border-white hover:bg-gray-700 phone:text-xl hover:text-white transition p-2 m-2 cursor-pointer"><p>${escape(text)}</p></a>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="sidebar rounded-xl flex flex-col fixed w-1/6 bg-blue-400 h-screen p-3 phone:w-screen phone:h-1/6 phone:bottom-0 phone:flex-row phone:flex-auto"><h1 class="font-title text-white text-3xl p-2 mb-2 phone:hidden" data-svelte-h="svelte-1w972cs"><strong>Godot Starting Guide</strong></h1> ${validate_component(SidebarBtn, "SidebarBtn").$$render($$result, { text: "Intro & Install" }, {}, {})} ${validate_component(SidebarBtn, "SidebarBtn").$$render(
    $$result,
    {
      text: "Creating The Project",
      link: "creating_proj"
    },
    {},
    {}
  )} ${validate_component(SidebarBtn, "SidebarBtn").$$render($$result, { text: "Creating A Moving Character" }, {}, {})}</div>`;
});
const page_style = "";
const image = "/_app/immutable/assets/gd-bg.d58204fb.jpg";
const ContextSidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contextItems = [
    { label: "Intro", url: "#intro-section" },
    {
      label: "Install",
      url: "#install-section"
    }
  ] } = $$props;
  if ($$props.contextItems === void 0 && $$bindings.contextItems && contextItems !== void 0)
    $$bindings.contextItems(contextItems);
  return `<main class="phone:hidden"><div class="fixed right-0 top-0 bg-black/5 w-1/6 h-screen p-2"><h1 class="font-title text-3xl" data-svelte-h="svelte-hr6dm4">Context Menu</h1> <div class="context-list"><ul>${each(contextItems, (item, i) => {
    return `<li><a${add_attribute("href", item.url, 0)} class="text-xl p-2 text-blue-700 hover:text-white hover:cursor-pointer">${escape(i + 1)}: ${escape(item.label)}</a> </li>`;
  })}</ul></div></div></main>`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(ContextSidebar, "ContextSidebar").$$render($$result, {}, {}, {})} <h1 class="font-title" id="intro-section" data-svelte-h="svelte-f12jp0"><strong>Intro</strong></h1> <h2 data-svelte-h="svelte-efpthm">Welcome to the <span class="text-blue-500">Godot Starting Guide</span>!</h2> <p data-svelte-h="svelte-3ho0kv">A short and simple guide to creating your first project in Godot!</p> <br> <h2 class="font-title text-3xl" id="install-section" data-svelte-h="svelte-pujeu6"><strong>Installation</strong></h2> <p data-svelte-h="svelte-loqht5">To install the game engine, we go to 
        <a class="link" target="_blank" href="https://godotengine.org">https://godotengine.org</a></p> <p data-svelte-h="svelte-1yk4ifq">or you can download here</p> <br> <a class="btn-download" href="https://github.com/godotengine/godot/releases/download/4.1.1-stable/Godot_v4.1.1-stable_linux.x86_64.zip" data-svelte-h="svelte-9au1jq">Linux</a> <a class="btn-download" href="https://github.com/godotengine/godot/releases/download/4.1.1-stable/Godot_v4.1.1-stable_win64.exe.zip" data-svelte-h="svelte-12l1rae">Windows</a> <a class="btn-download" href="https://github.com/godotengine/godot/releases/download/4.1.1-stable/Godot_v4.1.1-stable_macos.universal.zip" data-svelte-h="svelte-1cy9icc">Mac</a> <img class="w-2/4 mx-auto rounded mt-8 shadow-2xl"${add_attribute("src", image, 0)} alt=""></main>`;
});
const app = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <main>${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})} <div class="p-2 h-screen">${validate_component(Home, "Home").$$render($$result, {}, {}, {})}</div></main>`;
});
export {
  Page as default
};
