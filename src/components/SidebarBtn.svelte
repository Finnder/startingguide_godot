<script>
  import Icon from "@iconify/svelte";


    export var text = "placeholder";
    export var link = "";
    export var icon = "";

</script>

<a href={"/" + link} class="sidebar-btn bg-white rounded border-white hover:bg-gray-700 phone:text-xl hover:text-white transition p-2 m-2 cursor-pointer" >
    
    <span class="flex"><Icon icon={icon} class="align-middle" width="30px"/><h3 class="text-lg ml-4">{text}</h3></span>
    
</a>
