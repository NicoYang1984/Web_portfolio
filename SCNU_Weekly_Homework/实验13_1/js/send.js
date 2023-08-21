window.onload=function()
{
	// document.write("表单参数读取："+"<br/>");
	var frmValue=window.location.search;
	frmValue=decodeURIComponent(frmValue);
	frmValue=frmValue.substring(1);
	alert(frmValue);
	var urlValue = frmValue.split("&");
	for(var i = 0; i < urlValue.length; i++)
	{
		var name= urlValue[i].split("=")[0];
		var value = urlValue[i].split("=")[1];
		document.write(name+":"+value+"<br/>");
	}
	document.write("<br/>");
	// document.write("fileName:"+fileName+"<br/>");
	// document.write("fileExt:" +fileType);
}



