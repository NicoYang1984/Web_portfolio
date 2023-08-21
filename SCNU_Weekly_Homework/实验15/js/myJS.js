window.onload=function()
{
    var video = document.getElementById("myVideo");
    var play = document.getElementById("play");
    var progress = document.getElementById("progress");
    var full = document.getElementById("full");
    var bar = document.getElementById("bar");
    var control = document.getElementById("control");
    var sound = document.getElementById("sound");
    var volbar = document.getElementById("volume-bar");
    var volcontrol = document.getElementById("volume-control");

    play.onclick=function()
    {
        if(video.paused)
        {
            video.play();//自己给漏了括号
            play.className = "pause";//注意字符串写法
        }
        else
        {
            video.pause();
            play.className = "play";
        }
    }
    sound.onclick =function()
    {
        if(video.muted)
        {
            video.muted=false;
            sound.className="soundon";
        }
        else
        {
            video.muted=true;
            sound.className="soundoff";
        }
    }
    full.onclick=function()
    {
        video.webkitRequestFullScreen();

    }

    video.ontimeupdate=function()
    {
        var curTime = video.currentTime;
        var countTime = video.duration;
        var rate = curTime/countTime;
        bar.style.width = progress.offsetWidth*rate + "px";
        control.style.left = progress.offsetWidth*rate + "px";
    }

    control.onmousedown = function(e)
    {
        video.pause();
        var curTime;
        document.onmousemove = function(e)
        {
            // console.log(e.clientX);
            var lef=e.clientX-box.offsetLeft-progress.offsetLeft;
            if(lef<=0)//防止拖得过左
                lef = 0;
            else
                if(lef>=progress.offsetWidth)  //防止拖得过右
                    lef=progress.offsetWidth;
            bar.style.width=lef+"px";
            control.style.left=lef+"px";
            var scale = lef/progress.offsetWidth;
            curTime = scale*video.duration;
            
        }
        document.onmouseup = function(e)
            {
                video.currentTime=curTime;
                video.play();
                document.onmousemove=null;
                document.onmousedown = null;
            }
    }

    volcontrol.onmousedown = function(e)
    {
        video.pause();
        var curVol;
        document.onmousemove = function(e)
        {
            var vollef=e.clientX-box.offsetLeft-progress.offsetLeft-soundon.offsetLeft-soundon.offsetWidth;
            if(vollef<=0)//防止拖得过左
            vollef = 0;
            else
                if(vollef>=volume.offsetWidth)  //防止拖得过右
                vollef=volume.offsetWidth;
            volbar.style.width=lef+"px";
            volcontrol.style.left=lef+"px";
            var scale = lef/volume.offsetWidth;
            curVol = scale*video.volume;
            
        }
        document.onmouseup = function(e)
            {
                video.volume=curVol;
                video.play();
                document.onmousemove=null;
                document.onmousedown = null;
            }
    }
    
}