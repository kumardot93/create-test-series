import React, { Component } from 'react';
import styles from './css/TestAdd.module.css';

import { connect } from 'react-redux';
import { deleteTest, addTest } from './../../redux/actions/TestSeries.js';

class TestAdd extends Component {
	render() {
		let disp = '';
		disp = this.props.tests.map((data, index) => {
			let indexOfTest = this.props.addedTests.indexOf(data.pk);
			return (
				<button
					key={index}
					className={[ 'form-control text-left m-1', styles.testBtns ].join(' ')}
					id={indexOfTest !== -1 ? styles.active : ''}
					onClick={() =>
						indexOfTest !== -1 ? this.props.deleteTest(indexOfTest) : this.props.addTest(data.pk)}
				>
					{data.fields.title}
					{this.props.addedTests.includes(data.pk) ? (
						<i className="material-icons float-right text-danger">remove</i>
					) : (
						<i className="material-icons float-right text-success">add</i>
					)}
				</button>
			);
		});
		return (
			<div className="flex-fill mb-4 p-2 align-self-stretch" id={styles.testBtnsmain}>
				<h3 className="p-1">Add Tests</h3>
				<hr />
				{disp}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		addedTests: state.TestSeries.fields.tests,
		tests: state.Test.tests
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTest: (pk) => dispatch(addTest(pk)),
		deleteTest: (index) => dispatch(deleteTest(index))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TestAdd);
