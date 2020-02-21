<template>
    <div :class="anim?'nwo-mb-wraper':'nwo-mb-wraper-dis'" id="nwombwraper" :style="{ zIndex: index+2 }" @animationend="inAnimation = false">
        <div v-if="mode == 'Attr'" >
            <img class="nwo-mb-image"
                :src="base64"
                fit="contain" 
                @click="disappear" />
        </div>
        <div v-if="mode == 'Skill'" >
            <img class="nwo-mb-image"
                :src="base64"
                fit="contain" 
                @click="disappear" />
        </div>
    </div>
    
</template>

<style scoped>
.nwo-mb-wraper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    user-select: none;
    pointer-events: none;
    animation: show 1s;
}
.nwo-mb-wraper-dis {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    user-select: none;
    pointer-events: none;
    animation: dis 1s;
}
.nwo-mb-image {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 80%;
    pointer-events: auto;
}

@keyframes show
{
from {transform: scale(0);}
to {transform: scale(1);}
}
@keyframes dis
{
from {transform: scale(1);}
to {transform: scale(0);}
}
</style>

<script>
import MC from 'mcanvas'
export default {
    props: {
        mode: {
            type: [String],
            default: ''
        },
        index: {
            type: [Number],
            default: 0
        },
        attr: {
            type: [Object],
            default() {
                return {}
            }
        },
        skill: {
            type: [Object],
            default() {
                return {}
            }
        }
    },
    data () {
        return {
            base64: '',
            anim: true
        }
    },
    mounted() {
        if (this.mode == "Attr") {
            this.attr_mc(this.$global.attr, this.attr, '/Data/Attr.json')
        } else if (this.mode == "Skill") {
            this.skill_mc(this.$global.skill, this.skill, '/Data/SkillR.json')
        }
            
    },
    methods: {
        attr_mc: function (bg, mes, rule) {
            let mc = new MC({
                width: 1000,
                height: 1000,
                backgroundColor: 'black',
            })
            mc.background(bg,{
                left:0,
                top:0,
                color:'#000000',
                type:'origin',
            })
            this.$axios.get(rule).then(response => {
                for(let NA in response.data) {
                    mc.text(String(mes[NA]), response.data[NA])   
                }
                let HP_Line = mes['HP']/mes['HPM'] * 530
                let MP_Line = mes['MP']/mes['MPM'] * 530
                mc.rect({
                    x: 815,
                    y: 370,
                    width: HP_Line,
                    height: '36px',
                    strokeWidth : 1,
                    strokeColor: '#73D74B',
                    fillColor: '#73D74B',
                })
                mc.rect({
                    x: 815,
                    y: 500,
                    width: MP_Line,
                    height: '36px',
                    strokeWidth : 1,
                    strokeColor: '#2896FA',
                    fillColor: '#2896FA',
                })
                mc.draw( b64 =>{
                    this.base64 = b64
                });
            })     
        },
        skill_mc: function (bg, mes, rule) {
            window.console.log(bg)
            window.console.log(mes)
            window.console.log(rule)
            let mc = new MC({
                width: 1000,
                height: 1000,
                backgroundColor: 'black',
            })
            mc.background(bg,{
                left:0,
                top:0,
                color:'#000000',
                type:'origin',
            })
            this.$axios.get(rule).then(response => {
                
                for(let NA in response.data) {
                    mc.text(String(mes[NA]), response.data[NA])   
                }

                mc.draw( b64 =>{
                    this.base64 = b64
                });
            })    
        },
        disappear: function () {
            let _this=this
            let shade = document.getElementById("shade")
            let wraper = document.getElementById("nwombwraper")
            _this.anim = false
            document.body.removeChild(shade)
            setTimeout(() => {
                _this.mode = ''
                // document.body.removeChild(shade)
                document.body.removeChild(wraper)
            },950)
            
        }
    },
}
</script>
