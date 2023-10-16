<script>
    
    import step1 from "../../assets/Step13-2DNodeScene.png"
    import step2 from "../../assets/Step14-SaveLevel.png"
    import step3 from "../../assets/Step15-AddChildNode.png"
    import step4 from "../../assets/Step16-CreateTileMap.png"

    import ContextSidebar from "../../components/ContextSidebar.svelte";

</script>

<main>
    
    <ContextSidebar contextItems={[
        {label: "Creating your first Node!", url: "#step1"},
        {label: "Saving Nodes / Scenes", url: "#step2"},
        {label: "Adding A Child Node", url: "#step3"},
        {label: "Tile Map!", url: "#step4"}

    ]}/>
    <h1><strong>Creating The World!</strong></h1> 
    
    <br>
    <div class="info-box text-lg">
        Everything you create in Godot is a Node, these Nodes consist of different components and scripts that are attached to them
    </div>

    <br>
    <ul class="step-list">
        <li id="step1"><p><span class="step">Step 1</span> Go ahead and click the "2D Scene" button, to create a 2D Scene :D</p></li>
        <img src={step1} alt="">

        <li id="step2"><p><span class="step">Step 2</span> And we can go ahead and save your main scene (the 2D node) to a folder of your choice</p></li>
        <img src={step2} alt="">

        <li id="step3"><p><span class="step">Step 3</span> Now we are going to add a child node to our <strong class="underline">root</strong> node
        <br>
        to do this we RIGHT CLICK our node and select "Add Child Node".
        </p></li>
        <img src={step3} alt="">

        <li id="step4"><p><span class="step">Step 4</span>In the search bar look for a "TileMap" Node</p></li>
        <img class="" src={step4} alt="">
        <br>

    </ul>

</main>
