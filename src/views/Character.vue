<template>
    <div class="character">
        <div>
            <el-row>
                <el-col :span="6">
                    <el-image
                        :src="character[page].Picture"
                        fit="scale-down"></el-image>
                </el-col>
                <el-col :span="17" :offset="1">
                    <el-row  class="name">
                        <el-col :span="18">
                            {{ character[page].Name }}
                        </el-col>
                    </el-row>
                    <el-row  class="cv">
                        <el-col :span="18">
                            CV: {{ character[page].CV }}
                        </el-col>
                    </el-row>
                    <el-row  class="intro">
                        <el-col :span="18">
                            {{ character[page].intro }}
                        </el-col>
                    </el-row>

                    <el-row class="character-choose" v-model="page">
                        <el-col :span="2" :offset="9">
                            <i class="el-icon-arrow-left icon-character" @click="front_character" :style="visibility_front"></i>
                        </el-col>
                        <el-col :span="2" :offset="2">
                            <i class="el-icon-arrow-right icon-character" @click="next_character" :style="visibility_next"></i>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div class="attr">
            <el-table @row-click="handleClick"
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="Level"
                    label="等级"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="Intro"
                    label="介绍"
                    width="180">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style scoped>
.name {
        text-align: left;
        font-size: 30px;
        line-height: 40px;
}
.cv {
    text-align: left;
    font-size: 25px;
    line-height: 30px;
}
.intro {
    text-align: left;
    font-size: 20px;
    line-height: 25px;
    margin-top: 15px;
}
.character-choose {
    margin-top: 40px;
}
.icon-character {
    font-size: 68px;
}
</style>

<script>
export default {
    data () {
        return {
            character: [{
                "ID" : 0,
                "Name" : "",
                "CV" : "",
                "Picture" : "",
                "intro" : "",
                "code": ""
            }],
            page: 0,
            page_max: 0,
            visibility_front: "visibility:hidden",
            visibility_next: "visibility:visible",
            tableData: []
        }
    },
    created() {
        this.$axios.get('/Data/Character.json').then(response => {       
            this.character = response.data.Character
            this.page_max = this.character.length - 1
            let attr_now = '/Data/' + response.data.Character[0].code + '.json'
            this.$axios.get(attr_now).then(response => {  
                this.tableData = response.data.Maple;
            });
        });
        
    },
    mounted() {

        
    },
    methods: {

      handleClick(row) {
        row['Name'] = this.character[this.page].Name
        this.$nwoattr({
            mode: 'Attr',
            attr: row
        });
      },
      front_character: function () {
          if (this.page > 0)
            this.page = this.page - 1
      },
      next_character: function () {
          if (this.page < this.page_max)
            this.page = this.page + 1
      }
    },
    watch: {
        page(val) {
            // let attr_now = '/Data/' + this.character.data.Character[val].code + '.json'
            // this.$axios.get(attr_now).then(response => {  
            //     this.tableData = response.data.Maple;
            // });
            if(val == 0) {
                this.visibility_front = "visibility:hidden"
                this.visibility_next = "visibility:visible"
            } else if (val == this.page_max) {
                this.visibility_front = "visibility:visible"
                this.visibility_next = "visibility:hidden"
            } else {
                this.visibility_front = "visibility:visible"
                this.visibility_next = "visibility:visible"
            }
        }
    },
}
</script>