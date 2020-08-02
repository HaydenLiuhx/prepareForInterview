// 具体算法描述如下：

// <1>.比较相邻的元素。如果第一个比第二个大，就交换它们两个；
// <2>.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
// <3>.针对所有的元素重复以上的步骤，除了最后一个；
// <4>.重复步骤1~3，直到排序完成。

function bubbleSort(arr) {
    console.time('time consuming of bubble sort');
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.timeEnd('time consuming of bubble sort');
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));
//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// [
//     2,  3,  4,  5, 15, 19,
//     26, 27, 36, 38, 44, 46,
//     47, 48, 50
//   ]

// 改进冒泡排序： 设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。
// 由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。

function bubbleSort2(arr) {
    console.time('time consuming of bubble sort AFTER CHANGING');
    var i = arr.length-1;  //初始时,最后位置保持不变
    while ( i> 0) {
        var pos= 0; //每趟开始时,无记录交换
        for (var j= 0; j< i; j++)
            if (arr[j]> arr[j+1]) {
                pos= j; //记录交换的位置
                var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        i= pos; //为下一趟排序作准备
     }
     console.timeEnd('time consuming of bubble sort AFTER CHANGING');
     return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort2(arr));

//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

// 改进前冒泡排序耗时: 0.088ms
// [
//    2,  3,  4,  5, 15, 19,
//   26, 27, 36, 38, 44, 46,
//   47, 48, 50
// ]
// 改进后冒泡排序耗时: 0.019ms
// [
//    2,  3,  4,  5, 15, 19,
//   26, 27, 36, 38, 44, 46,
//   47, 48, 50
// ]