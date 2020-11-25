<template>
  <div id="app" class="grid-container"> 
    <div id="nav" class="navigation-item">
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/about">About</router-link>
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

.nav-item {
  display: block;
  padding: 10px;
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
  padding: 10px;
}

</style>