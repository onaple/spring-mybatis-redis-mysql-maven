<HTML>

<HEAD>

    <style type="text/css">

        div {

            height: 100px;
            width: 150px;
            border: solid 1px #09c;

        }

    </style>

    <script>

        var add = function () {

            document.getElementById("test").innerHTML = "添加的内容";

        }

    </script>

</HEAD>


<BODY>

<div id="test"></div>
<div id="test2"><a href="javascript:" onclick="add()">点击链接</a></div>

</BODY>

</HTML>