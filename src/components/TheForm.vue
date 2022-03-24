<template>
<section class="md:flex md:justify-center mb-6 my-10 sm:my-20">
  <form :class="standardForm">

     <!--Fisrtname-->
     <label for="firstname" :class="standardLabel">Vorname</label>
     <input type="text" placeholder="Vorname" v-model="firstname" 
     class="shadow appearance-none border rounded w-full py-2 px-0.5 text-gray-700 leading-tight
      focus:outline-none focus:shadow-outline border-0"/>
     <!---------------->

     <!--Lastname-->
     <label for="lastname" :class="standardLabel">Nachname</label>
     <input type="text" placeholder="Nachname" v-model="lastname"
     class="shadow appearance-none border rounded w-full py-2 px-0.5 text-gray-700 leading-tight
      focus:outline-none focus:shadow-outline border-0" />
     <!------------------>

     <!--Email-->
     <label for="email" :class="standardLabel">E-Mail</label>
     <input type="email" placeholder="Deine E-Mail" v-model="email" 
     class="shadow appearance-none border rounded w-full py-2 px-0.5 text-gray-700 leading-tight
      focus:outline-none focus:shadow-outline border-0"/>
     <!-------------------->

     <!--Button-->
     <button @click.prevent="openHoki"
     class="bg-blue-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full my-5 border-none cursor-pointer font-sans"
     >Absenden</button>
     <!--------------------->

     <!--Show output from v-model-->
     <p :class="standardP"><i class="fa-solid fa-user"></i> {{firstname}} {{lastname}} </p>
     <p :class="standardP"><i class="fa-solid fa-envelope"></i> {{email}} </p>
     <!---------------------------->

     <!--Color-Changer Button-->
     <TheColorChanger />
     <!------------------------->
    
    
  </form>
</section> 
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from '../store';
import TheColorChanger from '../components/TheColorChanger.vue';
import '../css/index.css';

@Options({
  props: {
    msg: String,
  },
   components: {
    TheColorChanger,
  },
})
export default class TheForm extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $swal: any
  msg!: string

  //v-model data
  public firstname= '';
  public lastname= '';
  public email= '';

  //style classes
  public standardForm= 'bg-white shadow-md rounded px-8 pt-6 pb-6';
  public standardLabel= 'font-sans font-bold text-lg';
  public standardP= 'font-sans text-black';

  public beforeMount():void{
        if(localStorage.light === 'light'){
            this.standardForm= 'bg-white shadow-md rounded px-8 pt-6 pb-6';
            this.standardLabel= 'font-sans font-bold text-lg text-black';
            this.standardP= 'font-sans text-black';
        }else if(localStorage.dark === 'dark'){
            this.standardForm= 'bg-black shadow-md rounded px-8 pt-6 pb-6';
            this.standardLabel= 'font-sans font-bold text-lg text-white';
            this.standardP= 'font-sans text-white';
        }
  }

  public openHoki(): void{
     store.dispatch('openHoki', this.firstname);
     this.$swal.fire({
            title: `Hi ${this.firstname} &#128571;`,
            html: '<b class="font-bold">Hello at hokify.</b>',
            icon: 'success',
            confirmButtonText: 'COOL',
            confirmButtonColor: 'rgb(17 107 202)',
    });
  }
  

}


</script>

