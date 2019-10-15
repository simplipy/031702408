function get() {
    $.ajax({
        url: 'https://api.shisanshui.rtxux.xyz/rank',
        type: 'GET',
        contentType:"application/json",
        datatype: "json",
        success:function(result){
            console.log(result);
            for(i in result) //data.data指的是数组，数组里是8个对象，i为数组的索引
            {
                var tr;
                tr='<td>'+result[i].player_id+'</td>'+'<td>'+result[i].name+'</td>'+'<td>'+result[i].score
                $("#table").append('<tr>'+tr+'</tr>')
            }
        },
        fail:function (err) {
            alert("error！");
        }
    });
}