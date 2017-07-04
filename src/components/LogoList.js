import React from 'react'
import Logo from './Logo'
import LogoLoading from './LogoLoading'

const LogoList = ({ results, onLogoClick, onImageLoaded, onLoadMore }) => (
	<div className="container-fluid resultsContainer">
		
		<div className="row">
			{results.logos.map(logo => 
				<Logo
					key={logo.id}
					{...logo}
					onClick={(e) => {
						e.preventDefault()
						onLogoClick(logo.id)
					}}
					onImageLoaded={(e) => {
						e.preventDefault()
						onImageLoaded(logo.id)
					}}
				/>
			)}
		</div>

		{results.loadingState &&
			<div className="row">
				<LogoLoading />
				<LogoLoading />
				<LogoLoading />
				<LogoLoading />
				<LogoLoading />
			</div>
		}

		{results.nextPage && !results.loadingState &&
			<a
				className="btn btn-primary btn-block"
				id="btnLoadMore"
				onClick={e => {
					onLoadMore(results.nextPage)
				}}
			>Load more...</a>
		}



	</div>
)

export default LogoList