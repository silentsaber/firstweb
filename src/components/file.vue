<template>
    <div id="file_contain">
        <canvas id="birthday"></canvas>
   
        <el-card shadow="always" id="file_card">
            <p>
                在这里为您提供我的一些项目
            </p>
            <el-table
            id="file_table"
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
            <!-- <el-table-column
            id="tl3"
            min-width="25%"
            align="right">
            <template slot="header" slot-scope="scope">
                 <el-tooltip class="item" effect="dark" content="下载所有文件并打包成zip" placement="right-start">
                        <el-button  icon="el-icon-download" size="mini" type="primary" @click="handleBatchDownload()"><span id="downloadall">Download All</span></el-button>
                </el-tooltip>
            </template>
            </el-table-column> -->
            </el-table>
             <el-tooltip class="item" effect="dark" content="下载所有文件并打包成zip" placement="right-start">
                        <el-button  icon="el-icon-download" size="mini" type="primary" @click="handleBatchDownload()" style="margin-top:15px;">Download All</el-button>
            </el-tooltip>
        </el-card>
 
    </div>
</template>

<script>
import axios from 'axios'
import JSZip from 'jszip'
import FileSaver from 'file-saver'

const getFile = url => {
    return new Promise((resolve, reject) => {
        axios({
            method:'get',
            url,
            responseType: 'arraybuffer'
        }).then(data => {
            resolve(data.data)
        }).catch(error => {
            reject(error.toString())
        })
    })
}

export default {
    name: "file",
    data(){
        return {
            tableData:
            [{
                filename:'资料整合.rar',
                download:'../../static/files/资料整合.rar'
            },{
                filename:'demox.rar',
                download:'../../static/files/demox.rar'
            },{
                filename:'新闻客户端.apk',
                download:'../../static/files/新闻客户端.apk'
            },{
                filename:'程序设计大作业.rar',
                download:'../../static/files/程序设计大作业.rar'
            }]
            //程序设计大作业.rar
        }
    },
    methods: {
        // downloadonefile(idx)//下载idx的文件
        // {
        //      var FETCH_URL="/api/file/download/"+idx
        //     fetch(FETCH_URL, {
        //     method: "GET",
        //     headers: {
        //       "content-type": "application/octet-stream",
        //       "Content-Disposition":"attachment",
        //     }
        //     })
        //     .then(response => {
        //         if(response.ok)
        //         {
        //             // return response.json();
        //             this.$message.success('文件下载成功!');
        //         }
        //         else 
        //         {
        //             this.$message.error('文件下载失败!');
        //         }
        //     })

        // },
        handleBatchDownload() {
            //const data = ['/static/docker.svg', '/static/vue.png'] // 需要下载打包的路径, 可以是本地相对路径, 也可以是跨域的全路径
            var data=new Array();
            for (var i=0;i<this.tableData.length;i++)
            {
                //console.log(this.tableData[i]);
                data.push('/static/files/'+this.tableData[i].download);
            }
            const zip = new JSZip()
            const cache = {}
            const promises = []
            data.forEach(item => {
                const promise = getFile(item).then(data => { // 下载文件, 并存成ArrayBuffer对象
                    const arr_name = item.split("/")
                    const file_name = arr_name[arr_name.length - 1] // 获取文件名
                    zip.file(file_name, data, { binary: true }) // 逐个添加文件
                    cache[file_name] = data
                })
                promises.push(promise)
            })

            Promise.all(promises).then(() => {
                zip.generateAsync({type:"blob"}).then(content => { // 生成二进制流
                    FileSaver.saveAs(content, "资料合集.zip") // 利用file-saver保存文件
                })
            })
        },
    },

    created:function(){
             window.onload=function(){
        // helper functions
        const PI2 = Math.PI * 2
        const random = (min, max) => Math.random() * (max - min + 1) + min | 0
        const timestamp = _ => new Date().getTime()

        // container
        class Birthday {
        constructor() {
            this.resize()

            // create a lovely place to store the firework
            this.fireworks = []
            this.counter = 0

        }
        
        resize() {
            this.width = canvas.width = window.innerWidth
            let center = this.width / 2 | 0
            this.spawnA = center - center / 4 | 0
            this.spawnB = center + center / 4 | 0
            
            this.height = canvas.height = window.innerHeight
            this.spawnC = this.height * .1
            this.spawnD = this.height * .5
            
        }
        
        onClick(evt) {
            let x = evt.clientX || evt.touches && evt.touches[0].pageX
            let y = evt.clientY || evt.touches && evt.touches[0].pageY
            
            let count = random(3,5)
            for(let i = 0; i < count; i++) this.fireworks.push(new Firework(
                random(this.spawnA, this.spawnB),
                this.height,
                x,
                y,
                random(0, 260),
                random(30, 110)))
                
            this.counter = -1
            
        }
        
        update(delta) {
            ctx.globalCompositeOperation = 'hard-light'
            ctx.fillStyle = `rgba(20, 22, 25,${ 7 * delta })`
            ctx.fillRect(0, 0, this.width, this.height)

            ctx.globalCompositeOperation = 'lighter'
            for (let firework of this.fireworks) firework.update(delta)

            // if enough time passed... create new new firework
            this.counter += delta * 3 // each second
            if (this.counter >= 1) {
            this.fireworks.push(new Firework(
                random(this.spawnA, this.spawnB),
                this.height,
                random(0, this.width),
                random(this.spawnC, this.spawnD),
                random(0, 360),
                random(30, 110)))
            this.counter = 0
            }

            // remove the dead fireworks
            if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)

        }
        }

        class Firework {
        constructor(x, y, targetX, targetY, shade, offsprings) {
            this.dead = false
            this.offsprings = offsprings

            this.x = x
            this.y = y
            this.targetX = targetX
            this.targetY = targetY

            this.shade = shade
            this.history = []
        }
        update(delta) {
            if (this.dead) return

            let xDiff = this.targetX - this.x
            let yDiff = this.targetY - this.y
            if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
            this.x += xDiff * 2 * delta
            this.y += yDiff * 2 * delta

            this.history.push({
                x: this.x,
                y: this.y
            })

            if (this.history.length > 20) this.history.shift()

            } else {
            if (this.offsprings && !this.madeChilds) {
                
                let babies = this.offsprings / 2
                for (let i = 0; i < babies; i++) {
                let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
                let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

                birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

                }

            }
            this.madeChilds = true
            this.history.shift()
            }
            
            if (this.history.length === 0) this.dead = true
            else if (this.offsprings) { 
                for (let i = 0; this.history.length > i; i++) {
                let point = this.history[i]
                ctx.beginPath()
                ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
                ctx.arc(point.x, point.y, 1, 0, PI2, false)
                ctx.fill()
                } 
            } else {
            ctx.beginPath()
            ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
            ctx.arc(this.x, this.y, 1, 0, PI2, false)
            ctx.fill()
            }

        }
        }

        let canvas = document.getElementById('birthday')
        let ctx = canvas.getContext('2d')

        let then = timestamp()

        let birthday = new Birthday
        window.onresize = () => birthday.resize()
        document.onclick = evt => birthday.onClick(evt)
        document.ontouchstart = evt => birthday.onClick(evt)

        ;(function loop(){
            requestAnimationFrame(loop)

            let now = timestamp()
            let delta = now - then

            then = now
            birthday.update(delta / 1000)
            

        })()

        }
       
    }
}
</script>

<style>
#file_contain
{
    position: relative;
    width:100%;
    min-height:100%;
}
#file_card
{
    margin-top:20px;
    width:80%;
    position: relative;
    top:100px;
    left:10%;
    background: rgb(255,255,255,0.5);
    /* background: rgb(255, 192, 203,0.5); */

}
#file_card p
{
    font-family: 'kuhei';
    font-weight: 600;
    font-size:20px;
    color:rgb(111, 176, 233);
}
#birthday
{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
}
#downloadall
{
    /* background-color: rgb(158, 209, 192); */
    /* font-size:0.8em; */
}

#file_table
{
    position: relative;
    width: 100%;
    height: 100%;
}

#file_table th,#file_table tr,#file_table body{
    background-color: rgb(255, 255,255,0.5)!important;
}
#file_contain .el-table--striped .el-table__body tr.el-table__row--striped td
{
    background-color: rgb(255, 255,255,0.5)!important;
}
 @media screen and (max-width: 720px)
 { 
     #file_contain
    {
        width:100%;
        position: relative;
        top:8vh;
        min-height:90vh;
        font-size:2vh;
    }
     #file_card
    {
        margin-top:20px;
        width:90%;
        position: relative;
        left:5%;
        font-size:2vh;
    }
 }
  /* @media screen and (max-width: 992px)
 { 
     #file_card
    {
        margin-top:20px;
        width:80%;
        position: relative;
        left:10%;
    }
 } */
</style>
