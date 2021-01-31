let statistics = {
	redCars: 21,
	blueCars: 45,
	greenCars: 12,
	raceCars: 5,
	blackCars: 40,
	rareCars: 2
}

for (key in statistics) {
	let value = statistics[key];
	if (key[0] === 'r') {
		console.log(value);
	} else if (typeof value === 'number' || typeof value === 'bigint') {
		if (value % 2 === 1) console.log(value);
	}
}
