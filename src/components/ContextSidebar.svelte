<script>

    export let contextItems = [
        { label: "Intro", url: "#intro-section" },
        { label: "Install", url: "#install-section" }
    ];

</script>

<main class="phone:hidden">
    <div class="fixed right-0 top-0 bg-black/5 w-1/6 h-screen p-2">
        <h1 class="font-title text-3xl">Context Menu</h1>
        <div class="context-list text-left ml-7 p-2">
            <ul>
                {#each contextItems as item, i}
                   <li>
                       <a 
                          href={item.url} 
                          class="text-xl p-2 text-blue-700 hover:text-black hover:cursor-pointer transition">
                          {i + 1}: {item.label}
                       </a>
                   </li>
                {/each}
            </ul>
        </div>
    </div>
</main>

