<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style scoped> 
#app {
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  z-index: -1 !important;
  html, body { height: 100%; width: 100%; font-family: Open Sans, serif !important;}
  body { margin: 0; padding: 0; background: #F7F7F7;}
}
</style>