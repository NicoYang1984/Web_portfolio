function reg()
{
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    if(userName=="")
    {
        alert("用户名不能为空噢~");
        return false;
    }
    if(password==""||repassword == "")
    {
        alert("密码不能为空！");
        return false;
    }
    if(password!=repassword)
    {
        alert("两次输入的密码不一致噢~");
        return false;
    }
    localStorage.setItem("uname",userName);
    localStorage.setItem("pwd",password);
    alert("注册成功！");
    window.location.href="login.html";
}
function log()
{
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(password==""||userName == "")
    {
        alert("输入不能为空！");
        return false;
    }
    if(localStorage.getItem("uname"))
    {
        var uname = localStorage.getItem("uname").toString();
        var pwd = localStorage.getItem("pwd").toString();
        if(userName==uname)
        {
            if(pwd==password)
            {
                sessionStorage.setItem("uname",userName);
                sessionStorage.setItem("pwd",password);
                alert("登录成功！");
                window.location.href="ind.html";
            }
            else
            {
                alert("密码输入错误！");
                return false;
            }
        }
        else{
            alert("输入的用户名不匹配！");
            return false;
        }
    }
    else
    {
        alert("请先注册！");
        return false;
    }
}

function chk()
{

    if(sessionStorage.getItem("uname"))
    {
        alert("欢迎您，"+sessionStorage.getItem("uname").toString()+"!");
    }
    else
    {
        alert("请先登录，再访问！");
        window.location.href="login.html";
    }
}