<template>
    <div>
        <el-row class="list-row" v-for="(item, index) in skill" v-bind:key="index">
            <el-col :span="4" :offset="1" v-for="(it, index) in item" v-bind:key="index">
                <el-card class="list-card" shadow="hover" @click.native="click_skill(it)">
                    {{ it.name }}
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            dialogSkill: {
                switch: false,
                show: {}
            },
            dialogEqpt: {
                switch: false,
                show: {}
            }
        }
    },
    methods: {
        // 显示装备数据
        click_skill(item) {
            console.log(item)
            this.$store.dispatch('dlgSkill', item.name)
        }
        
    },
    computed: mapState({
        skill (state) {
            if(typeof(state.skill) != 'function') {
                let newArray = []
                for (let i = 0; i < Math.ceil(state.skill.length / 4); i++) {
                    newArray[i] = state.skill.slice(i * 4, (i + 1) * 4)
                }

                return newArray
            } else {
                return []
            }
            
        }
    })
}
</script>

<style lang="scss" scoped>
.list-row {
    margin-bottom: 1vh;
}
.list-card {
    width: 15vmin;
    height: 15vmin;
    font-size: 2vmin;
}
</style>