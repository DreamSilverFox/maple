<template>
  <div id="app">
    <div class="header">
        <el-col style="height: 100%;" :span="6" :offset="18">
          <el-image
            style="height: 100%;"
            :src="$global.logo"
            :fit="fit"></el-image>
        </el-col> 
    </div>
    <div class="aside">
      <NavMenu></NavMenu>
    </div>
    <div class="main">
      <router-view/>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
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

.aside {
  position: fixed;
  background-color: transparent;
  pointer-events: auto;
  width: 20%;
  height: 80%;
  bottom: 0;
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

.el-image {
  text-align: right;
}
</style>

<script>
import NavMenu from "./components/NavMenu"
export default {
  name: 'App',
  data () {
    return {
      c_height: 0,
      c_width: 0,

      fit: 'scale-down'
    }
  },
  components: {
    NavMenu
  },
  mounted () {
    this.clientHeight()
    window.onresize = () => {
      this.clientHeight()
    }
  },
  methods: {
    clientHeight: function () {
      this.c_height = document.documentElement.clientHeight;
      this.c_width = document.documentElement.clientWidth;
    }
  }
}
</script>