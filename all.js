	
var token = "";
// (function ($) {
//     $.fn.serializeJson = function () {
//         var serializeObj = {};
//         var array = this.serializeArray();
//         var str = this.serialize();
//         $(array).each(function () {
//             if (serializeObj[this.name]) {
//                 if ($.isArray(serializeObj[this.name]) && this.value != "") {
//                     serializeObj[this.name].push(this.value);
//                 } else {
//                     if (this.value != "") {
//                         serializeObj[this.name] = [serializeObj[this.name], this.value];
//                     }
//                 }
//             } else {
//                 if (this.value != "") {
//                     serializeObj[this.name] = this.value;
//                 }
//             }
//         });
//         return serializeObj;
//     };
// })(jQuery);


// function begin() {
//     var login_data = ($('#login_form').serializeJson());
//     /*if (login_data.username == " 用户名" || login_data.password == " 密码") {
//         alert("用户名或密码不能为空");
//         return;
//     }*/
//     $.ajax({
//         type: "POST",
//         dataType: "json",
//         url: "https://api.shisanshui.rtxux.xyz/auth/login",
//         data: JSON.stringify(login_data), //提交的数据
//         contentType: "application/json;charset-UTF-8",
//         success: function (result) { //todo
//             console.log(result); //打印服务端返回的数据(调试用)
//             if (result.status == 0) {
//                 token=result.data.token;
//                 console.log(token);
//                 alert("登录成功");
//                 window.location.href = "登陆后界面.html"
//             };
//         },
//         error: function (res) {
//             // $("#login_form").reset();
//             alert("用户名或密码错误");
//         }
//     });
// }
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