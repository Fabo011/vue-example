<template>
  <div class="about">
       <TheDataList />
  </div>


</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TheDataList from '../components/TheDataList.vue';
 
@Options({
  props: {
    msg: String
  },
  components: {
    TheDataList,
  },
})

export default class TheAbout extends Vue {
  msg!: string
}
</script>
