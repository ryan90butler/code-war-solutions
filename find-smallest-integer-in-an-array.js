class SmallestIntegerFinder {
  findSmallestInt(args) {
 	var smallest = Number.POSITIVE_INFINITY;

	for (var i = 0; i < args.length; i++) {
		if (args[i] < smallest) {
			smallest = args[i];
		}
	}
	return smallest;

  }
}