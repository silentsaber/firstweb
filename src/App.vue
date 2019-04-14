<template>
  <div id="app">
    <navbar v-if="$route.name.name !== 'error'"></navbar>
    <!-- <logotitle v-if="$route.name.name !== 'error' && $route.name.name !== 'index'"></logotitle> -->
    <router-view/>
    <foot v-if="$route.name.name !== 'error'"></foot>
  </div>
</template>
<script>
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


import navbar from './components/nav'
import foot from './components/foot'

export default {
  name: 'App',
  components:{navbar, foot},
   watch:{
    $route(to,from){
      // console.log(to.path);
      if(to.path=='/blog'||to.path=='/file'||to.path=='/hobby')
      {
        this.$router.go(0);
      }
    }
  },
  mounted:function()
  {
  }
}

</script>

<style >
  @import './common/font/font.css';
html,body
{
  width:100vw;
  height:100vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
/* .footer_empty
{

  height:5%;
  width:100%;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100vw;
  height:100vh;
  /* background-image:url("../static/img/bizhi.jpg");
  background-repeat: no-repeat;  
  opacity:0.5;
  background-size:cover;    */
}

@media screen and (max-width:720px) {
.el-message-box
{
  position: fixed;
  
  width:90vw!important;;
  /* display: block; */
  top:40vh;
  left:5vw;
}
.el-message
{
  /* position: fixed; */
  /* width:90vw!important;; */
  /* display: block; */
  top:20vh;
  /* left:5vw; */
}
}
</style>
