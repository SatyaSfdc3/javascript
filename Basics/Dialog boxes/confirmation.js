function getConfirmation(){
    var retVal=confirm("Do you want it");
    if(retVal==true){
        document.write("user Want to continue!");
        return true;

    }
    else{
        document.write("User dont want to continue");
        return false;

    }
}