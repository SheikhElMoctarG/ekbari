<template>
  <div>
    <div v-for="post of posts" :key="post">
        <card :title="post.title" :date="post.date" :link="post.link" :source="post.source" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import card from './card.vue'
export default {
  components: { card },
    name: "Content",
    data(){
        return{
            posts: []
        }
    },
    async created(){
        this.posts = await axios.get('http://192.168.8.103:3001/').then((res)=> res.data)
    }
}
</script>

<style>

</style>