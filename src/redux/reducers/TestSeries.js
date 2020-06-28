const TestSeries = (state = { fields: { tests: [] } }, action) => {
	state = { ...state };
	switch (action.type) {
		case 'updateTestSeriesData':
			state = { ...action.payload };
			break;
		case 'updateTitle':
			state.fields.title = action.payload;
			break;
		case 'updateDescription':
			state.fields.description = action.payload;
			break;
		case 'updateAccssType':
			state.fields.access = action.payload;
			break;
		case 'updateAccessKey':
			state.fields.accessKey = action.payload;
			break;
		case 'addTest':
			state.fields.tests = [ ...state.fields.tests, action.payload ];
			break;
		case 'deleteTest':
			state.fields.tests = [
				...state.fields.tests.slice(0, action.payload),
				...state.fields.tests.slice(action.payload + 1)
			];
			break;
		default:
			break;
	}
	return state;
};

export default TestSeries;
