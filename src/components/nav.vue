<template>
  <div id="nav">
    <i class="el-icon-menu" id="menuicon" @click="Showmenu()" style="font-size: 6vh;"><span style="font-size:4.5vh;left:5vw;position:relative;">Teamstyle20</span></i>
    
    <el-menu v-show="showmenu"class="submenu" :mode="whatmode" v-bind:router="true" :default-active="onRoutes" @select="handleSelect" router>
      <el-menu-item index="#" class="cx" style="background:white;"><img src="../../static/img/logo.jpg" width="50px" height="50px" style="border-radius:50%;"/></el-menu-item>
      <el-menu-item index="/" >首页</el-menu-item>
      <el-menu-item index="/des" >个人简介</el-menu-item>
      <el-menu-item index="/blog" >博客</el-menu-item>
      <el-menu-item index="/hobby" >爱好</el-menu-item>
      <el-menu-item index="/file" >文件</el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
    name: "navbar",
    data() {
      return {
        navflag: true,
      //  navflag: false,
       name : "test",
       showmenu:true,
       whatmode:"horizontal",
      }
    },
     watch:{
  $route(to,from){
    //console.log(to.path);
    // if(to.path=="/")
    // {
    //   // 跳转到首页
    //   window.location="http://teamstyle.eesast.com";
    // }
    //console.log(getCookie('token'));
    if(getCookie('token')!='null'&&getCookie('token')!=null&&getCookie('token')!='')
    {
      this.navflag=false;
      this.name=getCookie('username');
      //console.log(1);
    }
    else this.navflag=true;
  }
  },
  methods: {
        handleSelect(key, keyPath) {
            //console.log(key, keyPath);
            if(key=='#')
            {

            }
        },
        Showmenu()
        {
          this.showmenu=!this.showmenu;
        }
    },

  computed:{
    onRoutes(){
   return this.$route.path;
    }
  },
  mounted(){
            var width=window.screen.width;
            if(width<720)
            {
              this.showmenu=false;
              this.whatmode="vertical";     
            }
  }
}

function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}

function delCookie(name)
{
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval=getCookie(name);
if(cval!=null)
document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/";
}

</script>

<style scoped>
#menuicon
{
  display: none;
}
#nav
{
  /* height:60px; */
  position: fixed;
  top:0;
  left: 0;
  height: 60px;
  width: 100vw;
  z-index: 1000;
}
 #nav .el-menu-item.is-active {
      background-color: rgb(64,158,255,0.2);
      /* opacity: 0.3; */
      color:black;
      border-bottom:0px;
  }
.submenu
{
  z-index:2000;
}
.cx
{
  background:white; 
}
  @media screen and (max-width:720px) {
    .cx
    {
      background: #EBEEF5;
    }
     #nav .el-menu {
        position: fixed;
        /* top: 8vh; */
        height: 100vh;
        width: 30vw!important;
        z-index: 2000;
        background-color: #EBEEF5;
        border: none;
        /* border-right: solid 1px #fefefe; */
    }
    #nav .el-menu-item {
      font-size:2vh;
      top:8vh;
      padding-top:0px; 
      height:8vh;
      width:100%;
    }
     #nav .el-menu-item.is-active {
      background: #FFFFFF;
    }
    #nav img{
    width:40px;
    height: 40px;
    top:-5px;
    position: relative;
  }
    #nav
    {
       display: block;
        width: 100%;
        height: 8vh;
        position: fixed;
        top: 0;
        z-index: 2010;
        background-color: #EBEEF5;
        border-bottom: solid 1px #fefefe;
    }
    #menuicon
    {
      display: block;
      position: absolute;
      height: 8vh;
      top:1vh;
      left:6vw;
      z-index: 2011;
    }
    /* #nav {
        display: block;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        z-index: 2010;
        background-color: rgba(250, 250, 250, 0.9);
    } */
    /* .el-menu-item-group{
        background-color: #f4f4f4;
        width: 200px;
    } */
  }
</style>
