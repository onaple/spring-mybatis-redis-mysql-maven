<%--
  Created by IntelliJ IDEA.
  User: onaple
  Date: 2017/2/3
  Time: 11:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.DateFormat" %>

<head>
    <title>Today's date</title>
</head>
<body>
<%
    DateFormat dateFormat = DateFormat.getDateInstance(DateFormat.LONG);
    String s = dateFormat.format(new Date());
    out.println("Today is " + s);
%>
</body>
</html>
