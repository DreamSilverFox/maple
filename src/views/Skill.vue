<template>
    <div class="attr">
        <el-table @row-click="handleClick"
            :data="skill"
            stripe
            style="width: 100%">
            <el-table-column
                prop="ID"
                label="序号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="Name"
                label="技能名"
                width="180">
            </el-table-column>
        </el-table>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    data () {
        return {
            skill: []
        }
    },
    created() {
        this.$axios.get('/Data/Skill.json').then(response => {       
            this.skill = response.data.Skill
            window.console.log(response.data.Skill)
        });
        
    },
    methods: {
      handleClick(row) {
        this.$nwoattr({
            mode: 'Skill',
            skill: row
        });
      }
    }
}
</script>