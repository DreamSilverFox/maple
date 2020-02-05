<template>
    <div class="character">
        <el-row>
            <el-col :span="12">
                <el-image
                    style="width: 256px; height: 233px"
                    :src="image"
                    :fit="fit"></el-image>
            </el-col>
            <el-col :span="12">
                <el-row>{{ actorname }}</el-row>
                <el-row>{{ name }}</el-row>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    
</style>

<script>
export default {
    data () {
        return {
            fit: 'fill',
            page: 1,
            character: [],
            name: '',
            actorname: '',
            image: ''
        }
    },
    created() {
        this.axios.get('/Data/_Character_.json').then(response => {
            //这里打印出结果是undifine
            
            this.character = response.data.Character
            this.actorname = this.character[0].ActorName
            this.name = this.character[0].Name
            this.image = '/Character/' + this.character[0].Picture
        });
    },
}
</script>