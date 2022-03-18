export default (req) => {
	console.log('i am from api/hello.js')
	return {
		url: req.url
	}
}
