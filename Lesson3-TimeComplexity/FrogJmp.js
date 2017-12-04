/*

问题：
一个小青蛙想要到达路的另一端
青蛙目前位于 X 位置，想要到达大于或者等于 Y 的位置，青蛙每次总是跳一个固定的距离 D。
写一个程序，计算出青蛙要跳跃的最小次数。(X Y D为整数。X <= Y)

例如：
X = 10; Y = 85; D = 30
此时程序应该返回 3


*/

function solution(X, Y, D) {

	if ( X === Y ) {
		return 0;
	}
	if ( (Y - X) < D ) {
		return 1;
	}

	return Math.ceil( (Y - X) / D );

}