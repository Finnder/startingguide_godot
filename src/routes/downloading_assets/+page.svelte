<script>
    import ContextSidebar from "../../components/ContextSidebar.svelte";

    import downloadWebsite from "../../assets/Step9-AssetsDownload.png"
    import assetfolder from "../../assets/Step10-AssetFolder.png"       
    import folderChange from "../../assets/Step11-AssetProjectFolder.png"
    import moveassets from "../../assets/Step12-MoveAssetsToFolder.png"
    

</script>

<main>
    <ContextSidebar contextItems={[
        {label: "Downloading Assets", url: "#step1"},
        {label: "Downloads", url: "#step2"},
        {label: "Move Downloaded Content", url: "#step3"},

    ]}/>
    <h1><strong>Downloading Free Assets</strong></h1>
    <p>
        In game development there are many free and open to use assets available. <br>
        We are going to use some free to use assets, in our project.
    </p>
    
    <br>
    <div class="info-box">
        <strong>Some things to ask for when downloading free assets...</strong>
        <ul class="text-left">
            <li>1. Do I need to give credit to the creator? (it will usually tell you)</li>
            <li>2. Was the asset created in an ethical manner? (stolen, reuploaded, etc.)</li>
        </ul>
    </div>

    <br>
    <br>

    <ul class="step-list text-xl mt-2">
        <li id="step1">
            <p><span class="step">Step 1</span>Open the link and download the required assets for this tutorial</p>
            <p>Website: <a class="link" target="_blank" href="https://anokolisa.itch.io/sidescroller-pixelart-sprites-asset-pack-forest-16x16">assets here</a></p>
            <img class=" w-1/3" src={downloadWebsite} alt="">
        </li>
        <li id="step2">
            <p><span class="step">Step 2</span>Now that you've downloaded, open your downloads folder</p>
            <img class=" w-1/3" src={assetfolder} alt="">
        </li>

        <li id="step3">
            <p><span class="step">Step 3</span>Move the folder into a new "Assets"(create this) folder in your project files</p>
            <img class=" w-1/3" src={folderChange} alt="">
            <img class=" w-1/3" src={moveassets} alt="">
        </li>

    </ul>



</main>
