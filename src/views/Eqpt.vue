<template>
    <div>
        <el-row class="list-row" v-for="(item, index) in eqpt" v-bind:key="index">
            <el-col :span="4" :offset="1" v-for="(it, index) in item" v-bind:key="index">
                <el-card class="list-card" shadow="hover" @click.native="click_eqpt(it)">
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
        click_eqpt(item) {
            this.$store.dispatch('dlgEqpt', item.name)
        }
        
    },
    computed: mapState({
        eqpt (state) {
            if(typeof(state.eqpt) != 'function') {
                let newArray = []
                    for (let i = 0; i < Math.ceil(state.eqpt.length / 4); i++) {
                    newArray[i] = state.eqpt.slice(i * 4, (i + 1) * 4)
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