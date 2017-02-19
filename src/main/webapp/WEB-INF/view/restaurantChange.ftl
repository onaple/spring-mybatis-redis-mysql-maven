<html>
<head>

<#--<link rel="stylesheet" href="../css/main.css">-->
<#--<link rel="stylesheet" href="../css/embed.default.css">-->
<#--<link rel="stylesheet" href="../css/font-awesome.min.css">-->
<#--<link rel="stylesheet" href="../css/jquery.fancybox.css">-->
<#--<link rel="stylesheet" href="../css/my.css">-->
<#--<link rel="stylesheet" type="text/css" href="my.css">-->

    <style type="text/css">
        #area {
            position: relative;
            top: 6%;
            height: 300px;
            width: 650px;
            border: solid 1px #09c;
            background: #97fff3;
        }

        #search {
            position: relative;
            top: 4%;
            height: 150px;
            width: 200px;
            border: solid 1px #09c;
            background: #72ff17;
        }

        #myForm {
            display: none;
            position: fixed;
            top: 5%;
            left: 50%;
            width: 400px;
            height: 150px;
            margin-left: -350px;
            padding: 3px 0 0 10px;
            background: #7aa6da;
            color: #333;
            z-index: 9999;
            border-radius: 5px;
        }

    </style>

    <script type="text/javascript">
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
    </script>
</head>


<body>


<div id="search">
    <ul id="menu" class="menu" style="position: relative">
        <li class="menu-item menu-item-search" style="opacity: 1; transform: translateY(0px);">
            <button id="button" class="btn btn-lg btn-primary" onclick="show()">
                ShowSearchArea
            </button>
        </li>

    </ul>
</div>

<div id="myForm">
    <h3>
        Select restaurant by id:
    </h3>
    <form action="">
        RestaurantID: <input id="inputId" type="text" name="id"/>
        <input type="button" value="query" onclick="loadXMLDoc()"/>
        <button id="close" value="close" onclick="close()">close</button>
    </form>

</div>

<div id="area">
    <h2>show restaurant area</h2>
</div>
</body>
</html>