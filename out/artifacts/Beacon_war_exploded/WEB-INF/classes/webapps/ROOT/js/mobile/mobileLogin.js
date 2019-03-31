var flag = true;

function change() {
    /*自定义复选框样式变化*/
    var myDiv = document.getElementById("myCheckBox");
    if (flag) {
        myDiv.style.color = "#f8eef6";
        myDiv.style.backgroundColor = "#1d9ef5";
    } else {
        myDiv.style.color = "#b5d4f6";
        myDiv.style.backgroundColor = "#b5d4f6";
    }
    flag = !flag;
}


//判断登陆是否成功
$(document).ready(function () {
    $("button.btn").click(function () {
        var name = $("#name").val();
        var pwd = $("#pwd").val();
        var input_wrong = $("#input_wrong");
        if (name == null || name === "") {
            input_wrong.html("用户名不能为空");//错误警告
            input_wrong.css("display", "block");
        } else if (pwd == null || pwd === "") {
            input_wrong.html("密码不能为空");
            input_wrong.css("display", "block");
        } else {
            input_wrong.css("display", "none");
            succeed();//将数据传回服务端
        }
    });
});

/**
 * 登录之后将数据发送到服务端
 * */

function succeed() {
    $(document).ready(function () {
       /* $.post("/LoginServlet", function (data, status) {
            alert(data + "状态：\n" + status);
        });*/

        //提交json数据
        $.ajax({
            type: "POST",
            url: "/LoginServlet",
            contentType: "application/json;charset=utf-8",
            data:{"name":"杨多","pwd":"123456"},
            dataType: "json",
            async:true,//默认是true
            success:function (message) {
                alert("提交失败"+JSON.stringify(message));
               /* $("#name").val(message.name);
                $("#pwd").val(message.pwd);*/
            },
            error:function (message) {
                alert("提交失败"+JSON.stringify(message));
            }
        });

    });
}


/**
 * 文档就绪事件，防止在文档加载之前就运行jQuery代码
 * */
$(document).ready(function () {

    // 开始写 jQuery 代码...

});