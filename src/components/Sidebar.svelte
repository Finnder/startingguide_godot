<script>
    import SidebarBtn from "./SidebarBtn.svelte"

</script>

<div class="sidebar rounded-xl flex flex-col fixed w-1/6 bg-blue-400 h-screen p-3 phone:w-screen phone:h-1/6 phone:bottom-0 phone:flex-row phone:flex-auto">

    <h1 class="font-title text-white text-3xl p-2 mb-2 phone:hidden"><strong>Godot Starting Guide</strong></h1>
    <SidebarBtn text="Intro & Install"/>
    <SidebarBtn text="Project Setup" link="project_setup"/>
    <SidebarBtn text="Creating A Moving Character"/>

</div>
