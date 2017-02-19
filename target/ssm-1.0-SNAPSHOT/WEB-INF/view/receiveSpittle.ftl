<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/html">
<head>
    <title>Save Product</title>
</head>
<body>
<div id="global">

    <p style="background: #5676ff">
    <h5>Details:</h5>
    private Long id: ${spittle.id}<br/>


    private String message; ${spittle.message}<br/>
    private Date postedTime; ${spittle.postedTime?string("yyyy-MM-dd")}<br/>
   </p>


    private Spitter spitter; <br/>
    <p style="background: #8fff62">
    id: ${spittle.spitter.id}<br/>
    username: ${spittle.spitter.username}<br/>
    password: ${spittle.spitter.password}<br/>
    fullname: ${spittle.spitter.fullName}<br/>
    email: ${spittle.spitter.email}<br/>
    updateByEmail: ${spittle.spitter.updateByEmail}<br/>


    </p>
</div>
</body>
</html>
