window.onload = function () {
    // Generating the array
    var displayArray;
    var generatedArray;
    var unsortedArray;
debugger;
    // 4. Display an unsorted array
    document.querySelector('form').addEventListener('submit', function (e) {
        // 1. Get amount of numbers
debugger;
        var numbersAmount = document.querySelector('#select_amount').value;
        // 2. Get min and max values
        var minValue = parseInt(document.querySelector('#min_value').value);
        var maxValue = parseInt(document.querySelector('#max_value').value);

        unsortedArray = generatedArray(numbersAmount, minValue, maxValue);
        e.preventDefault();
        document.querySelector('#unsorted-array').textContent = '[' + unsortedArray + ']';
    });

    // 3. Generate an array
    generatedArray = function (numbers, min, max) {
        var result = [];
        for (i = 0; i < numbers; i++) {
            result.push(Math.floor((Math.random() * (max - min) + min)));
        }
        return result;
    }

    // Sort the generated array
    document.querySelector('#btn_sort').addEventListener('click', function () {
        
        // Select sorting type
        var sortType = document.querySelector('#select_type').value;
        var sortedArray = sortBubblesArray(unsortedArray, sortType);
        // Alert the result
        var p = document.querySelector('#result > p');
        
        p.textContent = '[' + sortedArray + ']';
        document.querySelector('#result').classList.remove('hidden');

    });

    //1.Bubble sort
    var sortBubblesArray = function (arr, sorting) {
        var cur;
        var prev;
        var iterationCount = 0;
        var isCompleted;

        for (i = 0; i < arr.length; i++) {
            if (isCompleted == true) {
                break;
            }
            isCompleted = true;
            for (j = 0; j < arr.length; j++) {
                iterationCount++;
                if (sorting === 'ascending' ? arr[j] < arr[j - 1] : arr[j] > arr[j - 1]) {
                    cur = arr[j];
                    prev = arr[j - 1];
                    arr[j - 1] = cur;
                    arr[j] = prev;
                    isCompleted = false;
                }
            }
        }
        console.log(iterationCount);
        return arr;
    }
};