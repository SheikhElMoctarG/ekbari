<template>
  <div class="font-cairo container mx-auto px-2 py-3 max-w-md" style="direction: rtl;">
    <nav-bar/>
    <content/>
  </div>
</template>

<script>
import content from './components/content.vue';
import navBar from './components/navBar.vue';
export default {
  components: { content },
name: "App",
components: [navBar]
}
</script>

<style>

</style>

NavBar