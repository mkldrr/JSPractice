// function biggestNum(arr ){

//     var max=0;
//     for(var i=0;i<arr.length;i++){
  
//       if(arr[i]>max){
//         max=arr[i];
//       }
//     }
//     console.log("The biggest number in array is :"+ max);

// }
// var arr  =[12,54,345,67];

// biggestNum(arr);




 function printLongestName(names){

    var longName="";

    for(var i=0;i<names.length;i++){

    if(names[i].length>longName.length){

        longName=names[i];

    }
       
    }    

    return longName + " is the longest name.";

}

var arr=["Galina","Madina","Olga","Aleksey"];
  console.log(printLongestName(arr));