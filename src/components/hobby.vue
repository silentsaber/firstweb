<template>
    <div id="hobby">      
        <canvas id="c"></canvas>
         <el-card shadow="always" id="hobby_card">
            <el-table
            id="hobby_table"
            :data="tableData"
            stripe
            style="width: 100%;font-size:2.2vh;min-height:60vh;background:rgb(255,255,255,0.5);">
            <el-table-column min-width="1%"></el-table-column>
            <el-table-column
            prop="filename"
            label="文件名"
            align="left"
            id="tl1"
            min-width="55%">
            </el-table-column>
            <el-table-column
            align="center"
            prop="download"
            min-width="40%"
            id="tl2"
            label="下载">
                <template slot-scope="scope">
                <a :href="scope.row.download" :download="scope.row.filename">
                    <el-button size="small" >Download</el-button>
                </a>
                </template>
            </el-table-column>
            </el-table>
         </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[],
        }
    },
    methods:{

    },
    created:function()
    {
            window.onload = function(argument) {
            var canvas = document.getElementById('c');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            if (canvas.getContext) {
                var c = canvas.getContext('2d'),
                    w = canvas.width,
                    h = canvas.height,
                    petal_number = 1000,
                    petals = [];

                c.fillStyle = "pink";
                c.strokeStyle = 'red';
                c.lineWidth = 10;

                // c.fillRect(100, 100, 300, 200);

                var Petal = function() {
                    this.x = Math.random() * 2 * w;
                    this.y = Math.random() * h;

                    this.petal_width = Math.random() * 4 + 3;

                    this.vector_x = Math.random() * 2 - 4;
                    this.speed = Math.random() * 4;
                }

                Petal.prototype.move = function() {
                    this.x += this.vector_x;
                    this.y += this.speed;

                    if (this.y > h || this.x < 0) {
                        this.x = Math.random() * 2 * w;
                        this.y = -20 * Math.random();
                    }
                }

                Petal.prototype.draw = function() {
                    c.fillRect(this.x, this.y, this.petal_width, this.petal_width);
                }

                function start() {
                    for (var i = 0; i < petal_number; i++) {
                        petals[i].draw();
                        petals[i].move();
                    }
                }

                for (var i = 0; i < petal_number; i++) {
                    petals.push(new Petal());
                }


                setInterval(function() {
                    c.clearRect(0, 0, w, h);
                    start();
                }, 24);

            }
        }


       
    }
}
</script>
<style>
#hobby
{
    position: relative;
    width: 100%;
    height: 100%;
}
#hobby_card
{
    position: relative;
    top:100px;
    width: 80%;
    left:10%;
    min-height: 80%;
    background: rgb(255, 192, 203,0.5);
}
#hobby_table th,#hobby_table tr,#hobby_table body{
    background-color: rgb(255, 255,255,0.5)!important;
}
#hobby .el-table--striped .el-table__body tr.el-table__row--striped td
{
    background-color: rgb(255, 255,255,0.5)!important;
}
#c 
{
    position: absolute;
    top:0;
    left: 0;
    width:100%;
    height: 100%;
    z-index: 0;
}
</style>

