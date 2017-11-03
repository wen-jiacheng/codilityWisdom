/*

题目：
找出一个整数 N 的二进制形式中 0 连续出现最多的次数并返回。

例如
9 的二进制形式是 1001 那么返回 2。
529 的二进制形式是 1000010001 则返回 4
20 的二进制形式是 10100 则返回 1
15 的二进制形式是 1111 则没有二进制间隙 返回 0

*/

function solution(N) {

	let answer = 0;

	const binaryN = (N >>> 0).toString(2);

	const binaryArr = binaryN.split("1");

	binaryN[binaryN.length - 1] === "0" && binaryArr.pop();

	binaryArr.forEach((item, i) => {
			answer < item.length && (answer = item.length);
	})

	return answer;

}