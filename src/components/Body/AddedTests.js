import React, { Component } from 'react';
import styles from './css/AddedTests.module.css';

import { connect } from 'react-redux';
import { deleteTest } from './../../redux/actions/TestSeries.js';

class AddedTests extends Component {
	render() {
		let disp = [];
		disp = this.props.tests.map((data, index) => {
			let indexOfTest = this.props.AddedTests.indexOf(data.pk);
			if (indexOfTest !== -1)
				return (
					<div className="form-control" key={index}>
						{data.fields.title}
						<i
							className={[ 'material-icons float-right text-danger', styles.delTest ].join(' ')}
							onClick={(ev) => this.props.deleteTest(indexOfTest)}
						>
							remove
						</i>
					</div>
				);
		});
		disp = disp.filter((element) => element);
		if (disp.length === 0)
			disp = (
				<h6>
					No Tests Added.<br /> Add Tests from Add Tests Section
				</h6>
			);
		return (
			<React.Fragment>
				<h4 className="mt-4 ml-2">Tests:</h4>
				<hr />
				{disp}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tests: state.Test.tests,
		AddedTests: state.TestSeries.fields.tests
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteTest: (index) => dispatch(deleteTest(index))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddedTests);
