<template>
  <div class="tag-container">
   <p class="tag-title">{{ url }}</p>
    <img @click="displaySource" class="tag-image" v-bind:src="qrTagSource" alt="qrtag" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'QrTag'
})
export default class QrTag extends Vue {  
  // Vue Prop
  @Prop() private url!: string;
  @Prop() private small!: boolean; 
  // Vue Computed properties
  get qrTagSource(): string { 
    return this.small ? 'https://qrtag.net/api/qr_3.png?url=' + this.url 
                      : 'https://qrtag.net/api/qr_8.png?url=' + this.url;
  }

  // Vue Emit, to emit a method from a child component to a parent component
  @Emit('display-source')
  displaySource(): string {
     return this.qrTagSource;
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .tag-container { 
   margin: 5px 0px 0px 0px;
 }
 .tag-title {
   font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-style: italic;
   margin-bottom: 0.5rem !important;
 }
 .tag-image {
   border: 1px solid #ccc;
   padding: 2px 2px 2px 2px;
 }
</style>