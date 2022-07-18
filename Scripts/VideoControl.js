
var FacName = "";
var CamName = "";
var Tag = false;

function LoadVideo(VideoName) {
    $("#video").attr("src", "../VideoDate/" + VideoName.id + "/video.mp4");
    document.getElementById("video").play();
    var facmonitor = VideoName.id;
    var result = facmonitor.split("/");
    if (CamName == result[1] && FacName == result[0]) {
        return;
    }
    Tag = false;
    document.getElementById("rePic").style.display = "none";
    if (result[0] == FacName) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "/CowData/StartCowTest",
        dataType: "json",
        data: { name: VideoName.id },
        success: function (sesponseTest) {
        }
    });
}

function CloseAll() {
    $.ajax({
        type: "POST",
        url: "/CowData/CloseCowTest",
        dataType: "json",
        success: function (sesponseTest) {
        }
    });
}

function TagCow() {
    var img = document.getElementById("rePic");
    if (Tag == false) {
        Tag = true;
        img.style.display = "block";
    }
    else {
        Tag = false;
        img.style.display = "none";
    }
}


function StartReadResult(){
    window.setInterval("RefreshPic()", 500);
}

function RefreshPic() {
    var rowsrc = document.getElementById("picshow").src.substr(0, 22) + "/Python/re.png?n=" + Math.random();
    document.getElementById("picshow").src = rowsrc;
}

window.onload = function () {
    StartReadResult();
}








