<script>
    import ContextSidebar from "../components/ContextSidebar.svelte";
    import "../app.css"
    import image from "../assets/gd-bg.jpg"
    import extractImg from "../assets/Step3-ExtractDownload.png"
</script>

<main>
    <ContextSidebar contextItems={[
        {label: "Intro", url: "#intro-section"},
        {label: "Install", url: "#install-section"},
        {label: "Extracting", url: "#extracting"},
    ]}/>

    <h1 class="font-title" id="intro-section"><strong>Intro</strong></h1>
    <h2>Welcome to the <span class="text-blue-500">Godot Starting Guide</span>!</h2>
    <p>A short and simple guide to creating your first project in Godot!</p>
    <br>

    <h2 id="install-section"><strong>Installation</strong></h2>
    <p>To install the game engine, we go to 
        <a class="link"  target="_blank" href="https://godotengine.org">https://godotengine.org</a>
    </p>
    <p>
        or you can download here
    </p>
    <br>

    <a class="btn-download" href="https://github.com/godotengine/godot/releases/download/4.1.1-stable/Godot_v4.1.1-stable_linux.x86_64.zip">Linux</a>
    <a class="btn-download" href="https://github.com/godotengine/godot/releases/download/4.1.1-stable/Godot_v4.1.1-stable_win64.exe.zip">Windows</a>
    <a class="btn-download" href="https://github.com/godotengine/godot/releases/download/4.1.1-stable/Godot_v4.1.1-stable_macos.universal.zip">Mac</a>

    <img class="w-2/4 mx-auto rounded mt-8 shadow-2xl" src={image} alt="">
    
    <br>
    <h2 id="extracting">Extracting</h2>
    <p>Once downloaded, now we extract the executable file to our desired location</p>
    <img src="{extractImg}" alt="">
    <br>

</main>
