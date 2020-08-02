// 选择排序(Selection-sort)是一种简单直观的排序算法。
// 它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
// 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 以此类推，直到所有元素均排序完毕。

//n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。具体算法描述如下：

// <1>.初始状态：无序区为R[1..n]，有序区为空；
// <2>.第i趟排序(i=1,2,3…n-1)开始时，
// 当前有序区和无序区分别为R[1..i-1]和R(i..n）。
// 该趟排序从当前无序区中-选出关键字最小的记录 R[k]，
// 将它与无序区的第1个记录R交换，
// 使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
// <3>.n-1趟结束，数组有序化了。

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    console.time('time consuming of selection sort');
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.timeEnd('time consuming of selection sort');
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort(arr));
//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// time consuming of selection sort: 0.099ms
// [
//    2,  3,  4,  5, 15, 19,
//   26, 27, 36, 38, 44, 46,
//   47, 48, 50
// ]

function selectionSort2(arr){
    var maxIndex;
    console.time("MAX sort")
    for(var i = 0; i < arr.length - 1; i++){
        maxIndex = i
        for(var j = i + 1; j < arr.length; j++){
            if (arr[maxIndex] < arr[j]){
                maxIndex = j;
            }
        }
        var temp;
        temp = arr[i];
        arr[i] = arr[maxIndex]
        arr[maxIndex] = temp
    }
    console.timeEnd("MAX sort")
    return(arr)
    

}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort2(arr))