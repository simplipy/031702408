function logout() {
    $.ajax({
        url: 'https://api.shisanshui.rtxux.xyz/auth/logout',
        type: 'POST',
        // data:
        //     JSON.stringify({
        //         "username": document.getElementById("username").value.trim(),
        //         "password": document.getElementById("password").value.trim(),
        //     }),
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
            alert("注销成功");
            window.location.href = "开始界面.html"
        },
        fail:function (err) {
            alert("error！");
        }
    });
}