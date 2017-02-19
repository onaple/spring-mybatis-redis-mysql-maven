<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Add Product Form</title>

</head>
<body>

<div id="global">
    <form action="update" method="post">
        <fieldset>
            <legend>Add a product</legend>
            <p>
                <label for="id">id: </label>
                <input type="text" id="id" name="id"
                       tabindex="1">
            </p>

            <p>
                <label for="brand_Logotype">brand_Logotype: </label>
                <input type="text" id="brand_Logotype" name="brand_Logotype"
                       tabindex="2">
            </p>
            <p>
                <label for="shop_name">shop_name: </label>
                <input type="text" id="shop_name" name="shop_name"
                       tabindex="3">
            </p>
            <p>
                <label for="pinpai_name">pinpai_name: </label>
                <input type="text" id="pinpai_name" name="pinpai_name"
                       tabindex="4">
            </p>
            <p>
                <label for="dianping_id">dianping_id: </label>
                <input type="text" id="dianping_id" name="dianping_id"
                       tabindex="5">
            </p>
            <p>
                <label for="new_dom_id">new_dom_id: </label>
                <input type="text" id="new_dom_id" name="new_dom_id"
                       tabindex="6">
            </p>

            <p id="buttons">
                <input id="reset" type="reset" tabindex="7">
                <input id="submit" type="submit" tabindex="8"
                       value="Add Restaurant">
            </p>
        </fieldset>
    </form>
</div>
</body>
</html>