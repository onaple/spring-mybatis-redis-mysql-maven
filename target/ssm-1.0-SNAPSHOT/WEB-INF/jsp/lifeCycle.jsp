<%--
  Created by IntelliJ IDEA.
  User: onaple
  Date: 2017/2/3
  Time: 14:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%!
    public void jspInit(){
        System.out.println("jspInit...");
    }
    public void jspDestroy(){
        System.out.println("jspDestory...");
    }
%>
<html>
<head>
    <title>jspInit and  jspDestroy</title>
</head>
<body>
Overriding jspInit and jspDestroy
</body>
</html>
