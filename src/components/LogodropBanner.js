import React, { Component } from 'react'
import ExternalLink from './ExternalLink'

const LogodropBanner = () => (
	<div className="logodrop-banner">
		Powered by <ExternalLink href="https://iconscout.com?utm_source=logodrop&utm_medium=sketch">Iconscout API</ExternalLink> <ExternalLink className="btn btn-success btn-xs btn-update" href="https://github.com/Iconscout/logodrop?utm_source=logodrop&utm_medium=sketch">Update Now</ExternalLink>
	</div>
)

export default LogodropBanner;