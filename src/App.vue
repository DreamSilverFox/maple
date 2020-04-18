<template>
  <div id="app">
    <div class="header">
        <el-col style="height: 100%;" :span="6" :offset="18">
          <el-image style="height: 100%;" src="/Image/common-header-logo.png" fit="scale-down"></el-image>
        </el-col> 
    </div>

    <div class="main">
      <router-view/>
    </div>
    <div class="footer">footer</div>
    <div class="aside">
      <NavMenu></NavMenu>
    </div>
  </div>

</template>  

<script>
import NavMenu from "./components/NavMenu"

export default {
  name: 'app',
  components: {
    NavMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}

.header {
  position: fixed;
  background-color: transparent;
  pointer-events: auto;
  width: 100%;
  height: 20%;
  top: 0;
  z-index: 1000;
}



.main {
  margin-top: 10%;
  margin-left: 20%;
  min-height: 120%;
}

.footer {
  background-color: #000000;
}

.aside {
  position: fixed;
  background-color: transparent;
  pointer-events: auto;
  width: 20%;
  height: 80%;
  bottom: 0;
  z-index: 1000;
}

</style>
