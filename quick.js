
var arr = [5,4,6,2,1,3];
//var tmp_arr = [];

quick(arr,0,arr.length-1);

function quick(arr,l,r){

	var left = l;
	var right = r;
	var pivot = arr[Math.ceil((l+r)/2)];
	console.log(pivot);

	while(arr[left] < pivot) {
		left++;
	}
	while(arr[right] > pivot) {
		right--;
	} 

	if(left <= right){

		var temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;

		left++;
		right--;
	}
	
	if(l < right) quick(arr,l,right);
	if(r > left) quick(arr,left,r);
	
}

console.log(arr);
