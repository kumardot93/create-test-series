const Test = (state = { tests: [] }, action) => {
	state = { ...state };
	switch (action.type) {
		case 'updateTestData':
			state.tests = [ ...action.payload ];
			break;
		default:
			break;
	}
	return state;
};

export default Test;
