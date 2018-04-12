function writeCookie()
{
    if(document.myform.customer.value == ""){
        alert("Enter some value");
        return;

    }
    cookievalue = escape(document.myform.customer.value)+";";
    document.cookie="name=" + cookievalue;
    document.write("setting cookies :" +"name" +cookievalue);

}