// window.onload=function()
// {
//     var objDiv = document.createElement("div");
//     objDiv.style.height = "100px";
//     objDiv.style.width = 
// }
var objImg;
function startDrag(that)
{
    objImg=that;
}

function enter()
{
    e=window.event;
    e.preventDefault();
}

function getObj(that)
{
    that.appendChild(objImg);
}

function deleteImg(that)
{
    // objImg = 0;
    that.appendChild(objImg);
    that.removeChild(objImg);
}