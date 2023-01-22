<template>
  <NavBar/>
  <div class="flex h-full">
    <SideNav class="w-[200px]"></SideNav>
    <router-view  class="flex-1 h-full overflow-y-auto pb-24 bg-gray-900"></router-view>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import SideNav from "./components/SideNav.vue";
export default {
  name: "App",
  components: {
    NavBar,
    SideNav,
  
  },
 
  
}

</script>


