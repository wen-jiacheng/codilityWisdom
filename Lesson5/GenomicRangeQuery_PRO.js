/*

DNA 可以表示为由四种核糖核苷酸 A C G T 组成的字符串。
每个核苷酸对应一个影响因子。该因子是一个整数，A C G T 分别对应 1 2 3 4

DNA 为给出的由 N 个字符组成的非空字符串。S = S[0]S[1]...S[N-1]
P Q 是两个由 M 个整数组成的数组。给出一个 K 值 (0 <= K < M)
要求找到位于  P[K] 和 Q[K] 之间 DNA 序列中所含核苷酸的最小影响因子。

N 范围 [ 1 .. 100000 ]
M 范围 [ 1 ... 50,000 ]
P Q 范围 [ 0 .. N - 1 ]
P[K] <= Q[K]，其中 0 <= K < M
字符串S仅包含大写英文字母A，C，G，T。

例如：
S = CAGCCTA
P = [2, 5, 0];
Q = [4, 5, 6];

K = 0 时，位于 2 4 之间的核苷酸是 G C 其影响因子是 3 2 答案是 2
K = 1 时，位于 5 5 之间的核苷酸是 T 其影响因子是 4 答案是 4
K = 2 时，位于 0 6 之间包含了所有的核苷酸，特别是影响因子为 1 的核苷酸 A 所以答案是 1

*/

function solution(S, P, Q) {
	const answerArr = [];

	P.forEach((item, i) => {
		const newDNA = S.slice(item, Q[i] + 1);
		let newNum = 4;

		if (newDNA.indexOf("A") !== -1){
			newNum = 1;
		} else if (newDNA.indexOf("C") !== -1) {
			newNum = 2;
		} else if (newDNA.indexOf("G") !== -1) {
			newNum = 3;
		}

		answerArr.push(newNum);
	});

	return answerArr;
}

/*
	不是很明白为何这道题是难度题。目前感觉还是挺简单的。一把过。
*/