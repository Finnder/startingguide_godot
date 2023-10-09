<script>
    import step1 from "../../assets/Step26-NewCharacterChildNode.png"
    import step2 from "../../assets/Step27-CollisionShape2D.png"
    import step3 from "../../assets/Step28-CapsuleShape.png"
    import step4 from "../../assets/Step29-Rename&SaveScene.png"
    import step5 from "../../assets/Step30-CharactersFolder&SaveScene.png"
    import step6 from "../../assets/Step31-OpenSceneEditor.png"
    import step7 from "../../assets/Step32-AddIdleSprite.png"
    import step8 from "../../assets/Step33-EditSprite&Location.png"
    import step9 from "../../assets/Step34-ChangeOrder.png"
    import step10 from "../../assets/Step35-AdjustShape&Size.png"
    import step11 from "../../assets/Step36-NewScript.png"
    import step12 from "../../assets/Step37-BasicMovement.png"
    import step13 from "../../assets/Step38-SaveMainScene.png"
  import ContextSidebar from "../../components/ContextSidebar.svelte";

</script>

<main>
    
    <ContextSidebar contextItems={[
        {label: "CharacterBody2D Node", url: "#step1"},
        {label: "Child Collision Node", url: "#step2"},
        {label: "Collision Shapes", url: "#step3"},
        {label: "Save As Branch", url: "#step4"},
        {label: "Save to Folder", url: "#step5"},
        {label: "Open scenes", url: "#step6"},
        {label: "Idle Animation", url: "#step7"},
        {label: "The Sprite2D Node", url: "#step8"},
        {label: "Orginization", url: "#step9"},
        {label: "Adding A Capsule shape", url: "#step10"},
        {label: "Movement", url: "#step11"},
        {label: "Template Scripts", url: "#step12"},
        {label: "Play!", url: "#step13"},

    ]}/>
    <br>
    <h1>Creating The Player</h1>

    <ul>
       <br> 
       <li id="step1"><p><span class="step">Step 1</span> Now create a new node, search for a node called "CharacterBody2D"</p></li> 
       <img src={step1} alt="">

       <br> 
       <li id="step2"><p><span class="step">Step 2</span>  Now create another new node that is a child of the CharacterBody2D, search for a node called "CollisionShape2D"</p></li> 
       <img src={step2} alt="">

       <br> 
       <li id="step3"><p><span class="step">Step 3</span>  Now we add a collision shape to the CollisionShape2D</p></li> 
       <img src={step3} alt="">

       <br> 
       <li id="step4"><p><span class="step">Step 4</span>Go ahead and save the Player (CharacterBody2D) to a new scene</p></li> 
       <img src={step4} alt="">

       <br> 
       <li id="step5"><p><span class="step">Step 5</span>Save it to a new folder called Characters</p></li> 
       <img src={step5} alt="">

       <br> 
       <li id="step6"><p><span class="step">Step 6</span>Open the new scene that you just saved, and you will see that you are isolated into the Player scene. </p></li> 
       <img src={step6} alt="">

       <br> 
       <li id="step7"><p><span class="step">Step 7</span>Look in your project files for the "Idle" animation shown in the image<br>
       </p></li> 
       <img class="w-1/3" src={step7} alt="">

       <br> 
       <li id="step8"><p><span class="step">Step 8</span>Add a "Sprite2D" node and drag and drop the "Idle" animation into the texture slot</p></li> 
       <img class="w-1/3" src={step8} alt="">

       <br> 
       <li id="step9"><p><span class="step">Step 9</span> Make sure to always orginize your project nodes</p></li> 
       <img src={step9} alt="">

       <br> 
       <li id="step10"><p><span class="step">Step 10</span> Now lets add a shape to the "CollisionShape2D", we are going to add the capsule shape</p></li> 
       <img src={step10} alt="">

       <br> 
       <li id="step11"><p><span class="step">Step 11</span> Now to make the character move, we are going to add a script to the player</p></li> 
       <img class="w-1/3" src={step11} alt="">

       <br> 
       <li id="step12"><p><span class="step">Step 12</span> Select the "CharacterBody2D" template, to add a template movement script</p></li> 
       <img class="w-1/3" src={step12} alt="">

       <br> 
       <li id="step13"><p><span class="step">Step 13</span> Go ahead and open the main scene back up and press the play arrow in the top right and "Select Current"</p></li> 
       <img class="w-1/3" src={step13} alt="">
    </ul>
    <br>

</main>
