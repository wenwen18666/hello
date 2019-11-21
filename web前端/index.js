function $(tagname,index) {
    var elems = document.getElementsByTagName(tagname);
    if (index){
        return elems[index];
    }else{
        return elems[0];
    }

}