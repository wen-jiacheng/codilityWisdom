/*

题目：
数组 A 由 N 个整数组成。
写一个程序返回 A 中没有出现的最小正整数。

例如：
A = [1, 3, 6, 4, 1, 2] 应返回 5
A = [1, 2, 3]          应该返回 4
A = [-1, -3]           应该返回 1

*/

function solution(A) {
	for ( let i = 1; i <= A.length + 1; i++ ) {
		if (A.indexOf(i) === -1) {
			return i;
		}
	}
}

/*
这个方案正确率 100 但是速度只有 20
看起来主要是 indexOf 的查询耗费时间，并且我们并没有忽略数组中可能存在的负数，导致性能问题。
所以根据这两点我们改进一下。
*/

function solution(A) {
	const lengthA = A.length;
	let oneIndex = -1;

	A.sort((a, b) => {
		return a - b;
	});

	oneIndex = A.indexOf(1);

	if ( oneIndex === -1 ) {
		return 1;
	}

	for (let i = oneIndex; i < lengthA; i++) {
		const next = A[i + 1];
		if (next !== A[i] && next !== A[i] + 1) {
			return A[i] + 1
		}
	}

	return A[lengthA - 1] + 1;
}