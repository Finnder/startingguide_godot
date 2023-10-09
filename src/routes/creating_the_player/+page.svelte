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

</script>

<main>

    <br>
    <h1>Creating The Player</h1>

    <ul>
       <br> 
       <li><p><span class="step">Step 1</span> Now create a new node, search for a node called "CharacterBody2D"</p></li> 
       <img src={step1} alt="">

       <br> 
       <li><p><span class="step">Step 2</span> Now create a new node, search for a node called "CharacterBody2D"</p></li> 
       <img src={step2} alt="">

       <br> 
       <li><p><span class="step">Step 3</span> Now create another new node that is a child of the CharacterBody2D, search for a node called "CollisionShape2D"</p></li> 
       <img src={step3} alt="">

       <br> 
       <li><p><span class="step">Step 4</span> Now we add a collision shape to the CollisionShape2D</p></li> 
       <img src={step4} alt="">

       <br> 
       <li><p><span class="step">Step 5</span>Go ahead and save the Player (CharacterBody2D) to a new scene</p></li> 
       <img src={step5} alt="">

       <br> 
       <li><p><span class="step">Step 6</span>Save it to a new folder called Characters</p></li> 
       <img src={step6} alt="">

       <br> 
       <li><p><span class="step">Step 7</span>Open the new scene that you just saved, and you will see that you are isolated into the Player scene. <br>
       </p></li> 
       <img class="w-1/3" src={step7} alt="">

       <br> 
       <li><p><span class="step">Step 8</span>Add a "Sprite2D" node and drag and drop the "Idle" animation </p></li> 
       <img class="w-1/3" src={step8} alt="">

       <br> 
       <li><p><span class="step">Step 9</span> Make sure to always orginize your project nodes</p></li> 
       <img src={step9} alt="">

       <br> 
       <li><p><span class="step">Step 10</span> Now lets add a shape to the "CollisionShape2D", we are going to add the capsule shape</p></li> 
       <img src={step10} alt="">

       <br> 
       <li><p><span class="step">Step 11</span> Now to make the character move, we are going to add a script to the player</p></li> 
       <img class="w-1/3" src={step11} alt="">

       <br> 
       <li><p><span class="step">Step 12</span> Select the "CharacterBody2D" template, to add a template movement script</p></li> 
       <img class="w-1/3" src={step12} alt="">

       <br> 
       <li><p><span class="step">Step 13</span> Go ahead and open the main scene back up and press the play arrow in the top right and "Select Current"</p></li> 
       <img class="w-1/3" src={step13} alt="">
    </ul>
    <br>

</main>
