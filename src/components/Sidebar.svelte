<script>
  import Icon from "@iconify/svelte";
  import SidebarBtn from "./SidebarBtn.svelte"

</script>

<div class="sidebar overflow-y-auto overflow-x-hidden rounded-xl flex flex-col fixed w-1/6 bg-blue-400 h-5/6 p-3 phone:m-0 phone:rounded-none phone:w-screen phone:h-1/6 phone:bottom-0 phone:flex-row phone:flex-auto m-3 phone:overflow-x-auto">
    
    <Icon icon="devicon:godot" class="text-center mx-auto phone:hidden" width="80px"/>
    <h1 class="font-title text-white text-3xl p-2 mb-2 phone:hidden"><strong>Godot Starting Guide</strong></h1>
    <SidebarBtn text="Intro & Install" link="" icon="uil:book-reader"/>
    <SidebarBtn text="Project Setup" link="project_setup" icon="uil:box"/>
    <SidebarBtn text="Downloading Assets" link="downloading_assets" icon="uil:bring-front"/>
    <SidebarBtn text="Creating The World" link="creating_the_world" icon="uil:cell"/>
    <SidebarBtn text="Tile Set" link="tileset" icon="uil:border-inner"/>
    <SidebarBtn text="Creating The Player" link="creating_the_player" icon="uil:head-side"/>
    <SidebarBtn text="Conclusion" link="conclusion" icon="mdi:hand-wave-outline"/>
</div>
