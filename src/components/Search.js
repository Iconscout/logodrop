import React from 'react'
import { connect } from 'react-redux'
import { fetchLogos } from '../actions'

let SearchLogo = ({ dispatch }) => {
	let q

	return (
		<header>
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
						placeholder="Search Brand Name, i.e. Facebook, etc."
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
		</header>
	)
}


SearchLogo = connect()(SearchLogo)

export default SearchLogo