// function reg() {
//     $.ajax({
//         url: "https://api.shisanshui.rtxux.xyz/auth/validate",
//         type: "GET",
//         contentType:"application/json",
//         datatype: "json",
//         success:function(result){
//             console.log(result);
//             console.log("success");
//             alert("验证成功!")
//         },
//         fail:function (err) {
//             alert("sorry，验证失败!");
//         }
//     });
// }
function register() {
    $.ajax({
        url: 'https://api.shisanshui.rtxux.xyz/auth/register',
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
            console.log("success");
            alert("注册成功!")
            window.location.href = "登陆后界面.html"
        },
        fail:function (err) {
            alert("sorry，注册失败!");
        }
    });
}