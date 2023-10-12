<script>
    import step1 from "../../assets/Step17-NewTileset.png"
    import step2 from "../../assets/Step18-MoveTilesToTileset.png"
    import step3 from "../../assets/Step19-AutoCreateTiles.png"
    import step4 from "../../assets/Step20-AddPhysics.png"
    import step5 from "../../assets/Step21-AddLayer.png"
    import step6 from "../../assets/Step22-AddPhysicsToTile.png"
    import step7 from "../../assets/Step23-AddTiles.png"
    import step8 from "../../assets/Step24-Extend&Beautify.png"
    import step9 from "../../assets/Step25-RunScene.png"

  import ContextSidebar from "../../components/ContextSidebar.svelte";
</script>

<main>
    
    <ContextSidebar contextItems={[
        {label: "New Tile Set", url: "#step1"},
        {label: "Drag Download", url: "#step2"},
        {label: "Auto Creating Tiles", url: "#step3"},
        {label: "Physics Layers", url: "#step4"},
        {label: "Renaming Layers", url: "#step5"},
        {label: "Adding Physical Bounderies", url: "#step6"},
        {label: "Painting Tiles", url: "#step7"},
        {label: "Painting A Ground", url: "#step8"},
        {label: "Test", url: "#step9"},
    ]}/>
    <br>
    <h1><strong>Tile Set</strong></h1>
    <div class="info-box text-lg">Tile sets function as a palette of tiles, enabling designers to craft the environments and worlds in which players interact.</div>

    <br>
    <ul>

        <br>
        <li id="step1"><p><span class="step">Step 1</span>Go ahead and create a "New Tileset" by selecting the dark box with left click</p></li>
        <img class="w-1/6" src={step1} alt="">

        <br>
        <li id="step2"><p><span class="step">Step 2</span>Now we drag in our downloaded assets into the "TileSet" box.</p></li>
        <img src={step2} alt="">

        <br>
        <li id="step3"><p><span class="step">Step 3</span>When importing it will pop up with a menu asking you if you want it to auto create the tile sheet, select "Yes"</p></li>
        <img class="broken-img" src={step3} alt="">

        <br>
        <li id="step4"><p><span class="step">Step 4</span>Now that the tile set is created, go to the right hand properties tab, and add a physics layers <br>
        This will make it so the player can collide with specific tiles.
        </p></li>
        <img class="broken-img" src={step4} alt="">

        <br>
        <li id="step5"><p><span class="step">Step 5</span>Renaming your layers to something that makes sense is a very important part to keep things consistant</p></li>
        <img class="broken-img w-1/6" src={step5} alt="">

        <br>
        <li id="step6"><p><span class="step">Step 6</span>Now you can select tiles and add bounderies to different tiles</p></li>
        <img class="broken-img w-1/4" src={step6} alt="">

        <br>
        <li id="step7"><p><span class="step">Step 7</span>Select "TileMap" and now you can select tiles to paint on the grid </p></li>
        <img class="broken-img w-1/4" src={step7} alt="">

        <br>
        <li id="step8"><p><span class="step">Step 8</span>Now create a nice little ground for our player to move around on</p></li>
        <img class="broken-img w-1/3" src={step8} alt="">

        <br>
        <li id="step9"><p><span class="step">Step 9</span>Now press play, and test the scene.</p></li>
        <img class="broken-img w-1/3" src={step9} alt="">

    </ul>
    <br>

</main>
