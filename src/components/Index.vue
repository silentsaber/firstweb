<template>
  <div id="index">
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
      <h1 id="myhomepage">My HomePage
      </h1>
      <h2 id="author">
        silentsaber
      </h2>
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
export default {
  name:"index",
  data (){
    return{
      
    }
  },
  methods:{
   
  },
  computed:{
    show(){
      
    },
    
  },
 
  mounted:function()
  {
  },
}
// //console.log(this.$route.path);

</script>

<style>
#index {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
  #particles{
    height: 100%;
    position:absolute;
    top: 0;
    width: 100%;
    
    /* border-bottom: solid #f1f1f1 2px; */
  }
  #particles-js {
    height: 100%;
    background-image:url("../../static/img/bizhi.jpg");
    background-repeat: no-repeat;  
    /* 不重复  */
    opacity:0.5;
    background-size:cover;   
  }
  #myhomepage
  {
    position: absolute;
    z-index: 1;
    width: 100vw;
    font-family: 'academy';
    font-size: 10vw;
    top:15vh;
    left: 0;
    background: -webkit-linear-gradient(45deg, #F56C6C,#E6A23C,yellow,#67C23A,#409EFF,purple,#ffffff);
      color: transparent;
      /*设置字体颜色透明*/
      -webkit-background-clip: text;
      /*背景裁剪为文本形式*/
      animation: ran 30s linear infinite alternate;
  }
  #author
  {
    position: absolute;
    z-index: 1;
    width: 100vw;
    font-family: 'academy';
    font-size: 5vw;
    top:50vh;
    left: 0;
    animation: neon2 1.5s ease-in-out infinite alternate;
  }


    @keyframes ran {
        from {
            backgroud-position: 0 0;
        }
        to {
            background-position: 2000px 0;
        }
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

   @media screen and (max-width:720px) {
      #particles-js {
        height: 100%;
        background-image:url("../../static/img/logo_m.jpg");
        background-repeat: no-repeat;  
        /* 不重复  */
        opacity:0.5;
        background-size:cover;   
      }
      #myhomepage
      {
          top:35vh;
          font-size: 13vw;
      }
      #author
      {
          top:50vh;
          font-size: 10vw;
      }
  }
</style>