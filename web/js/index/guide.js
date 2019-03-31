$(document).ready(function () {
    //登录按钮点击
    $("#loginBtn").click(function () {
        setCookie("login", "login", 7);
        window.location.href = "/html/index/login.html";
    });

    //注册按钮点击
    $("#createBtn").click(function () {
        setCookie("login", "create", 7);
        window.location.href = "/html/index/login.html";
    });
});