<template>
  <div>
    <Navbar :toggleTheme="toggleTheme"/>
  </div>
</template>
<script>
import Navbar from '../components/NavBar.vue';
export default {
  data() {
    return {
      theme: 'light',
    }
  },
  components: {
    Navbar
  },
  computed: {
    bodyClasses() {
      if (this.theme === 'light') {
        return 'bg-white text-gray-900';
      } else {
        return 'bg-gray-900 text-white';
      }
    },
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
  },
};
</script>
