import React from 'react'

const Logo = ({ name, svg_file, colors, loaded, onImageLoaded, onClick }) => (
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
		/>
	</a>
)

export default Logo