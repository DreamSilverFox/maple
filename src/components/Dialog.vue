<template>
    <div>
        <!-- 属性 -->
        <el-dialog :visible.sync="dialogAttr.switch" width="50%" :show-close="false" :destroy-on-close="true">
            <span>
                <el-carousel :height="cheight + 'px'" :autoplay="false" indicator-position="none" arrow="always">
                    <el-carousel-item class="c-attr">
                        <el-row class="c-attr-title">属性</el-row>
                        <el-row class="c-attr-fisrt">
                            <el-col :span="12">
                                <h3 class="small">Name:  {{ dialogAttr.show.code }}</h3>
                                <h3 class="small">Lv:  {{ dialogAttr.show.level }}</h3>
                            </el-col>
                            <el-col :span="12">
                                <h3 class="small">HP  {{ dialogAttr.show.hp }}</h3>
                                <h3 class="small">MP  {{ dialogAttr.show.mp }}</h3>
                            </el-col>
                        </el-row>
                        <el-row class="c-attr-second">
                            <el-col :span="12" :offset="12">
                                <el-row>
                                    <el-col :span="12">
                                        <h3 class="small">[STR] {{ dialogAttr.show.str?dialogAttr.show.str:0 }}</h3>
                                    </el-col>
                                    <el-col :span="12">
                                        <h3 class="small">[VIT]  {{ dialogAttr.show.vit?dialogAttr.show.vit:0 }}</h3>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12">
                                        <h3 class="small">[AGI]  {{ dialogAttr.show.agi?dialogAttr.show.agi:0 }}</h3>
                                    </el-col>
                                    <el-col :span="12">
                                        <h3 class="small">[DEX]  {{ dialogAttr.show.dex?dialogAttr.show.dex:0 }}</h3>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12">
                                        <h3 class="small">[INT]  {{ dialogAttr.show.int?dialogAttr.show.int:0 }}</h3>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </el-carousel-item>
                    <el-carousel-item class="c-skill">
                        <el-row class="c-skill-title">技能</el-row>
                        <el-scrollbar style="height:100%">
                            <el-row  class="c-skill-row" v-for="(item, index) in dialogAttr.show.skill" v-bind:key="index">
                                <el-col class="c-skill-col" :span="8" v-for="(it, index) in item" v-bind:key="index" @click.native="click_skill(it)">{{ it }}</el-col>
                            </el-row>
                        </el-scrollbar>
                    </el-carousel-item>
                    <el-carousel-item class="c-eqpt">
                        <el-row class="attr-eqpt">
                            <el-col class="attr-eqpt-col" :span="4" :offset="2">[头]</el-col>
                            <el-col class="attr-eqpt-col"  @click.native="click_eqpt(dialogAttr.show.head)" :span="14" :offset="2">{{ dialogAttr.show.head?dialogAttr.show.head:'无' }}</el-col>
                        </el-row>
                        <el-row class="attr-eqpt">
                            <el-col class="attr-eqpt-col" :span="4" :offset="2">[身体]</el-col>
                            <el-col class="attr-eqpt-col"  @click.native="click_eqpt(dialogAttr.show.body)" :span="14" :offset="2">{{ dialogAttr.show.body?dialogAttr.show.body:'无' }}</el-col>
                        </el-row>
                        <el-row class="attr-eqpt">
                            <el-col class="attr-eqpt-col" :span="4" :offset="2">[右手]</el-col>
                            <el-col class="attr-eqpt-col"  @click.native="click_eqpt(dialogAttr.show.r_hand)" :span="14" :offset="2">{{ dialogAttr.show.r_hand?dialogAttr.show.r_hand:'无' }}</el-col>
                        </el-row>
                        <el-row class="attr-eqpt">
                            <el-col class="attr-eqpt-col" :span="4" :offset="2">[左手]</el-col>
                            <el-col class="attr-eqpt-col"  @click.native="click_eqpt(dialogAttr.show.l_hand)" :span="14" :offset="2">{{ dialogAttr.show.l_hand?dialogAttr.show.l_hand:'无' }}</el-col>
                        </el-row>
                        <el-row class="attr-eqpt">
                            <el-col class="attr-eqpt-col" :span="4" :offset="2">[腿]</el-col>
                            <el-col class="attr-eqpt-col"  @click.native="click_eqpt(dialogAttr.show.log)" :span="14" :offset="2">{{ dialogAttr.show.log?dialogAttr.show.log:'无' }}</el-col>
                        </el-row>
                        <el-row class="attr-eqpt">
                            <el-col class="attr-eqpt-col" :span="4" :offset="2">[足]</el-col>
                            <el-col class="attr-eqpt-col"  @click.native="click_eqpt(dialogAttr.show.foot)" :span="14" :offset="2">{{ dialogAttr.show.foot?dialogAttr.show.foot:'无' }}</el-col>
                        </el-row>
                        <el-row class="attr-eqpt">
                            <el-col class="attr-eqpt-col" :span="4" :offset="2">[饰品]</el-col>
                            <el-col class="attr-eqpt-col"  @click.native="click_eqpt(dialogAttr.show.jew1)" :span="14" :offset="2">{{ dialogAttr.show.jew1?dialogAttr.show.jew1:'无' }}</el-col>
                        </el-row>
                        <el-row class="attr-eqpt">
                            <el-col class="attr-eqpt-col" :span="4" :offset="2">[饰品]</el-col>
                            <el-col class="attr-eqpt-col"  @click.native="click_eqpt(dialogAttr.show.jew2)" :span="14" :offset="2">{{ dialogAttr.show.jew2?dialogAttr.show.jew2:'无' }}</el-col>
                        </el-row>
                        <el-row class="attr-eqpt">
                            <el-col class="attr-eqpt-col" :span="4" :offset="2">[饰品]</el-col>
                            <el-col class="attr-eqpt-col"  @click.native="click_eqpt(dialogAttr.show.jew3)" :span="14" :offset="2">{{ dialogAttr.show.jew3?dialogAttr.show.jew3:'无' }}</el-col>
                        </el-row>
                    </el-carousel-item>
                </el-carousel>
            </span>
        </el-dialog>

        <!-- 技能 -->
        <el-dialog :visible.sync="dialogSkill.switch" width="50%" :show-close="false" :destroy-on-close="true">
            <span>
                <div class="attr-skill"  :style="{height: cheight + 'px'}">
                    <el-row class="attr-skill-name">
                        <el-col>
                            {{ dialogSkill.show.name }}
                        </el-col>
                    </el-row>
                    <el-row class="attr-skill-buff">
                        <el-col>{{ dialogSkill.show.buff + '\t' + dialogSkill.show.debuff }}</el-col>
                    </el-row>
                    <el-row class="attr-skill-use">
                        <el-col>{{ dialogSkill.show.use + '\t' + dialogSkill.show.time}}</el-col>
                    </el-row>
                    <el-row class="attr-skill-access">
                        <el-col>{{ dialogSkill.show.access}}</el-col>
                    </el-row>
                    <el-row class="attr-skill-children">
                        <el-row  class="c-skill-row" v-for="(item, index) in dialogSkill.show.skill" v-bind:key="index">
                            <el-col class="c-skill-col" :span="8" v-for="(it, index) in item" v-bind:key="index" @click.native="click_skill(it)">{{ it }}</el-col>
                        </el-row>
                    </el-row>
                </div>
                
            </span>
        </el-dialog>

        <!-- 装备 -->
        <el-dialog :visible.sync="dialogEqpt.switch" width="50%" :show-close="false" :destroy-on-close="true">
            <span>
                <div class="attr-eq" :style="{height: cheight + 'px'}">
                    <el-row class="attr-eq-name">{{ dialogEqpt.show.name }}</el-row>
                    <el-row class="attr-eq-attr">{{ dialogEqpt.show.attr }}</el-row>
                    <el-row class="attr-eq-access">{{ dialogEqpt.show.access }}</el-row>
                    <el-row class="attr-eq-skill">
                        <el-row  class="c-skill-row" v-for="(item, index) in dialogEqpt.show.skill" v-bind:key="index">
                            <el-col class="c-skill-col" :span="8" v-for="(it, index) in item" v-bind:key="index" @click.native="click_skill(it)">{{ it }}</el-col>
                        </el-row>
                    </el-row>
                    <el-row class="attr-eq-slot">
                        <el-row  class="c-skill-row" v-for="(item, index) in dialogEqpt.show.slot" v-bind:key="index">
                            <el-col class="c-skill-col" :span="8" v-for="(it, index) in item" v-bind:key="index" @click.native="click_skill(it)">{{ it }}</el-col>
                        </el-row>
                    </el-row>
                </div>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    created() {
        this.registerModule()
        window.addEventListener('resize', this.getClient)
        this.getClient()
    },
    methods: {
        // 获取窗口属性
        getClient(){
            this.$store.commit('widthSet', 0.5 *document.documentElement.clientWidth)
            this.$store.commit('heightSet', 0.5 *document.documentElement.clientHeight)
        },
        registerModule() {
            this.$store.registerModule('DialogModule', {
                state: {
                    cwidth: 0,
                    cheight: 0,

                    // Dialog
                    dialogAttr: {
                        switch: false,
                        show: {}
                    },
                    dialogSkill: {
                        switch: false,
                        show: {}
                    },
                    dialogEqpt: {
                        switch: false,
                        show: {}
                    }
                },
                mutations: {
                    widthSet (state, data) {
                        // 变更状态
                        state.cwidth = data
                    },
                    heightSet (state, data) {
                        // 变更状态
                        state.cheight = data
                    },

                    dlgAttrOn(state, data) {
                        state.dialogAttr.show = data
                        state.dialogAttr.switch = true
                    },
                    dlgEqptOn(state, data) {
                        state.dialogEqpt.show = data
                        state.dialogEqpt.switch = true
                    },
                    dlgSkillOn(state, data) {
                        state.dialogSkill.show = data
                        state.dialogSkill.switch = true
                    }
                },
                actions: {
                    dlgAttr({commit}, data) {
                        let attr = JSON.parse(JSON.stringify(data))
                        if (attr.skill) {
                            let newArray = []
                            for (let i = 0; i < Math.ceil(attr.skill.split(' ').length / 3); i++) {
                                newArray[i] = attr.skill.split(' ').slice(i * 3, (i + 1) * 3)
                            }
                            attr.skill = newArray
                        }

                        commit('dlgAttrOn', attr)
                    },

                    dlgSkill(context, data) {
                        let skill = JSON.parse(JSON.stringify(context.rootState.skill.filter(it => it.name === data)[0]))
                        if (skill.skill) {
                            let newArray = []
                            for (let i = 0; i < Math.ceil(skill.skill.split(' ').length / 3); i++) {
                                newArray[i] = skill.skill.split(' ').slice(i * 3, (i + 1) * 3)
                            }
                            skill.skill = newArray
                        }
                        context.commit('dlgSkillOn', skill)
                    },

                    dlgEqpt(context, data) {
                        let eqpt = JSON.parse(JSON.stringify(context.rootState.eqpt.filter(it => it.name === data)[0]))
                        if (eqpt.skill) {
                            let newArray = []
                            for (let i = 0; i < Math.ceil(eqpt.skill.split(' ').length / 3); i++) {
                                newArray[i] = eqpt.skill.split(' ').slice(i * 3, (i + 1) * 3)
                            }
                            eqpt.skill = newArray
                        }
                        if (eqpt.slot) {
                            let newArray = []
                            for (let i = 0; i < Math.ceil(eqpt.slot.split(' ').length / 3); i++) {
                                newArray[i] = eqpt.slot.split(' ').slice(i * 3, (i + 1) * 3)
                            }
                            eqpt.slot = newArray
                        }
                        let buff = ''
                        for (let item in eqpt) {
                            const other = ['id', 'name', 'skill', 'slot', 'access']
                            if (!other.includes(item)) { 
                                if(typeof eqpt[item] !== 'undefined' && eqpt[item] != null && eqpt[item] != ""){
                                    buff += '[' + item.toUpperCase() + '] +' + eqpt[item] + ', '
                                }      
                            }
                        }
                        eqpt.attr = buff

                        context.commit('dlgEqptOn', eqpt)
                    }
                }
            })
        },

        arraytoDim (arr) {
            let newArray = []
            for (let i = 0; i < Math.ceil(arr.length / 3); i++) {
                newArray[i] = arr.slice(i * 3, (i + 1) * 3)
            }
            return newArray
        },
        // 显示技能数据
        click_skill(item) {
            this.$store.dispatch('dlgSkill', item)
        },

        // 显示装备数据
        click_eqpt(item) {
            if (item) {           
                this.$store.dispatch('dlgEqpt', item)
            }
        }
    },
    computed: mapState({
        cwidth: state => state.DialogModule.cwidth,
        cheight: state => state.DialogModule.cheight,
        dialogAttr: state => state.DialogModule.dialogAttr,
        dialogSkill: state => state.DialogModule.dialogSkill,
        dialogEqpt: state => state.DialogModule.dialogEqpt,
        
        character: state => state.character,
        skill: state => state.skill,
        eqpt: state => state.eqpt,
        attr: function (state) {
            return typeof(state.attr) == undefined?[]:Array.from(state.attr) 
        }
    })
}
</script>

<style lang="scss" scoped>
    // 弹框属性
    .c-attr-title {
        height: 20%;
        padding: 2vh;
        font-size: 5vh;
    }
    .c-attr-first {
        height: 40%;
        padding: 2vh;
        font-size: 5vh;
    }
    .c-attr-second {
        height: 40%;
        padding: 2vh;
        font-size: 2vh;
    }

    .c-skill-title {
        height: 20%;
        padding: 2vh;
        font-size: 5vh;
    }
    .c-skill-row {
        padding: 2vh;
        font-size: 4vh;
    }
    .c-skill-col {
        background-repeat: no-repeat;
        background-size: 60% 2px;
        background-position: 50% 100%;
        transition: all .5s ease-in-out;
        background-image: linear-gradient(#66CCFF, #66CCFF);
    }

    .attr-skill {
        padding: 5vh;
    }
    .attr-skill-name {
        height: 35%;
        padding: 3vh;
        font-size: 5vh;
    }
    .attr-skill-buff {
        height: 15%;
        padding: 1vh;
        font-size: 4vh;
    }
    .attr-skill-use {
        height: 15%;
        padding: 1vh;
        font-size: 4vh;
    }
    .attr-skill-access {
        height: 20%;
        padding: 1vh;
        font-size: 4vh;
    }
    .attr-skill-children {
        height: 15%;
        padding: 1vh;
        font-size: 4vh;
    }

    .attr-eqpt {
        height: 5vh;
        padding: 1vh;
        font-size: 2vh;
        background-color: #FFFFFF;
    }
    .attr-eqpt-col {
        background-color: #66CCFF;
    }

    .attr-eq {
        padding: 5vh;
    }
    .attr-eq-name {
        height: 35%;
        padding: 3vh;
        font-size: 5vh;
    }
    .attr-eq-attr {
       height: 15%;
        padding: 1vh;
        font-size: 3vh;
    }
    .attr-eq-access {
        height: 20%;
        padding: 1vh;
        font-size: 3vh;
    }
    .attr-eq-skill {
        height: 15%;
        padding: 1vh;
        font-size: 3vh;
    }
    .attr-eq-slot {
        height: 15%;
        padding: 1vh;
        font-size: 3vh;
    }
</style>