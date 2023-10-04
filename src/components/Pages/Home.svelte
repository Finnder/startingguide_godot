<script>
    import "./page_style.css"
    import image from "../../assets/gd-bg.jpg"
    import ContextSidebar from "../ContextSidebar.svelte";
</script>

<main>
    <ContextSidebar/>
    <h1 class="font-title" id="intro-section"><strong>Intro</strong></h1>
    <h2>Welcome to the <span class="text-blue-500">Godot Starting Guide</span>!</h2>
    <p>A short and simple guide to creating your first project in Godot!</p>
    <br>

    <h2 class="font-title text-3xl" id="install-section"><strong>Installation</strong></h2>
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

</main>
