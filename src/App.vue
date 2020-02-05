<template>
  <div id="app">
    <el-container>
      <el-header :style="Header">
        <el-image>
          
        </el-image>
      </el-header>
      <el-aside :style="Aside">
        <NavMenu></NavMenu>
      </el-aside>
    </el-container>
    <el-main style="height: 1500px;">
      <router-view/>
    </el-main>
    <el-footer style="height: 1500px;">footer</el-footer>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu"
export default {
  name: 'App',
  data () {
    return {
      Header: {
        height: ''
      },
      Aside: {
        height: ''
      }
    }
  },
  components: {
    NavMenu
  },
  mounted () {
    let clientHeight = document.documentElement.clientHeight; 
    this.Header.height = clientHeight * 0.2 + "px";
    this.Aside.height = clientHeight * 0.8 + "px";
    window.onresize = () => {
      let clientHeight = document.documentElement.clientHeight; 
      this.Header.height = clientHeight * 0.2 + "px";
      this.Aside.height = clientHeight * 0.8 + "px";
    }
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
}

.el-container {
  position: fixed;
  z-index: 9999;
  text-align: center;
  width: 100%;
}

.el-header {
  background-color: transparent;
}

.el-aside {
  background-color: transparent;
}

.el-main {
  
  height: 5000px;
}

.el-footer {
  background-color: #000000;
}
</style>
