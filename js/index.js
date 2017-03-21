window.onload=function(){
    //下雪
    var w=document.documentElement.clientWidth;
    var h=document.documentElement.clientHeight;
//			console.log(w,h)
    var arr=[];

    for (i=0;i<100;i++) {
        var div=document.createElement("div");
        div.style.cssText="width:3px;height:8px;background:#82C9FF;position: absolute;left:"+(50+(w-100)*Math.random())+"px;top:-20px;"
        div.style.transition="transform 2s linear"+" "+2*Math.random()+"s";
        document.body.appendChild(div);
        arr.push(div);
    }
    setTimeout(function(){
        for (i=0;i<arr.length;i++) {
            arr[i].style.transform="translate(0,"+h+"px)";

            arr[i].addEventListener("webkitTransitionEnd",function(){
                this.style.transform="translate(0,0)";
                this.style.transition="none";
                var that=this;
                setTimeout(function(){
                    that.style.transition="transform 2s linear"+" "+2*Math.random()+"s";
                    that.style.transform="translate(0,"+h+"px)";
//
                },0)
            })
        }
    },0)
    //表
    var clock =document.querySelector(".clock");
    function  createMark() {
        for (var i=0;i<60;i++){
            var heights;
            var widths;
            if(i%5==0){
                heights=20;
                widths=8;
            }else {
                heights=10;
                widths=6;
            }
            var div =document.createElement("div");
            div.style.cssText="width:"+widths+"px;height:"+heights+"px;background:#00A8CD;position:absolute;left:197px;top:0";
            div.style.transformOrigin="center 200px";
            div.style.transform="rotate("+i*6+"deg)";
            clock.appendChild(div);
//                    console.log(div)
        }
    }
    createMark();

    var times=new Date();
    var hours=times.getHours();
    var min=times.getMinutes();
    var sec= times.getSeconds();
    var hh=createPointer(6,100,"#CCCD58",hours*30+min*6/12);
    var mm=createPointer(4,140,"#FF9CFF",min*6);
    var cc=createPointer(2,180,"#32FFD8",sec*6);
    var t= setInterval(function () {
        var times=new Date();
        var hours=times.getHours();
        var min=times.getMinutes();
        var sec= times.getSeconds();
        hh.style.transform="rotate("+hours*30+"+"+min*6/12+"deg)";
        mm.style.transform="rotate("+min*6+"deg)";
        cc.style.transform="rotate("+sec*6+"deg)";
        console.log(cc)
    },1000)
    function  createPointer(w,h,c,a) {
        var div= document.createElement("div");
        var lefts=(400-w)/2+"px";
        var tops=400/2-h+"px";
        div.style.cssText="width:"+w+"px;height:"+h+"px;background:"+c+";" +
            "position:absolute;left:"+lefts+";top:"+tops+"";
        div.style.transformOrigin="center "+h+"px";
        div.style.transform="rotate("+a+"deg)";
        clock.appendChild(div);
        return div;
    }
    createPointer();
}
