<%--
  Created by IntelliJ IDEA.
  User: onaple
  Date: 2017/2/3
  Time: 14:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.Enumeration" %>
<html>
<head>
    <title>Scriptlet example</title>
</head>
<body>
<b>Http headers: </b> <br/>
<%-- first scriptlet--%>
<%
    for (Enumeration<String> e = request.getHeaderNames(); e.hasMoreElements();){
        String header = e.nextElement();
        out.println(header + ":" + request.getHeader(header) + "<br/>");
    }
    String message = "Thank you.";
%>

<hr/>
<%-- second scriptlet --%>
<%
    out.println(message);
%>

<br/>

Today is <%=java.util.Calendar.getInstance().getTime()%>
</body>
</html>
