import React from 'react'

const Logo = ({ name, url, onClick }) => {
	<div>
		<img
			src={url}
			onClick={onClick}
			title={name}
			alt={name}
		/>
	</div>
}

export default Logo