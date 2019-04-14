<template>
    <div id="blog">
        <canvas id="canvas"></canvas>
        <el-card shadow="always" id="blog_card">
            <el-table
            v-if="detail==0"
            id="blog_table"
            :data="tableData"
            empty-text="博客空空如也哦~"
            stripe
            style="width: 100%">
            <el-table-column
            align="center"
            prop="title"
            label="标题"
            min-width="50%">
             <template slot-scope="scope">
                <el-badge v-if="scope.$index==-1" value="new" class="announcement-item">
                        <!-- <div slot="reference" class="name-wrapper"> -->
                        <div  @click="announcement_detail(scope.$index)" class="clicktitle">{{ scope.row.title }}</div>
                        <!-- </div> -->
                </el-badge>    
                 <div v-else  @click="announcement_detail(scope.$index)" class="clicktitle">{{ scope.row.title }}</div>
                </template>
            </el-table-column>
            <el-table-column
            prop="time"
            align="center"
            label="时间"
            min-width="30%">
             </el-table-column>
            <!-- <el-table-column
            prop="class"
            align="center"
            label="类别"
            min-width="20%"> -->
            </el-table-column>
            
        </el-table>


        <table  id="detail_table" v-else>
            <tr class='table_th1'>
                <th ><i class="el-icon-info"></i>标题</th>
                <td>{{detailData.title}}</td>
            </tr>
            <tr class='table_th2'>
                <th ><i class="el-icon-time"></i>发布时间</th>
                <td>{{detailData.time}}</td>
            </tr>
            <tr class='table_th2'>
                <th ><i class="el-icon-document"></i>正文</th>
                <td>{{detailData.text}}</td>
            </tr>        
        </table>    

        
        <!-- <div>{{TEXT}}</div> -->
        </el-card>
        
        <div id="back_div" v-if="detail!=0">
        <el-button  id="back_btn" @click="announcement_init()">返回</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name:"blog",
    data(){
        return {
            TEXT:'1',
            detail:0,
            tableData:[],
            detailData:{},
        }
    },
    methods:
    {
        addtable(i)
        {
            fetch('../../static/docs/'+i+'.json',{
            method:'GET',
            headers:{
                contentType: "application/x-www-form-urlencoded; charset=utf-8"
            }
            }).then(response=>{
                console.log(response);
                return response.json();
            }).then(res=>{
                console.log(res);
                // this.TEXT=res.text;
                this.tableData.push(res);
            })
        },
        announcement_init()
        {
            // this.index=0;
            this.detail=0;
        },
        announcement_detail(idx)
        {
            this.detail=1;  
            this.detailData=this.tableData[idx];
        }
    },
    created:function()
    {
        for(var i=1;i<=2;i++)
        {
            this.addtable(i);
        }
        
     
    },
    mounted:function()
    {
        window.onload=function(){
        (function() {
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
            window.requestAnimationFrame = requestAnimationFrame;
        })();


        var flakes = [],
            canvas = document.getElementById("canvas"),
            ctx = canvas.getContext("2d"),
            flakeCount = 400,
            mX = -100,
            mY = -100

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

        function snow() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < flakeCount; i++) {
                var flake = flakes[i],
                    x = mX,
                    y = mY,
                    minDist = 150,
                    x2 = flake.x,
                    y2 = flake.y;

                var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
                    dx = x2 - x,
                    dy = y2 - y;

                if (dist < minDist) {
                    var force = minDist / (dist * dist),
                        xcomp = (x - x2) / dist,
                        ycomp = (y - y2) / dist,
                        deltaV = force / 2;

                    flake.velX -= deltaV * xcomp;
                    flake.velY -= deltaV * ycomp;

                } else {
                    flake.velX *= .98;
                    if (flake.velY <= flake.speed) {
                        flake.velY = flake.speed
                    }
                    flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
                }

                ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
                flake.y += flake.velY;
                flake.x += flake.velX;
                    
                if (flake.y >= canvas.height || flake.y <= 0) {
                    reset(flake);
                }


                if (flake.x >= canvas.width || flake.x <= 0) {
                    reset(flake);
                }

                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
                ctx.fill();
            }
            requestAnimationFrame(snow);
        };

        function reset(flake) {
            flake.x = Math.floor(Math.random() * canvas.width);
            flake.y = 0;
            flake.size = (Math.random() * 3) + 2;
            flake.speed = (Math.random() * 1) + 0.5;
            flake.velY = flake.speed;
            flake.velX = 0;
            flake.opacity = (Math.random() * 0.5) + 0.3;
        }

        function init() {
            for (var i = 0; i < flakeCount; i++) {
                var x = Math.floor(Math.random() * canvas.width),
                    y = Math.floor(Math.random() * canvas.height),
                    size = (Math.random() * 3) + 2,
                    speed = (Math.random() * 1) + 0.5,
                    opacity = (Math.random() * 0.5) + 0.3;

                flakes.push({
                    speed: speed,
                    velY: speed,
                    velX: 0,
                    x: x,
                    y: y,
                    size: size,
                    stepSize: (Math.random()) / 30,
                    step: 0,
                    opacity: opacity
                });
            }

            snow();
        };

        canvas.addEventListener("mousemove", function(e) {
            mX = e.clientX,
            mY = e.clientY
        });

        window.addEventListener("resize",function(){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        })

        init();
        }
    }
}
</script>

<style>
#blog 
{
    position: relative;
    width: 100%;
    height: 100%;
}
#blog_card
{
    position: relative;
    top:100px;
    left:10%;
    width: 80%;
    height: 80%;
    background: rgb(255,255,255,0.5);
    z-index: 1;
}
#blog_table
{
    position: relative;
    width: 100%;
    height: 100%;
    background: rgb(255,255,255,0.8);
}
#blog canvas{
    position:absolute;top:0;left:0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(bottom, rgb(105,173,212) 0%, rgb(23,82,145) 84%);
    background-image: -o-linear-gradient(bottom, rgb(105,173,212) 0%, rgb(23,82,145) 84%);
    background-image: -moz-linear-gradient(bottom, rgb(105,173,212) 0%, rgb(23,82,145) 84%);
    background-image: -webkit-linear-gradient(bottom, rgb(105,173,212) 0%, rgb(23,82,145) 84%);
    background-image: -ms-linear-gradient(bottom, rgb(105,173,212) 0%, rgb(23,82,145) 84%);
    
    background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0, rgb(105,173,212)),
        color-stop(0.84, rgb(23,82,145))
    );
}
.clicktitle
{
    cursor: pointer;
}

#detail_table
{
    padding: 12px 0;
    min-width: 0;
    width:100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
    color: #909399;
    z-index: 2020;
    border-collapse: collapse;
}
 #detail_table tr
{
    /* border:1px solid red; */
    width:100%;
    padding:12px;
    border-bottom: 1px solid #f5f7fa;
}
#detail_table tr th
{
    padding:12px;
    width:32%;
}
#detail_table tr th i
{
    padding-right:12px;
}
#detail_table tr td
{
    position: relative;
    padding:12px;
    width:68%;
    color:black;
    /* left:200px; */
}
.table_th2
{
    background-color: #f5f7fa;
}
.table_th1
{
    background-color:white;
}
#back_div
{
    position: relative;
    width:70%;
    left:15%;
    /* padding: 15px; */
}
#back_btn
{
    position: relative;
    top:20px;
    z-index: 2000;
}
</style>

