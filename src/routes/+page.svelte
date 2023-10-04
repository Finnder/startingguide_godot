<script lang="ts">
    import Sidebar from "../components/Sidebar.svelte";
    import Home from "../components/Pages/Home.svelte";
    import "../app.css" 

</script>

<!-- 
TODO:
- sidebar for different components
- code style blocks / code snippets (if we do something w code)
- should be walk through learning experience (step by step) (like a tutorial)
-->

<main>
    <Sidebar/>
    <div class="p-2 h-screen">
        <Home/>
    </div>
</main>

