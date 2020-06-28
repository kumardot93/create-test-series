import React, { Component } from 'react';
import AddedTests from './AddedTests.js';
import styles from './css/About.module.css';

import { connect } from 'react-redux';
import { updateTitle, updateDescription, updateAccessType, updateAccesKey } from '../../redux/actions/TestSeries.js';

class Test extends Component {
	render() {
		return (
			<div className="p-4 flex-fill mb-2" id={styles.testSmain}>
				<h3>Test Series</h3>
				<hr />
				<label>Title:</label>
				<input
					type="text"
					className="form-control "
					value={this.props.testSeries.fields.title}
					onChange={(event) => this.props.updateTitle(event.target.value)}
				/>
				<label className="mt-3">Description:</label>
				<textarea
					className="form-control mb-4"
					id={styles.desc}
					rows="15"
					value={this.props.testSeries.fields.description}
					onChange={(event) => this.props.updateDescription(event.target.value)}
				/>
				<div className="custom-control custom-switch mt-2 d-flex flex-row align-items-center">
					<input
						type="checkbox"
						class="custom-control-input"
						id="switch2"
						checked={this.props.testSeries.fields.access === 1}
						onClick={(ev) => this.props.updateAccessType((this.props.testSeries.fields.access + 1) % 2)} //Change the access b/w 0 and 1
					/>
					<label class="custom-control-label" for="switch2">
						private
					</label>
				</div>
				<div style={{ display: this.props.testSeries.fields.access === 1 ? 'block' : 'none' }}>
					<label styles={{ display: 'block' }}>Access Key:</label>
					<input
						type="text"
						className="form-control w-25 d-inline ml-2"
						value={this.props.testSeries.fields.accessKey}
						onChange={(ev) => this.props.updateAccessKey(ev.target.value)}
					/>
				</div>

				<div className="mt-4">
					<label>Link:</label>
					<input
						className="ml-2 form-control w-50 d-inline"
						value={window.location.origin + '/material/student-test-series/' + this.props.testSeries.pk}
					>
						{/* {window.location.origin + '/material/student-test/' + this.props.test.pk} */}
					</input>
					<button
						className="material-icons ml-2 p-0 btn btn-light"
						onClick={(ev) => {
							let link = ev.target.previousSibling; //Any sigling tag just before this tag in this case input
							link.select();
							link.setSelectionRange(0, 99999);
							document.execCommand('copy'); //Copying link
						}}
					>
						file_copy
					</button>
					<label className="d-block">Share this link with the students</label>
				</div>
				<AddedTests />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		testSeries: state.TestSeries,
		tests: state.Test
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateTitle: (data) => dispatch(updateTitle(data)),
		updateDescription: (data) => dispatch(updateDescription(data)),
		updateAccessType: (data) => dispatch(updateAccessType(data)),
		updateAccessKey: (data) => dispatch(updateAccesKey(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
