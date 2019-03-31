$(document).ready(function () {
    $("#header").load("../../html/index/guide.html", function () {
        setCss("../../css_data/index/guide.css");
        setJs("../../js/index/guide.js");
    });

    //获取显示的界面登录还是注册
    var mode = getCookie("login");
    var login = $("#login_btn");
    var create = $("#create_btn");
    var create_div = $("#create_div");
    var login_div = $(".login_div");
    if (mode === "create") {
        create.css("background", "#dfdfdf");
        create_show()
    } else {
        login.css("background", "#dfdfdf");
        login_show()
    }

    //点击登录和注册时切换-
    create.click(function () {
        create_show();
    });

    function create_show() {
        login.css("background", "white");
        login_div.css("visibility", "hidden");
        create_div.css("visibility", "visible");
        create.css("background", "#dfdfdf");
    }

    function login_show() {
        create.css("background", "white");
        create_div.css("visibility", "hidden");
        login_div.css("visibility", "visible");
        login.css("background", "#dfdfdf");
    }

    login.click(function () {
        login_show();
    });

    $("#foot").load("../../html/foot.html");
});