//1.Bubble sort
var sortBubblesArray = function(arr, asc) {
    var array = [];
    for(i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            array.push(arr[i]);
        }
    }
    return array;
}

debugger;
var example = [10, 5, 1, 3, 9];
sortBubblesArray(example);
