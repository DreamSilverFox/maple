<template>
    <div class="attr">
        <el-table lazy :data="attr" style="width: 100%" @row-click="attr_row" :row-class-name="tableRowClassName">
                <el-table-column prop="time" label="时间" min-width="4"></el-table-column>
                <el-table-column prop="time_a" label="时间(动画)" min-width="4"></el-table-column>
                <el-table-column prop="level" label="等级" min-width="2"></el-table-column>
        </el-table>

        <!-- 底部角色选择框 -->
        <div class="small-character">
            <el-image lazy  :src="'./Image/Character/' + btmImg + '.png'" fit="scale-down" ></el-image>
            <div class="attr-choose">
                <el-row style="height: 100%">
                    <el-col style="height: 100%" :span="4">
                        <i class="el-icon-arrow-left icon-attr" @click="click_attr_choose(-1)" v-show="current != 0"></i>
                    </el-col>
                    <el-col style="height: 100%" :span="4" :offset="16">
                        <i class="el-icon-arrow-right icon-attr" @click="click_attr_choose(1)" v-show="current != 1"></i>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'attr',
    data() {
        return {
            current: 0,

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
        }
    },
    methods: {
        // 激活角色
        click_attr_choose(num) {
                this.current = this.current + num
               
        },
        // 激活角色显示属性
        tableRowClassName(row) {
            if(row.row != undefined){
                if (row.row.code === this.character[this.current].nickname) {
                    return 'current-row';
                } else {
                    return 'no-row';
                }
            }
        },
        // 点击属性，打开对话框
        attr_row(event) {
            if(event.code === this.character[this.current].nickname)
                this.$store.dispatch('dlgAttr', event)
        }
    },
    computed: mapState({
        character: state => state.character,
        skill: state => state.skill,
        eqpt: state => state.eqpt,
        attr: function (state) {
            return typeof(state.attr) == undefined?[]:Array.from(state.attr) 
        },
        btmImg: function (state) {
            if (typeof(state.character) == 'function') {
                return 'Maple'
            } else {
                return state.character[this.current].nickname
            }
        }
    })
}
</script>

<style lang="scss">
    .attr {
        width: 100%;
        height: 100%;
        .el-dialog {
            .el-dialog__header {
                padding: 0;
            }
            .el-dialog__body {
                padding: 0;
            }
        }
    }
    .small-character {
        position: fixed;
        right: 0;
        bottom: 0;
        height: 250px;
        width: 250px;
        z-index: 2;
    }
    .attr-choose {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 3;
    }
    .icon-attr {
        position: relative;
        margin-top: 100px;
        height: 100%;
        font-size: 48px;
    }
    .current-row {
        background-color: blue;
    }
    .no-row {
        background-color: burlywood;
    }
</style>