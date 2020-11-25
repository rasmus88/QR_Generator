<template>
  <div>
    <img v-bind:src="'https://qrtag.net/api/qr_8.png?url='+ url" alt="qrtag" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'QrTagImg'
})
export default class QrTagImg extends Vue {
  @Prop() private url!: string;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>