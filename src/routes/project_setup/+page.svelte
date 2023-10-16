    <script>
    import ContextSidebar from "../../components/ContextSidebar.svelte";
    import "../../app.css"

    import godotprojmenu from "../../assets/newproj.png"
    import newprojmenu from "../../assets/newprojmenu.png"
    import nameandcreate from "../../assets/Step5-CreateProject.png"
    import createandedit from "../../assets/Step6-ProjectDirecting.png"
    import makefolder from "../../assets/Step7-MakeAFolder.png"
    import createedit from "../../assets/Step8-Create&Edit.png"

</script>
<main class="mx-auto p-2">
    <ContextSidebar contextItems={[
        {label: "Creating The Project", url: "#creating-the-proj"},
        {label: "Step 1 - New Project", url: "#step-1"},
        {label: "Step 2 - File Path", url: "#step-2"},
        {label: "Step 3 - Name and Create", url: "#step-3"},
        {label: "Step 4 - Create & Edit", url: "#step-4"},
    ]}/>

    <h1 class="font-title"><strong>Project Setup</strong></h1>
    <h2 id="creating-the-proj">Creating The Project</h2>
    
    <ul class="step-list text-xl mt-2">
        <li id="step-1"><span class="step">Step 1</span>Open the application (Godot), and select "New Project" on the right hand side of the application.</li>
        <img src={nameandcreate} alt="">

        <li id="step-2"><span class="step">Step 2</span>Select "Browse" to select a path for your project to go, and select "Mobile" rendering</li>
        <img src={createandedit} alt="">

        <li id="step-3"><span class="step">Step 3</span>Name your project & select "Create Folder"</li>
        <img src={makefolder} alt="">

        <li id="step-4"><span class="step">Step 4</span>Select "Create and Edit"</li>
        <img src={createedit} alt="">

    </ul>
    <p></p>
</main>
