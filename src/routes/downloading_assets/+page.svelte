<script>
    import ContextSidebar from "../../components/ContextSidebar.svelte";

    import downloadWebsite from "../../assets/Step9-AssetsDownload.png"
    import assetfolder from "../../assets/Step10-AssetFolder.png"

</script>

<main>
    <ContextSidebar contextItems={[
        {label: "Downloading Assets", url: "download"}

    ]}/>
    <h1>Downloading Free Assets</h1>
    <br>
    <br>

    <ul class="step-list text-xl mt-2">
        <li>
            <p><span class="step">Step 1</span>Open the link and download the required assets for this tutorial</p>
            <p>Website: <a class="link" target="_blank" href="https://anokolisa.itch.io/sidescroller-pixelart-sprites-asset-pack-forest-16x16">assets here</a></p>
            <img class="broken-img w-1/3" src={downloadWebsite} alt="">
        </li>
        <li>
            <p><span class="step">Step 2</span>Now that you've downloaded, open your downloads folder</p>
            <img class="broken-img w-1/3" src={assetfolder} alt="">
        </li>

        <li>
            <p><span class="step">Step 3</span></p>
            <img class="broken-img w-1/3" src={assetfolder} alt="">
        </li>
    </ul>



</main>
