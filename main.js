function json_array_filter(data,dataType){
    
    //check if data is set
    if (typeof data == 'undefined') { return false;}
    //check if type is set
    if (typeof dataType == 'undefined') { dataType = 'object';}else{ dataType = 'json';}
    
    if(dataType == 'json'){ var obj = eval('(' + data + ')'); }else{var obj = data;}
    
    //test 2
     
}
