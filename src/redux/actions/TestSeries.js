export function updateTestSeriesData(data) {
	return {
		type: 'updateTestSeriesData',
		payload: data
	};
}

export function updateTitle(data) {
	return {
		type: 'updateTitle',
		payload: data
	};
}

export function updateDescription(data) {
	return {
		type: 'updateDescription',
		payload: data
	};
}

export function updateAccessType(data) {
	return {
		type: 'updateAccssType',
		payload: data
	};
}

export function updateAccesKey(data) {
	return {
		type: 'updateAccessKey',
		payload: data
	};
}

export function addTest(pk) {
	return {
		type: 'addTest',
		payload: pk
	};
}

export function deleteTest(index) {
	return {
		type: 'deleteTest',
		payload: index
	};
}
