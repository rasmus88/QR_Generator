<template>
 <div> 
     <h3>Your generated tags</h3>
     <div v-if="loading">
       <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
     </div>
     <div class="tags-container" v-if="!loading">
      <div v-for="item in storageUrlArr" :key="item.url"> 
          <QrTag :small="true" :url="item.url"></QrTag> 
      </div>
     </div>
 </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import QrTag from '@/components/QrTag.vue';
  
@Component({
    components: { QrTag }
})
export default class MytagsComponent extends Vue {
  loading: boolean = false;
  storageUrlArr: Array<any> = new Array<any>();

  created() {
   this.loading = true;

  setTimeout(() => {
    // retrieve local storage
     if (typeof(Storage) !== 'undefined') {
     
     this.storageUrlArr = Object.keys(localStorage)
                           .filter(x => x.startsWith('http'))
                           .map(x => { return { url: x }});

     this.loading = false;
      
     } else {
         console.warn("Storage not supported");
     }
  }, 500); 
  }
}
</script>

<style scoped>
.tags-container {
  margin: auto;
  width: fit-content;
}
</style>