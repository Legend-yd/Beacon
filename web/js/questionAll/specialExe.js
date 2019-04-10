$(document).ready(function () {
    $("#header").load("../../html/index/guide.html", function () {
        setCss("../../css_data/index/guide.css");
        setJs("../../js/index/guide.js");
    });

    //选择不同的专业

    com_Btn = $("#cho1");//计科标签
    tongxin_Btn = $("#cho2");//通信标签
    tec_Btn = $("#cho3");//电子标签
    com_Div = $("#cho_1");//计科模块
    tongxin_Div = $("#cho_2");//通信模块
    tec_Div = $("#cho_3");//电子模块

    //所以的都变成背景色
    function all_color() {
        com_Btn.css("background", "white");
        tongxin_Btn.css("background", "white");
        tec_Btn.css("background", "white");
        com_Div.css("display", "none");
        tongxin_Div.css("display", "none");
        tec_Div.css("display", "none")
    }

    //计算机
    com_Btn.click(function () {
        all_color();
        com_Btn.css("background", "#c1faf8");
        com_Div.css("display", "block")

    });
    //通信
    tongxin_Btn.click(function () {
        all_color();
        tongxin_Btn.css("background", "#c1faf8");
        tongxin_Div.css("display", "block")


    });
    //电子
    tec_Btn.click(function () {
        all_color();
        tec_Btn.css("background", "#c1faf8");
        tec_Div.css("display", "block")

    })
});