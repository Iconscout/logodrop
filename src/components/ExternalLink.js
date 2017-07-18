import React, { Component } from 'react'

const app = window.app

class ExternalLink extends Component {

	handleExternalLoad(url) {
		app.openURL(url)
	}

	render() {
		let props = this.props

		return (
			<a
				{...props}
				onClick={e=>{
					e.preventDefault()
					this.handleExternalLoad(props.href)
				}}
			>
			</a>
		)
	}
}

export default ExternalLink