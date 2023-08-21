function subfrm()
{
	var ObjFrm=document.getElementById("myfrm");
	console.log(ObjFrm);
	ObjFrm.method="get";
	ObjFrm.action="get.html";
	ObjFrm.submit();
}

function sendValue()
{
	var sid = document.getElementById("number").value;
	var sname=document.getElementById("name").value;
	var ssex=document.getElementsByName("sex2");//提交上来的URL的值
	var sex;
	var fileValue=document.getElementById("myfile").value;
	var value1 = fileValue.lastIndexOf(".");
	var value2 = fileValue.lastIndexOf("\\");
	var fileExt= fileValue.substring(value1+1);
	var fileName = fileValue.substring(value2+1,value1);
	for(var i = 0; i <ssex.length; i++)
	{
		if(ssex[i].checked)
			sex=ssex[i].value;
	}
	var URL = "get.html?id="+sid+
	"&name="+sname+"&sex="+sex+"&fileName="+fileName+"&fileExt="+fileExt;//这里可以参考提交上去以后的网页地址样式
	window.location.href=URL;
}

