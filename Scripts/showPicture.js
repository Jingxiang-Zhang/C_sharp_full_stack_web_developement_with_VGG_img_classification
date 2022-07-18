

var nowFac;
function changeFactory(t) {
    var uid = t.id;
    
    $.ajax({
        type: "POST",
        url: "/CowPictureShow/getImageAndText",
        dataType: "json",
        data: { name: uid },
        success: function (sesponseTest) {
            var cowtext = document.getElementById('cowtext');
        }
    });
}


var deleteid;

function DeleteOn(t) {
    deleteid = t.id;
    var confirm = document.getElementById("confirmdelete");
    confirm.innerHTML = "您确定要删除组号为：" + t.id + " 的奶牛分组吗（此过程不可逆）";

}

function DeleteConfirm() {
    $.ajax({
        type: "POST",
        url: "/CowPictureShow/deleteGroup",
        data: { name: deleteid },
        dataType: "json",
        success: function (sesponseTest) {
            location.reload();
        }
    });
}

function AddGroup() {
    
    var AddName = document.getElementById("AddName").value;
    if (AddName == "") {
        alert("名称不能为空");
        return;
    }
    $.ajax({
        type: "POST",
        url: "/CowPictureShow/AddGroup",
        data: { name: AddName },
        dataType: "json",
        success: function (sesponseTest) {
            if (sesponseTest == "false") {
                alert("已存在名为：" + AddName + "的奶牛");
            }
            else {
                alert("添加成功");
                location.reload();
            }
        }
    });
}

function Edit(t) {
    var ed = t.id;
    var test = window.location.href;
    test = test.substring(0, 22);
    test += "/CowData/Edit"
    $.ajax({
        type: "POST",
        url: "/CowPictureShow/EditGroup",
        data: { name: ed },
        dataType: "json",
        success: function (sesponseTest) {
            window.location.href = test;
        }
    });
}

var deletepicid;

function DeletePic(t) {
    deletepicid = t.id;
}

function DeletePicConfirm() {
    $.ajax({
        type: "POST",
        url: "/CowPictureShow/deletePic",
        data: { name: deletepicid },
        dataType: "json",
        success: function (sesponseTest) {
            location.reload();
        }
    });
}

function ReturnLoc(t) {
    var test = window.location.href;
    test = test.substring(0, 22);
    test += "/CowData/Index";
    var uid = t.id;
    $.ajax({
        type: "POST",
        url: "/CowPictureShow/getImageAndText",
        dataType: "json",
        data: { name: uid },
        success: function (sesponseTest) {
            window.location.href = test;
        }
    });

}

