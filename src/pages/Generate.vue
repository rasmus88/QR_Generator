<template>
  <div>  
   <h1>Generate QR Tag</h1>
   
   <b-form @submit.prevent="onSubmit">
     <b-form-group label="Url:" label-for="input-url">
       <b-form-input id="input-url" v-model="form.url" name="input-url" type="url" required></b-form-input>
     </b-form-group> 
     <b-button type="submit" variant="primary">Generate</b-button>
   </b-form>
   <br />
   
   <div v-if="loading">
     <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
   </div>

   <div v-if="submitted && !loading">
     <QrTagImg :url="form.url"></QrTagImg> 
   </div>
  </div> 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import QrTagImg from '@/components/QrTagImg.vue';
  
  @Component({
    components: { QrTagImg }
  })
  export default class GenerateComponent extends Vue { 

    private submitted = false;
    private loading = false;

    form = {
      url: ''
    };
 
    onSubmit() { 
      this.loading = true;

       // save to localstorage
       if (typeof(Storage) !== 'undefined') {
         localStorage.setItem(this.form.url, this.form.url);
       } else {
         console.warn("No web storage support..");
       }

       setTimeout(() => {
          this.loading = false; 
          this.submitted = true;
       }, 500);
    }
  }
</script>