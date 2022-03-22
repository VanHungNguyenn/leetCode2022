/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
	const stringX = x.toString()

	for (let i = 0; i < Math.ceil(stringX.length / 2); i++) {
		console.log(stringX[i], stringX[stringX.length - 1 - i])
		if (stringX[i] !== stringX[stringX.length - 1 - i]) {
			return false
		}
	}
	return true
}

console.log(isPalindrome(1200021))
