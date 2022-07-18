

function ClickLogin() {
    var uid = document.getElementById("Uid").value;
    var pwd = document.getElementById("Pwd").value;
    $.ajax({
        type: "POST",
        url: "/Login/Checkin",
        dataType: "json",
        data: { userid: uid, password: pwd },
        success: function (sesponseTest) {
            if (sesponseTest == "0") {
                alert("用户名或密码错误");
            }
            else {
                alert("登录成功");
                location.reload();
            }
        }
    });
}

function LoginTest() {
    var uid = document.getElementById("Uid").value = "SA";
    var pwd = document.getElementById("Pwd").value = "SA";
    setTimeout("LoginWithoutPwd()", 1000);
}
function LoginWithoutPwd() {
    $.ajax({
        type: "POST",
        url: "/Login/CheckinWithoutPwd",
        dataType: "json",
        success: function (sesponseTest) {
            location.reload();
        }
    });
}

function ClickOut() {
    var test = window.location.href;
    test = test.substring(0, 22);
    $.ajax({
        type: "POST",
        url: "/Login/Checkout",
        dataType: "json",
        success: function (sesponseTest) {
            alert("您已成功退出登录");
            window.location.href = test;
        }
    });
}

function LoginWarning() {
    alert("请先登录");
}

