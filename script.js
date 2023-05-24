
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0dbf2f9925msh309416e6b692d73p1e1ce4jsnaa2bc28d8b88',
		'X-RapidAPI-Host': 'national-weather-service.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}