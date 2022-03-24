<template>
  <aside class="md:flex md:justify-center">
      <button @click.prevent="changeDark"
      class="text-white bg-black from-teal-400 via-teal-500 to-teal-600 focus:ring-4 
      focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 
      py-2.5 text-center mr-2 mb-2 border-none cursor-pointer"
      >Zum Dark-Modus</button>
       <button @click.prevent="changeColLight"
      class="text-black bg-white from-teal-400 via-teal-500 to-teal-600 focus:ring-4 focus:outline-none 
      focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 
      text-center mr-2 mb-2 border-none cursor-pointer"
      >Zum Hellen-Modus</button>
   </aside>
 

 
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class TheColorChanger extends Vue {
  msg!: string

  
  public changeDark(): void{
     const dark= 'dark';
         localStorage.removeItem('light') 
         localStorage.setItem('dark', dark);
         window.location.reload();
  }

  public changeColLight(): void{
     const light= 'light';
         localStorage.removeItem('dark'); 
         localStorage.setItem('light', light);
         window.location.reload();
  }

}



</script>

<style scoped>
.header-head{
  background-color: rgb(15 177 175);
}
</style>