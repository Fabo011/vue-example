<template>
  <div class="header-head">
       <img src="../assets/hoki.png" class="bg-black w-40 rounded-2xl my-0.5 ml-0.5"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class TheHeader extends Vue {
  msg!: string
}
</script>

<style scoped>
.header-head{
  background-color: rgb(15 177 175);
}
</style>
