<script>
    import godotprojmenu from "../../assets/newproj.png"
    import newprojmenu from "../../assets/newprojmenu.png"
    import ContextSidebar from "../../components/ContextSidebar.svelte";
    import "../../app.css"
</script>
<main class="mx-auto p-2">
    <ContextSidebar contextItems={[
        {label: "Creating The Project", url: "#creating-the-proj"},
        {label: "Step 1 - New Project", url: "#step-1"},
        {label: "Step 2 - File Path"},
        {label: "Step 3 - Name and Create"},
        {label: "Step 4 - Create & Edit"},
    ]}/>
    <h1 class="font-title font-bold">Project Setup</h1>
    <h2 id="creating-the-proj">Creating The Project</h2>
    
    <ul class="step-list text-xl mt-2">
        <li id="step-1"><span class="step">Step 1</span>Open the application (Godot), and select "New Project" on the right hand side of the application.</li>
        <img src={godotprojmenu} alt="">
        <li id="step-2"><span class="step">Step 2</span>Select "Browse" to select a path for your project to go</li>
        <img src={newprojmenu} alt="">
        <li><span class="step">Step 3</span>Name your project & select "Create Folder"</li>
        <img src="" alt="">
        <li><span class="step">Step 4</span>Then select "Create & Edit"</li>

    </ul>
    <p></p>
</main>
