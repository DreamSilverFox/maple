import Vue from 'vue'
import NWOMB_Main from './index.vue'

let MBC = Vue.extend(NWOMB_Main)
const NWOMessageBox = {
  install: function (Vue) {
    Object.defineProperty (Vue.prototype, '$nwoattr', {
      get() {
        // window.console.log("AA" + Vue.$refs.nwombwraper)
        const NWOAttr = options  => {
          let zi_max = [...document.all].reduce((r, e) => Math.max(r, +window.getComputedStyle(e).zIndex || 0), 0)
          options.index = zi_max
          let instance = new MBC({
            propsData: options
          })
          instance.vm = instance.$mount()
          document.body.appendChild(instance.vm.$el)

          // let shade = new MBS() 
          // shade.vm = shade.$mount()
          // shade.vm.$el.style.zIndex = zi_max + 1
          // document.body.appendChild(shade.vm.$el)
          var shade = document.createElement("div")
          shade.style.cssText='position: fixed; left: 0; top: 0; width: 100%; height: 100%; opacity: 0.5; background: #000000;'
          shade.style.zIndex = zi_max + 1
          shade.id = "shade"
          document.body.appendChild(shade)

          return instance.vm
        }
        return NWOAttr
      }
    })
  }
}

export default NWOMessageBox