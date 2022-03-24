<template>
<div>
    <span class="font-sans font-bold text-lg ml-40" v-text="data"></span>
</div>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


@Options({
  props:['data'],

  
})
export default class TheData extends Vue {
  msg!: string
}
</script>