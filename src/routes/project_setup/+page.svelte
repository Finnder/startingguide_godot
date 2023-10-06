<script>
    import godotprojmenu from "../../assets/newproj.png"
    import newprojmenu from "../../assets/newprojmenu.png"
    import ContextSidebar from "../../components/ContextSidebar.svelte";
    import "../../app.css"
</script>
<main class="mx-auto p-2">
    <ContextSidebar contextItems={[
        {label: "Creating The Project", url: "#creating-the-proj"}
    ]}/>
    <h1 class="font-title font-bold">Project Setup</h1>
    <h2 id="creating-the-proj">Creating The Project</h2>
    
    <ul class="step-list text-xl mt-2">
        <li><span class="step">Step 1</span>Open the application (Godot), and select "New Project" on the right hand side of the application.</li>
        <img src={godotprojmenu} alt="">
        <li><span class="step">Step 2</span>Select a path for your project to go <span class="important-label">IMPORTANT</span></li>
        <img src={newprojmenu} alt="">
        <li><span class="step">Step 3</span>Name your project & select "Create Folder"</li>
        <img src="" alt="">
        <li><span class="step">Step 4</span>Then select "Create & Edit"</li>

    </ul>
    <p></p>
</main>
