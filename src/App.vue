<template>
<article>
<TheHeader msg="Welcome to hokify-App"/>

</article>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->
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
