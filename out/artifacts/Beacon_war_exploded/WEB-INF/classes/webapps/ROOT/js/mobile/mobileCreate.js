/**
 * 注册时判断输入框内容
 * */
function createmenber() {
    var privacyCheck =document.getElementById("privacyCheck");//复选框
    var phoneNumber =document.getElementById("phoneNumber").value;//手机号
    var checkNumber =document.getElementById("checkNumber").value;//验证码
    if(phoneNumber==null||phoneNumber===""){
        alert("手机号不能为空！");
    }else if(phoneNumber.length!==11){
        alert("手机号格式错误！");
    }else if(checkNumber!=="123456"){
        alert("验证码错误");
    } else if(privacyCheck.checked === true){
        window.location.href="mobile.html";
    }else{
        alert("确认同意条款");
    }
}
/**
 * 输入框后面的图片变化
 * */
function inputNumber(str) {
    var phoneCheck =document.getElementById("phoneCheck");
    if(str[0]==="1"){
        phoneCheck.innerHTML="";
        phoneCheck.style.borderColor="#b5d4f6";
        phoneCheck.style.backgroundColor="#b5d4f6";
    }else {
        phoneCheck.innerHTML="×";
        phoneCheck.style.backgroundColor="#fc2436";
        phoneCheck.style.color="#d2f0f7";
    }
    var m =document.getElementById("phoneNumber").value;//手机号
    if(m[0]==="1"&&m.length===11){
        phoneCheck.innerHTML="√";
        phoneCheck.style.backgroundColor="#0fea29";
        phoneCheck.style.color="#d2f0f7";
    }
}

/**
 * 发送验证码
 */
function sendVerify() {
    var sendBtn = document.getElementById("sendBtn");//获取按钮
    sendBtn.setAttribute("disabled",true);
    sendBtn.style.backgroundColor="#c0c9dd";
    backTime();//倒计时
}

/**
 *倒计时
 */

var nowTime =60;
function backTime() {
    var sendBtn = document.getElementById("sendBtn");//获取按钮
        if(nowTime>0){
            sendBtn.innerHTML=nowTime;
            nowTime=nowTime-1;
            setTimeout("backTime()", 1000);
        }else{
            sendBtn.removeAttribute("disabled");
            sendBtn.innerHTML="重新发送";
            nowTime=10;
            sendBtn.style.backgroundColor="#f8eef6";
        }
}

/**
 * 美化alert
 * 自己定义一个div并显示出来
 */
function userAgreement(num) {
    var title;
    var textUrl;
    if(num===1){
        title="用户协议";
        textUrl="../txt/mobile/userAgreement.txt";
    }else{
        title="隐私权保护声明";
        textUrl="../txt/mobile/privacyStatement.txt";
    }
    var privacy_div = document.getElementById("privacy_div");
    var privacy_txt =document.getElementById("privacy_txt");
    var privacy_title = document.getElementById("privacy_title");
    privacy_title.innerHTML=title;
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp =new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState===4 && xmlhttp.status===200)
        {
            privacy_txt.innerHTML=xmlhttp.responseText;
        }
    };
    xmlhttp.open("post",textUrl,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");//添加request头
    xmlhttp.send("hanemaklfjdaklsjfaslkf");
    privacy_div.style.transform="scale(1)";
}
/**
 * 点击按钮隐藏
 * */
function hidden_privacy() {
    var privacy_div = document.getElementById("privacy_div");
    privacy_div.style.transform="scale(0)";
}