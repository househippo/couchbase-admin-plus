//I want to pass an object array into this filter and sort an mulidimentional array of objects parsed from a json string.
function filterObject(obj,branch,sorter,range,find) {
    
    /*
     * the "obj" is an array of js objects
     * the "branch" is the location in the MDA(Multi Dimentional Array)
     * EX. obj.BookReviews.NameOfReviewer .... I want to pass "BookReviews.NameofReviewr" so that function know how to filter the obj
     * the "sorter" is 
     * the "range" is the method of sort 'AtoZ'... LtoH ... 
     * 
     * 
    */
     
     var SortObj = false;
    if(typeof    obj == 'undefined' || typeof obj != 'object'){return false;}  // make sure it a JS object
    if(typeof branch == 'undefined' || branch.isArray == false){return false;} // make sure
    if(typeof  sorter == 'undefined'){   }
    if(typeof  range == 'undefined'){  range = 'AtoZ';  }
    
    
    switch(sorter){       
      
      case"AtoZ":
      case"ZtoA":
      case"LtoH": 
      case"HtoL":
      SortObj = true;
      break; 
      
      default:
      break;
    }
    
    if(range == 'AtoZ'){
        
        this.AtoZ = function() {
         
            /*
            $.each(obj,function(index,value){            
            console.log(index + ' | ' + value[branch[0]]);   
            })
            */
           // here comes the magic that allows chaining:
            //return objInner;
            //return this;
        }
    }
    
    
    if(range == 'ZtoA'){
        this.ZtoA = function() {

            // here comes the magic that allows chaining:
            return this;
        }
    }
    if(range == 'LtoH'){  
        this.LtoH = function() {

            // here comes the magic that allows chaining:
            return this;
        }
    }
    if(range == 'HtoL'){
        this.HtoL = function() {

            // here comes the magic that allows chaining:
            return this;
        }
    }
    
    // this.two analogous
    this.Back = function() {
  
    return obj;
    }
}