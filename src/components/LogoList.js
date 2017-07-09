import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import Logo from './Logo'
import LogoLoading from './LogoLoading'

import noResults from '../assets/images/no-results.svg'

const LogoList = ({ results, onLogoClick, onImageLoaded, onLoadMore }) => (
	<Scrollbars
		autoHide
		// Hide delay in ms
        autoHideTimeout={1000}
        // Duration for hide animation in ms.
        autoHideDuration={200}
		style={{ width: 390, height: 448 }}
		>
		<div className="resultsContainer">

			{results.logos.length ?
				results.logos.map(logo => 
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
				)
			:
				(!results.loadingState) && <div className="noResultsFound">
					<img src={noResults} alt="No Results Found" width="150" />
					<h1 className="text-center">No Results Found</h1>
					<p>We got your search query. We’ll try to add that logo as soon as possible.</p>
				</div>
			}

			{results.loadingState &&
				<div>
					<LogoLoading />
					<LogoLoading />
					<LogoLoading />
					<LogoLoading />
					<LogoLoading />
				</div>
			}

			{results.nextPage && !results.loadingState &&
				<div className="btnLoadMoreContainer">
					<a
						className="btn btn-primary"
						id="btnLoadMore"
						onClick={e => {
							onLoadMore(results.nextPage)
						}}
					>Load more</a>
				</div>
			}



		</div>
	</Scrollbars>
)

export default LogoList