var arr = [],
      fMax,
      fMin,
      fAvg
  function getMax(arr) {
    var arrLen = arr.length,
        maxEl = arr[0];
    for (var i = 0; i < arrLen; i++) {
      if (maxEl < arr[i]) {
        maxEl = arr[i];
      }
    }
    return maxEl;
  }
  function getMin(arr) {
    var arrLen = arr.length,
        minEl = arr[0];
    for (var i = 0; i < arrLen; i++) {
      if (minEl > arr[i]) {
        minEl = arr[i];
      }
    }
    return minEl;
  }
  function getAvg(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
 }
  fMax = getMax(arr);
  fMin = getMin(arr);
  fAvg = getAvg(arr);
  console.log(fMax, fMin, fAvg); 

 
 
