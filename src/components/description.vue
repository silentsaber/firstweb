<template>
    <div id="des">
         <vue-particles 
          color="#FFFFFF"
          :particleOpacity="0.7"
          :particlesNumber="50"
          shapeType="circle"
          :particleSize="3"
          linesColor="#ffffff"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="200"
          :moveSpeed="5"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        >
        </vue-particles>
        <!-- <el-alert type="success"
    :closable="false" style="z-index:20;position:absolute;top:60px;color:#409EFF;background:#DDEEFF;animation: neon2 1.5s ease-in-out infinite alternate;">千里之行，始于足下</el-alert> -->
        <div id="info">
        <div id="main_info">
            <el-card>
                <div slot="header" class="clearfix">
                <span style="float: left;">个人简介</span>
                <span style="float:right;font-size:10px;">千里之行，始于足下</span>
                </div>
                <img src="../../static/img/2017011158.jpg" width="90" height="120" style="float:left;"></img>
                <h5 style="font-size:25px;margin:5px;font-weight:600;">曾睿</h5>
                <h5 style="margin:10px;">现就读于清华大学电子工程系无73班，担任清华大学学生科学技术协会赛事部干事和电子工程系学生科学技术协会软件部部员</h5>
            </el-card>

            <el-card>
                <div slot="header" class="clearfix">
                <span style="float: left;">联系方式</span>
                </div>
                <div style="position:relative;width:80%;
                left:10%;text-align:left;">
                <h5>电话:18811556108</h5>
                <h5>地址:北京市海淀区清华园紫荆学生公寓</h5>
                <h5>QQ:805898882</h5>
                <h5>邮箱:zeng-r17@mails.tsinghua.edu.cn</h5>
                <h5>微信号:zr805898882</h5>
                </div>
            </el-card>
        </div>
        <div id="detail_info">
            <el-card>
                <div slot="header" class="clearfix">
                <span style="float: left;">荣誉&奖项</span>
                </div>
                <ul style="text-align:left;">
                <li>2018年  清华大学第一届人工智能挑战赛B组二等奖</li>
                <li>2018年  学业优秀奖</li>
                <li>2018年  科技创新优秀奖</li>
                </ul>
            </el-card>
            <el-card>
                <div slot="header" class="clearfix">
                <span style="float: left;">科研经历</span>
                </div>
                <ul style="text-align:left;">
                <li>2018年11月至今  高考机器人</li>
                </ul>
            </el-card>
            <el-card>
                <div slot="header" class="clearfix">
                <span style="float: left;">社工经历</span>
                </div>
                <ul style="text-align:left;">
                <li>2018年4月  参与清华大学第七届创意大赛举办工作</li>
                <li>2018年9-10月  参与清华大学第二十届电子设计大赛网站建设</li>
                <li>2018年10月  参与清华大学第八届创意大赛·新生专场举办工作</li>
                <li>2019年2月至今  参与清华大学第二届人工智能挑战赛枪林弹雨分赛场暨第二十届队式设计大赛网站建设</li>
                </ul>
            </el-card>
        </div>
        </div>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style>
#des
{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
#particles{
    height: 100vh;
    position:absolute;
    top: 0;
    width: 100%;
    
    /* border-bottom: solid #f1f1f1 2px; */
  }
  #particles-js {
    height: 100vh;
    position:absolute;
    top: 0;
    width: 100%;
    background-image:url("../../static/img/bizhi.jpg");
    background-repeat: no-repeat;  
    /* 不重复  */
    opacity:0.5;
    background-size:cover;   
  }
#info
{
    position: relative;
    width:100%;
    top:100px;
    height: 80vh;
    z-index: 20;
    display: flex;
}
#info span
{
    font-size:20px;
    font-family: 'kuhei';
    font-weight: 600;
}
#main_info
{
    /* display: inline-block; */
    order:1;
    height: 100%;
    position: relative;
    width: 25%;
    margin-left:5%; 
}
#detail_info
{
    /* display: inline-block; */
    order:2;
    position: relative;
    height: 100%;
    margin-left:5%; 
    width: 55%;
}
#des .el-card
{
    background: rgb(255,255,255,0.5);
    /* padding-bottom:20px;  */
    margin-bottom: 20px;
}
.clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
      
  @keyframes neon2 {
    from {
      
      backgroud-position: 0 0;
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #228DFF,
                0 0 70px  #228DFF,
                0 0 80px  #228DFF,
                0 0 100px #228DFF,
                0 0 150px #228DFF;
    }
    to {
      background-position: 2000px 0;
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #228DFF,
                0 0 35px #228DFF,
                0 0 40px #228DFF,
                0 0 50px #228DFF,
                0 0 75px #228DFF;
    }
  } 
</style>

