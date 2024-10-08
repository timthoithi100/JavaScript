var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
};

var insertionSort = function(array) {
    for(var i = 1; i < array.length; i++){
        insert(array, i - 1, array[i]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);

var array1 = [2, -11, 0, 88, 9, 7, 42];
insertionSort(array1);
console.log("Array after sorting:  " + array1);
