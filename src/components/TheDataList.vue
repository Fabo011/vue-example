<template>
<div>
   
   <TheData 
   v-for="(data, i) in $store.state.datas"
    :key="i"
    :data="data"
   />
</div>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TheData from '../components/TheData.vue';


@Options({
  props: {
    msg: String
  },
  components:{
    TheData,
  }
  
})
export default class TheDataList extends Vue {
  msg!: string
}


</script>


