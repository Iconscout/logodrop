import React from 'react'
import { connect } from 'react-redux'

let SearchLogo = ({ dispatch }) => {
	let q

	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				console.log(q.value);
			}}>
				<input type="text"
					ref={node => {
						q=node
					}}
				/>

				<button type="submit">
					Search
				</button>
			</form>
		</div>
	)
}


SearchLogo = connect()(SearchLogo)

export default SearchLogo