/**
 * 
 * @param {*} arr 已排好的数组
 * @param {*} key 想要查找的值
 */
function binary_search(arr, key) {
    var low = 0,
        high = arr.length - 1;

    while (low <= high) {
        var mid = parseInt((high + low) / 2);
        if (key == arr[mid]) {
            return mid;
        } else if (key > arr[mid]) {
            low = mid + 1;
        } else if (key < arr[mid]) {
            high = mid - 1;
        } else {
            return -1;
        }
    }
}

let array = [1,2,3,13,7,34,52,8,2,4,3]
console.log(binary_search(array,13))