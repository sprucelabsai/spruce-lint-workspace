async function returnsPromise() {
	return 'value'
}

async function something() {
	returnsPromise()
}

export default something
