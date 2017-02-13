<%--
  Created by IntelliJ IDEA.
  User: onaple
  Date: 2017/2/3
  Time: 12:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.Enumeration" %>
<%@ page import="org.springframework.stereotype.Service" %>
<html>
<head>
    <title>JSP Implicit Object</title>
</head>
<body>

<b> Http Headers:</b><br/>
<%
    for(Enumeration<String> e = request.getHeaderNames(); e.hasMoreElements();)
    {
        String header = e.nextElement();
        out.println(header + ": " + request.getHeader(header) + "<br/>");
    }
%>
<hr/>
<%
    out.println("Buffer size: " + response.getBufferSize() + "<br/>");
    out.println("Session id : " + session.getId() + "<br/>");
    out.println("Servlet name :" + config.getServletName()+ "<br/>");
    out.println("Server info: " + application.getServerInfo());
%>
</body>
</html>
