import React from 'react'

import { insertDragStart } from '../actions'

const Logo = ({ id, name, svg_file, colors, loaded, onImageLoaded, onClick }) => (
	<a
		href="#"
		className={"logoItem img-thumbnail " + ( loaded ? "logoLoaded":"" ) }
		onClick={onClick}
		style={{
			backgroundColor: colors.length && colors[0].color
		}}
		>
		<img
			className="img-responsive"
			src={svg_file}
			title={name}
			alt={name}
			onLoad={onImageLoaded}
			onDragStart={e => {
				insertDragStart(id, name)
			}}
		/>
	</a>
)

export default Logo