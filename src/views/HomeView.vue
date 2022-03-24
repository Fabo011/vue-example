<template>
  <div class="home">
       <TheForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TheForm from '../components/TheForm.vue';

@Options({
  components: {
    TheForm
  },
})
export default class HomeView extends Vue {}
</script>
