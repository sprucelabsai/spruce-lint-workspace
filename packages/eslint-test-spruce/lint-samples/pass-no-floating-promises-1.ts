async function returnsPromise() {
	return 'value'
}

async function something() {
	await returnsPromise()
}

export default something
