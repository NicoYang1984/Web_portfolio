var selall="<input type = checkbox id=sall onclick = SelectAll()>全选";
var selme="<input type = checkbox name =sme onclick=SelectMe()>选择";
var title = new Array(selall,"电影类型","电影名称","价格","操作");
var movie = new Array();
var allstr="<a href = # onclick = editRow(this)>修改</a> <a href=# onclick=delRow(this)>删除</a>";
movie[0] = new Array(selme,"动作片","导火线","50",allstr);
movie[1] = new Array(selme,"科幻片","2012","70",allstr);
movie[2] = new Array(selme,"战争片","我是战士","60",allstr);
var oldvalue;//保存编辑之前的值

document.write("<table border='2' id='mytable' align='center' rules='all' height='35px'>");
document.write("<tr height='35px'>");
for(var i = 0; i < title.length; i++)
{
	document.write("<th>" + title[i] + "</th>");
}
document.write("</tr>");
for(var i = 0; i < movie.length; i++)
{
	document.write("<tr height='35px' >");
	for(var j = 0; j < movie[i].length; j++)
	{
		document.write("<th>" + movie[i][j] + "</th>");
	}
	document.write("</tr>");
	
}
document.write("</table>");

function SelectAll()
{
	var sa=document.getElementById("sall");
	var sm=document.getElementsByName("sme");
	var flag;
	if(sa.checked==true)
	{
		for(var i = 0; i < sm.length; i++)
		{
			sm[i].checked = true;
		}
	}
	else
	{
		for(var i = 0; i < sm.length; i++)
		{
			sm[i].checked = false;
		}
	}
}

function SelectMe()
{
	var sa=document.getElementById("sall");
	var sm=document.getElementsByName("sme");
	var flag;
	for(var i = 0; i < sm.length; i++)
	{
		if(!sm[i].checked)
		{
			flag = false;
			break;
		}
		else
		{
			flag = true;
		}
	}
	sa.checked = flag;
}

function delRow(that)
{
	var ObjTable=document.getElementById("mytable");
	var curRow=that.parentNode.parentNode.rowIndex;
	if (confirm("你确定删除该行数据吗？"))
	{
		ObjTable.deleteRow(curRow);
	}
}

function editRow(that)
{
	
	var ObjTable=document.getElementById("mytable");
	var curRowIndex=that.parentNode.parentNode.rowIndex;
	var ObjTr = ObjTable.rows[curRowIndex];
	var myTd5 = ObjTr.cells.item(4);
	var td4 = ObjTr.cells.item(3);
	oldvalue = td4.innerText;
	var tdstr = "<a href=# onclick=save(this)>保存</a>";
	tdstr = tdstr + "<a href = # onclick=cancel(this)> 取消</a>";//实现点击编辑后的按钮变化：通过赋值
	mystr = "<input type = text id = mystr value = "+oldvalue+">";//注意双引号和加号一定要加
	
//	alert(myTd5.innerText);
	myTd5.innerHTML = tdstr;
	td4.innerHTML = mystr;
}

function cancel(that)
{
	var ObjTable=document.getElementById("mytable");
	var curRowIndex=that.parentNode.parentNode.rowIndex;
	var ObjTr = ObjTable.rows[curRowIndex];
	var myTd5 = ObjTr.cells.item(4);
	var td4 = ObjTr.cells.item(3);
	var tdstr = "<a href=# onclick=editRow(this)>修改</a>";
	tdstr = tdstr + "<a href = # onclick=delRow(this)> 删除</a>";
	myTd5.innerHTML = tdstr;
	td4.innerText = oldvalue;
}

function save(that)
{
	var ObjTable=document.getElementById("mytable");
	var curRowIndex=that.parentNode.parentNode.rowIndex;
	var ObjTr = ObjTable.rows[curRowIndex];
	var newText = document.getElementById("mystr").value;

//	var myTd5 = ObjTr.cells.item(4);
//	var td4 = ObjTr.cells.item(3);
//	td4.innerHTML = newText;
//	myTd5.innerHTML = allstr;
//这样子写和下面的写法区别具体在哪呢？——区别不大，只是省不省代码的区别而已。

	ObjTr.cells.item(3).innerHTML=newText;
	ObjTr.cells.item(4).innerHTML = allstr;
	

}
