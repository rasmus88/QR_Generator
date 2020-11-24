<template>
  <div id="app" class="grid-container"> 
    <div id="nav" class="navigation-item">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="main-item">
      <router-view/>
    </div>
  </div> 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigation-item {
   grid-area: menu;
}

.main-item {
  grid-area: main;
}

.grid-container {
  display: grid;
  grid-template-areas: 
  'menu main main main'
  'menu main main main';
  grid-gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}

</style>