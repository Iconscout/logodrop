import React from 'react'
import Logo from './Logo'

const LogoList = ({ logos, onLogoClick }) => {
	<div>
		{logos.map(logo => 
			<Logo 
				key={logo.id}
				{...logo}
				onClick={() => onLogoClick(logo.id)}
			/>
		)}
	</div>
}

export default LogoList