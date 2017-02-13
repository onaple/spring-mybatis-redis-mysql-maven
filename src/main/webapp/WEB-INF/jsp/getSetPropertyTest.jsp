<%--
  Created by IntelliJ IDEA.
  User: onaple
  Date: 2017/2/3
  Time: 15:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>getProperty and setProperty</title>
</head>
<body>
<jsp:useBean id="restaurant" class="me.ele.redistemplate.model.Restaurant"/>
<jsp:setProperty name="restaurant" property="shop_name" value="shop_wangxu"/>
Shop Name:<jsp:getProperty name="restaurant" property="shop_name"/>
</body>
</html>
