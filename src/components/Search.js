import React from 'react'
import { connect } from 'react-redux'
import { fetchLogos } from '../actions'

let SearchLogo = ({ dispatch }) => {
	let q

	return (
		<div>
			<form
				className="form-horizontal"
				id="frmSearch"
				onSubmit={e => {
					e.preventDefault()
					dispatch(fetchLogos(q.value))
				}}
			>
				<div className="input-group">
					<input
						className="form-control"
						type="text"
						ref={node => {
							q=node
						}}
					/>

					<span className="input-group-btn">
						<button
							className="btn btn-primary"
							type="submit"
						>
							Search
						</button>
					</span>
				</div>
			
			</form>
		</div>
	)
}


SearchLogo = connect()(SearchLogo)

export default SearchLogo