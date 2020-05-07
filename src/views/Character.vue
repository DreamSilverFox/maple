<template>
    <div class="character">
        <div v-for="(ch, index) in this.$store.state.character" v-bind:key="index">
            <div v-show="current == index">
                <el-row>
                    <el-col :span="7">
                        <el-image
                            :src="'./Image/Character/' + ch['nickname'] + '.png'"
                            fit="scale-down" ></el-image>
                    </el-col>
                    <el-col :span="14" :offset="3">
                        <el-row class="name">{{ ch.name }}</el-row>
                        <el-row class="cv">{{ ch.cv }}</el-row>
                        
                        <el-row class="character-choose">
                            <el-col style="min-height: 1px;" :span="2" :offset="9">
                                <i class="el-icon-arrow-left icon-character" @click="click_character(-1)" v-show="index != 0"></i>
                            </el-col>
                            <el-col :span="2" :offset="2">
                                <i class="el-icon-arrow-right icon-character" @click="click_character(1)" v-show="index != ($store.state.character.length-1)"></i>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="intro" :span="20" :offset="2">
                        {{ ch.intro }}
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'character',
    data() {
        return {
            current: 0,
        }
    },
    methods: {
        click_character(num) {
            this.current = this.current + num
        }
    },
}
</script>

<style>
.name {
        text-align: left;
        font-size: 48px;
        line-height: 52px;
}
.cv {
    margin-top: 20px;
    text-align: left;
    font-size: 32px;
    line-height: 40px;
}
.intro {
    text-align: left;
    font-size: 24px;
    line-height: 28px;
    margin-top: 15px;
}

.icon-character {
    font-size: 72px;
}
</style>