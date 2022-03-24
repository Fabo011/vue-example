<template>
<article>
<TheHeader msg="Welcome to hokify-App" />

</article>
  <nav class="mb-2 sm:mb-0">
    <router-link to="/" 
    class="text-black font-sans font-bold text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Home</router-link> |
    <router-link to="/about" 
    class="text-black font-sans text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Dein Vorname</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TheHeader from '@/components/TheHeader.vue';
 


@Options({
  props: {
    msg: String
  },
  components: {
    TheHeader,
  },
})
export default class TheApp extends Vue {
  msg!: string
}
</script>


<style>
*{margin: 0; padding: 0;}
</style>
