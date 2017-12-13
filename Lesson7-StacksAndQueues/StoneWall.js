/*

题目：
我们要建造一面石墙。墙面平直，长度为 N，厚度保持不变。但是在不同的地方高度不同。
墙的高度由 N 个正整数组成的数组 H 指定。
H[i] 是从 i 到 i + 1 米的墙的高度。 H[0] 是墙左端的高度，H [N-1] 是墙右端的高度。
墙体由立方体石块砌成（即这些石块都是矩形的）。
我们的任务，是计算建墙要用到的最小石块数。

例如：
	H = [8, 8, 5, 7, 9, 8, 7, 4, 8];
	那么函数应该返回 7。(建造方法在 img 中)

*/


/*
	这道题刚开始读，感觉完全没有任何思路---
*/

function solution(H) {
	const stone = [];
	let base = [];

	H.forEach((item, i) => {
		if (stone.length === 0) {
			stone.push(item);
			base.push(item);
		} else {
			if (item < Math.min.apply(null, base)) {
				base = [item];
				stone.push(item);
			} else if (!base.includes(item)) {
				stone.push(item);
				base.push(item);
			}
		}
	});

	return stone.length;
}

/*
	以上答案 正确率 80 性能---额---
	性能是 0。总分 28---
*/

function solution(H) {
	const stone = [H[0]];
	let num = 1;

	if (H.length === 0) {
		return 0;
	}

	H.forEach((item, i) => {
		while(stone.length > 0 && stone[stone.length - 1] >= item){
			if(item === stone[stone.length - 1]){
				num --;
			}
			stone.pop();
		}

		stone.push(item);
		num ++;
	});

	return num;
}
