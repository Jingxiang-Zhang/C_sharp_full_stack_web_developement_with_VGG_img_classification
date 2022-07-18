


var startName;
function SetStartName(t) {
    startName = t.id;
    startName = startName.substring(5);
}

function startLearn() {
    $.ajax({
        type: "POST",
        url: "/CowData/StartLearn",
        dataType: "json",
        data: { name: startName },
        success: function (sesponseTest) {
            var bar = document.getElementById("learncancel");
            bar.click();
        }
    });
}

function labelevent(){
    window.setInterval("getvalue()", 2000);
}

function getvalue() {
    var bar = document.getElementById("learnresult");
    $.ajax({
        type: "POST",
        url: "/CowData/getLearnState",
        dataType: "json",
        data: { name: "factoryname" },
        success: function (sesponseTest) {         
            var result = sesponseTest.split(",");
            for (var i = 1; i <= parseInt(result[0]); i++) {
                var tump = result[i].split(":");          
                var name = tump[0];        
                var resultcontent = tump[1];
                var h5 = document.getElementById("title" + name);
                var bar = document.getElementById("bar" + name);
                var start = document.getElementById("start" + name);
                var stop = document.getElementById("stop" + name);
                var stophide = document.getElementById("stopdiv" + name);
                if (resultcontent == "0") {
                    h5.innerHTML = "状态：尚未训练";
                    bar.innerHTML = "尚未开始";
                    bar.style = "width: 0%;"
                    start.innerHTML = "开始"
                    stophide.style.display = "none";
                }
                else {
                    var per = resultcontent.substring(1).split("/");
                    var pers = ((parseFloat(per[0]) + 1) / parseFloat(per[1]) * 100).toFixed(2).toString() + "%";
                    bar.style = "width: " + pers + ";"
                    bar.innerHTML = pers;
                    if (pers == "100.00%") {
                        h5.innerHTML = "状态：已完成";
                        start.innerHTML = "重新开始"
                        stop.innerHTML = "暂停";
                        stophide.style.display = "none";
                        bar.className = "progress-bar";
                    }
                    else if (pers == "0.00%") {
                        h5.innerHTML = "状态：尚未训练";
                        start.innerHTML = "开始"
                        stophide.style.display = "none";
                    }
                    else if (resultcontent[0] == "r") {
                        h5.innerHTML = "状态：正在训练";
                        start.innerHTML = "重新开始"
                        stop.innerHTML = "暂停";
                        bar.className = "progress-bar progress-bar-striped progress-bar-animated";
                    }
                    else if (resultcontent[0] == "s") {
                        h5.innerHTML = "状态：暂停中";
                        start.innerHTML = "重新开始"
                        stop.innerHTML = "继续";
                        bar.className = "progress-bar";
                    }                
                }
            }
        }
    });
}

function learnStopOrContinue(t) {
    var id = t.id;  
    id = id.substring(4);    
    if (t.innerHTML == "继续") {//继续->暂停
        $.ajax({
            type: "POST",
            url: "/CowData/ContinueLearn",
            dataType: "json",
            data: { name: id },
            success: function (sesponseTest) {
                if (sesponseTest == "") {
                    alert("正在启动" + id + "的训练，此过程较慢，请勿重复操作以免造成错误");
                }
                else {
                    alert("最多同时有一个网络进行训练，请先暂停" + sesponseTest + "的训练");
                }
            }
        });
    }
    else {//暂停->继续
        $.ajax({
            type: "POST",
            url: "/CowData/StopLearn",
            dataType: "json",
            data: { name: id },
            success: function (sesponseTest) {
                alert("正在暂停" + id + "的训练，此过程较慢，请勿重复操作以免造成错误");
            }
        });
    }
    
}

function trainlogShow() {
    window.open('TrainLog', 'target', '');
}

window.onload = function () {
    getvalue();
    labelevent();   
}


function trainlogDelete() {
    $.ajax({
        type: "POST",
        url: "/CowData/Deletelog",
        dataType: "json",
        success: function (sesponseTest) {
            var bar = document.getElementById("deletecancel");
            bar.click();
            alert("删除成功");
        }
    });
}