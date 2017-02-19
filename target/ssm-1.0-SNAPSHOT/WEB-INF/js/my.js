function loadXMLDoc(id) {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("area").innerHTML = xmlhttp.responseText;
        }
    }
    id = document.getElementById("inputId").value;
    xmlhttp.open("GET", "/showRestaurant?id=" + id, true);
    xmlhttp.send();
}

function show() {
    document.getElementById("myForm").style.display = "block";

}
function close() {
    document.getElementById("myForm").style.display = "";
}