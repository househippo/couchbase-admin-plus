function json_array_filter(data,type){
    
    //check if data is set
    if (typeof data != 'undefined') { return false;}
    //check if type is set
    if (typeof type != 'undefined') { type = 'json';}
    
    if(type == 'json'){ obj = eval('(' + jsonObject + ')'); }else{obj = data;}
    
    
    
}