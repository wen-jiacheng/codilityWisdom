/*

题目：
给定三个整数 A, B, K。
写一个程序，返回在 A...B 之间可以被 K 整除的整数个数。

A <= B  取值范围 0...2,000,000,000
K 取值范围 1...2,000,000,000

例如：
A = 6; B = 11; K = 2; 那么程序应该返回 3
在 6...11 之间有三个整数是可以被 2 整除的。

*/

function solution(A, B, K) {
	let num = 0;

	if (K > B) {
		return 0;
	}
	if (K === B) {
		return 1;
	}
	if (K <= A) {
		for (let i = A; i <= B; i++) {
			i % K === 0 && (num += 1);
		}
	}
	if (K > A) {
		for (let i = K; i <= B; i++) {
			i % K === 0 && (num += 1);
		}
	}

	return num;
}

/*
	Finally！！
	几乎一夜未眠后，脑子混沌的我。
	写出了史上最低分。正确率 50 速度 0  总分 25

	仔细看题目，取值范围已经到了 20亿 单纯遍历就算结果正确，速度也不可能达标。
	其实我们只需要求出在 A...B 之间有多少个 K 即可得到答案。
*/

function solution(A, B, K) {
	const ak = Math.floor(( A - 1) / K );
	const bk = Math.floor(B / K);

	return bk - ak;
}

/*
	要注意 0 也是可以整除 K 的。
*/