<template>
    <div class="timeline" id="timeline">
    </div>
</template>

<script>
import Pi from '../plugins/timeline.js'

export default {
    data() {
        return {
            S_Length: 0,
            L_Height: 0,
            Canvas: {
                width: '800px',
                height: '600px',
                border: '1px solid'

            },
            Data: []
        }
    },  
    mounted() {
        // this.initCanvas()
        const tl = new Pi('timeline', 20, 100)

        this.$axios.get('/Data/_TimeLine_.json').then(response => {
            // this.Data = response.data.TimeLine
            tl.data(response.data.TimeLine)
        });
    },
    methods: {
        initCanvas() {
            window.console.log("初始化canvas")
            let canvas = document.getElementById('myCanvas');
            let ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(100,75,50,0,2*Math.PI);
            ctx.stroke();
            
        }
    }
    
}
</script>