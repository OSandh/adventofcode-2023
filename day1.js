const fs = require('fs');
fs.readFile(__dirname + '/i1.txt', 'utf-8', (err, data) => {
	findCalibration(data);
});

const findCalibration = (data) => {
	const final = data.split`\n`.reduce((sum, row) => {
		const numbers = row.replace(/[^0-9]/g, '');
		return sum + +(numbers?.[0] + numbers?.at(-1));
	}, 0);
	console.log('final sum:', final);
};
