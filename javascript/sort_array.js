//1.Bubble sort
var sortBubblesArray = function(arr, asc) {
    var result = [];
    var cur;
    var prev;
    var iterationCount = 0;
    var isCompleted;


    if(asc){
        SortLocal();
    } else {
        SortLocal();
    }

    function SortLocal(){
        for(i = 0; i < arr.length; i++) {
            if(isCompleted == true) {
                break;
            }
            isCompleted = true;
            for(j=0; j < arr.length; j++) {
                iterationCount++;
                if (asc ? arr[j] < arr[j - 1] : arr[j] > arr[j - 1]) {
                   cur = arr[j];
                   prev = arr[j-1];
                   arr[j-1] = cur;
                   arr[j] = prev;     
                   isCompleted = false;                        
                }
            }           
        }
    }
    console.log(iterationCount);
    return arr;
}


var example = [1,2,3,4,5,6,7,8,0];
var result = sortBubblesArray(example, true);
console.log(result);