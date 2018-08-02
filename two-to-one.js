// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters

function longest(s1, s2) {
	var result = [];
	return s1.concat(s2).split("").sort().filter(function(x){
		if (!result.includes(x)) {
			result.push(x);
			return x;
		}
	}).join("");
}

console.log(longest('sdfkadsjfkajsdfkasjdkfjaskdfjaksdjfk', 'jsdhfjasdhfgjk'))