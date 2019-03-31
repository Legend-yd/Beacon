/**
 * 验证用户名
 * */
function nameNext() {
    var nameDiv = document.getElementById("nameDiv");//获取账号区域
    var checkDiv = document.getElementById("checkDiv");//获取验证区域
    var user_num = document.getElementById("user_num");//获取账号输入框

    if (user_num.value != null && user_num.value !== "") {
        nameDiv.style.display = "none";
        checkDiv.style.display = "block";
    } else {
        var name_warn = document.getElementById("name_warn");
        name_warn.style.display = "block";
    }
}

/**
 * 发送验证码
 */
function sendVerify() {
    var sendBtn = document.getElementById("sendBtn");//获取按钮
    sendBtn.setAttribute("disabled", true);
    sendBtn.style.backgroundColor = "#c0c9dd";
    backTime();//倒计时
}

/**
 *倒计时
 */
var nowTime = 60;

function backTime() {
    var sendBtn = document.getElementById("sendBtn");//获取按钮
    if (nowTime > 0) {
        sendBtn.innerHTML = nowTime;
        nowTime = nowTime - 1;
        setTimeout("backTime()", 1000);
    } else {
        sendBtn.removeAttribute("disabled");
        sendBtn.innerHTML = "重新发送";
        nowTime = 10;
        sendBtn.style.backgroundColor = "#f8eef6";
    }
}

/**
 * 提交验证码
 * */
function checkNext() {
    var checkDiv = document.getElementById("checkDiv");//验证码区域
    var pwd_div = document.getElementById("pwd_div");//密码区域
    var checkNumber = document.getElementById("checkNumber");//验证码框
    if (checkNumber.value != null && checkNumber.value !== "") {
        checkDiv.style.display = "none";
        pwd_div.style.display = "block";
    } else {
        var check_warn = document.getElementById("check_warn");
        check_warn.style.display = "block";
    }
}

/**
 * 判断密码的等级
 * */
function check_level() {
    var pwd_level = document.getElementById("pwd_level");
    var pwd = document.getElementById("pwd").value;
    var level1 = document.getElementById("level1");
    var level2 = document.getElementById("level2");
    var level3 = document.getElementById("level3");
    var level_text = document.getElementById("level_text");
    if (pwd.length > 0) {
        pwd_level.style.display = "flex";
    } else {
        pwd_level.style.display = "none";
    }
    if (pwd.length > 2 && pwd.length < 6) {
        level1.style.backgroundColor = "#faa809";
        level2.style.backgroundColor = "#fa2b15";
        level3.style.backgroundColor = "#fa2b15";
        level_text.innerHTML = "弱";
        level_text.style.color = "#faa809";
    } else if (pwd.length > 6 && pwd.length < 12) {
        level1.style.backgroundColor = "#faa809";
        level2.style.backgroundColor = "#faa809";
        level3.style.backgroundColor = "#fa2b15";
        level_text.innerHTML = "中";
        level_text.style.color = "#faa809";
    } else if (pwd.length > 12) {
        level1.style.backgroundColor = "#22fa24";
        level2.style.backgroundColor = "#22fa24";
        level3.style.backgroundColor = "#22fa24";
        level_text.innerHTML = "强";
        level_text.style.color = "#22fa24";

    }
}

/***
 * 判断两次密码是否一致
 */
function check_pwd() {
    var pwd = document.getElementById("pwd").value;//第一次
    var re_pwd = document.getElementById("re_pwd").value;//二次密码
    var pwd_submit = document.getElementById("pwd_submit");//提交按钮
    var pwd_warn = document.getElementById("pwd_warn");//两次密码不一致警告
    if (pwd === re_pwd) {
        pwd_warn.style.display = "none";
        pwd_submit.removeAttribute("disabled");//按钮恢复使用
        pwd_submit.style.backgroundColor="#1bc4f3";

    } else {
        pwd_warn.style.display = "block";
        pwd_submit.setAttribute("disabled", true);//按钮不可用
        pwd_submit.style.backgroundColor="#d0d8d7";
    }
}

/***
 *修改成功
 */
function pwdNext() {
    var pwd_div = document.getElementById("pwd_div");//密码区域
    var succeed = document.getElementById("succeed");//成功区域
    pwd_div.style.display="none";
    succeed.style.display="block";
}