/*

题目：
一个由 N 个不同整数组成的数组。包含 1 ... [N + 1] 范围内的整数。这意味着其中丢失了一个元素。
写一个函数可以找到丢失的元素。

例如：
A = [2, 3, 1, 5];
那么函数应该返回 4

*/

/*
用 1 ... n + 1 的和减去目前数组 A 的和，得到的差就是答案。
*/


function solution(A) {
	const length = A.length;
	let allTotal = 0;

	if (length === 1 && A[0] !== 1) {
		return 1;
	}

	A.forEach((item) => {
		allTotal += item;
	});

	return (length + 2) * (length + 1) / 2 - allTotal;

}