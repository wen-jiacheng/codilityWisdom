/*

题目：
一只小青蛙想要到达河的另一边。青蛙最初位于河岸（位置0），想要到达对岸（位置X + 1）
河面上每过一秒钟会落下一片树叶，数组 A 中的元素代表树叶的位置，索引代表时间。
写一个程序找到青蛙最早可以过河的时间。

例如：
X = 5;
A = [1, 3, 1, 4, 2, 3, 5, 4];
在第六秒的时候，叶子覆盖了河上所有的位置，所以程序应该返回 6

*/


function solution(X, A) {
	const river = new Array(X).fill(0);
	
	if ( Math.max.apply(Math, A) < X ) {
		return -1;
	}

	for (let i = 0; i < A.length; i++) {
		river[A[i] - 1] = 1;
		if ( river.indexOf(0) === -1 ) {
			return i;
		}
	}

	return -1;
}

/*
以上方法正确率 100，但是速度只有60。在 X = 30000 和 A 极大的时候没有通过。

我们可以试试完善一个判断条件，并且增加一个计数器，减少在数组中的查询次数。
*/

function solution(X, A) {
	const river = new Array(X);
	let newWhere = 0;
	
	if ( Math.max.apply(Math, A) < X ) {
		return -1;
	}

	if ( A.length < X ) {
		return -1;
	}

	for (let i = 0; i < A.length; i++) {
		if ( !river[A[i] - 1] ) {
			river[A[i] - 1] = 1;
			newWhere += 1;
		}
		if (newWhere === X) {
			return i;
		}
	}

	return -1;
}

/*
通过测试
*/