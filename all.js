	
var token = "";
function begin() {
    $.ajax({
        url: 'https://api.shisanshui.rtxux.xyz/auth/login',
        type: 'POST',
        data:
            JSON.stringify({
                "username": document.getElementById("username").value.trim(),
                "password": document.getElementById("password").value.trim(),
            }),
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
            alert("登录成功");
            window.location.href = "登陆后界面.html"
        },
        fail:function (err) {
            alert("用户信息错误，请及时核对！");
        }
    });
}