import React, { Component } from 'react';
import styles from './css/Main.module.css';
import About from './About.js';
import TestAdd from './TestAdd.js';
import { extractKey } from './../../SocketManager.js';

import { connect } from 'react-redux';
import { updateTestData } from './../../redux/actions/Test.js';
import { updateTestSeriesData } from './../../redux/actions/TestSeries.js';

//Entry point for the main body
class Main extends Component {
	//fetching and saving the testSeries data
	state = {
		spinner: ''
	};
	fetchData = (key) => {
		//fetches all the test data at once
		fetch(window.base + '/material/api/testS/data/' + key + '/', { credentials: window.cred })
			.then((Response) => Response.json())
			.then((data) => {
				this.props.updateTestData(data.testList);
				this.props.updateTestSeriesData(data.testSeries);
				console.log('fetched data: ', data);
			})
			.catch((error) => alert('Error fetching data: possible reasons unauthorised access aur connection issue '));
	};

	//Fetching data after component has been mounted
	componentDidMount = () => {
		//extracts key from url and fetchs all the test data at once
		let key = extractKey();
		this.fetchData(key);
	};

	save = () => {
		this.setState({ spinner: 'spinner-border spinner-border-sm' });
		let form = new FormData();
		form.append('data', JSON.stringify([ this.props.TestSeries ]));
		fetch(window.base + '/material/api/testS/saveData/', {
			credentials: window.cred,
			method: 'POST',
			body: form
		}).then((Response) => this.setState({ spinner: '' }));
	};

	render() {
		return (
			<div id={styles.main} className="p-1 d-flex pt-2 pb-0 mb-4">
				<About />
				<TestAdd />
				<button id={styles.save} className="form-control btn btn-secondary" onClick={this.save}>
					Save <span class={'ml-2' + ' ' + this.state.spinner} />
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		TestSeries: state.TestSeries
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateTestData: (data) => dispatch(updateTestData(data)), //to store the fetched test data
		updateTestSeriesData: (data) => dispatch(updateTestSeriesData(data)) //to store the fetched data of test series
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
