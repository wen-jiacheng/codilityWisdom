/*

题目：
一个由 n 个整数组成的数组 A，索引从 0 开始。
数组的旋转意思是将数组中的每一个元素向右移动 1 个位置，并且数组的最后一个元素也被移动到了第一个位置。
现在给出一个数组 A 和一个数值 K，将数组 A 旋转 K 位。

例如：
A = [3, 8, 9, 7, 6]; K = 3
那么程序应该返回 [9, 7, 6, 3, 8]

*/

/*
关键在于知道实际的旋转位数，A.length = 5; K = 11, 那么此时实际的旋转位数只有 1
*/

function solution(A, K) {
	const arrLength = A.length;

	let whirl = 0;
	let left = [];
	let right = [];

	if ( arrLength === K ) {
		return A;
	} else if ( arrLength > K) {
		whirl = K;
	} else if ( arrLength < K ) {
		whirl = K % arrLength;
	}

	left = A.slice(arrLength - whirl);
	right = A.slice(0, arrLength - whirl);

	return left.concat(right);
}