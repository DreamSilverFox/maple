<template>
  <div id="app">
    <div class="header">
        <el-col style="height: 100%;" :span="6" :offset="18">
          <el-image style="height: 100%;" src="./Image/common-header-logo.png" fit="scale-down"></el-image>
        </el-col> 
    </div>
    <div class="aside">
      <NavMenu></NavMenu>
    </div>
    <div class="main">
      <router-view/>
      <Dialog></Dialog>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu"
import Dialog from './components/Dialog'

export default {
  name: 'app',
  components: {
    NavMenu,
    Dialog
  },
  created () {
    this.$store.dispatch('dataInit')
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
  height: 100%;
}

.header {
  position: fixed;
  background-color: transparent;
  pointer-events: auto;
  width: 100%;
  height: 20vh;
  top: 0;
  z-index: 1000;
}

.aside {
  position: fixed;
  background-color: transparent;
  pointer-events: auto;
  width: 20%;
  height: 80vh;
  bottom: 0;
  z-index: 1000;
}

.main {
  margin-top: 10%;
  margin-left: 20%;
  min-height: 80vh;
}

.footer {
  background-color: #000000;
  min-height: 10vh;
}

.el-image {
  text-align: right;
}
</style>
