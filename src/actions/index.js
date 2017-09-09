import fetch from 'isomorphic-fetch'
import Logodrop from '../common/config.js'
import { visitor } from '../ga'

const app = window.app;

export const requestSearchLogos = () => {
	return {
		type: 'REQUEST_SEARCH_LOGOS'
	}
};

export const receiveSearchLogos = (results, q) => {
	return {
		type: 'RECEIVE_SEARCH_LOGOS',
		results,
		q
	}
};

export const clearSearchLogos = () => {
	return {
		type: 'CLEAR_SEARCH_LOGOS'
	}
};

export const insertLogo = (id) => {
	return {
		type: 'INSERT_LOGO',
		id
	}
};

export const logoLoaded = (id) => {
	return {
		type: 'LOGO_LOADED',
		id
	}
};

export const handleError = (error) => {
	return {
		type: 'HANDLE_ERROR',
		error
	}
}

// returns true if semver string versionA is greater than versionB, and false otherwise
const versionCompare = (versionA, versionB) => {
	var versionSegmentsA = versionA.split('.')
	var versionSegmentsB = versionB.split('.')
	for (var i = 0; i < 3; i++) {
		var versionSegmentA = parseInt(versionSegmentsA[i], 10)
		var versionSegmentB = parseInt(versionSegmentsB[i], 10)
		if (versionSegmentA > versionSegmentB) return true
		if (versionSegmentB > versionSegmentA) return false
		if (!isNaN(versionSegmentA) && isNaN(versionSegmentB)) return true
		if (isNaN(versionSegmentA) && !isNaN(versionSegmentB)) return false
	}
	return false
}

export const checkPluginUpdate = () => {

	return function (dispatch, getState) {

		return fetch(app.storage.get('manifest') || Logodrop.config.MANIFEST)
			.then((response) => response.json())
			.then((responseJson) => {
				var currentVersion = app.storage.get('currentVersion') || '0.0.0'
				var liveVersion = responseJson.version

				if(versionCompare(liveVersion, currentVersion)) {
					app.showMessage('New version of Plugin is available. Update Now!')
					console.log("currentVersion is " + liveVersion + ". Plugin version is "+ currentVersion)
				}

			})
			.catch((error) => {
				console.log(error)
			})

	}

}

export const checkIfStateUpdateRequired = (lastDate, duration = 3) => {
	var date1 = new Date(lastDate)
	var date2 = new Date()
	var timeDiff = Math.abs(date2.getTime() - date1.getTime())
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
	
	return diffDays > duration
}


export const fetchLogos = (q, page=0) => {

	return function (dispatch) {

		dispatch(clearSearchLogos())
		dispatch(requestSearchLogos())

		let url = new URL(Logodrop.config.API_URL + '/v1/icons/search')
		let params = {
	        'q': q,
	        'price': 'free',
	        'categories': 'social-media-logos',
	        'access_token': Logodrop.config.ACCESS_TOKEN
		}

		if(q === "logo") {
			params = {
				...params,
				sort: 'popularity'
			}
		}

		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

		let headers = new Headers({
				'accept' : 'application/vnd.api.v1+json'
			})
		var request = new Request(url, {
			headers: headers
		});

		visitor.event('search', q).send()

		return fetch(request)
			.then((response) => response.json())
			.then((responseJson) => {
				dispatch(receiveSearchLogos(responseJson, q))
			})
			.catch((error) => {
				dispatch(handleError(error))
			});
	}

};

export const loadMoreLogos = (nextPage) => {

	return function (dispatch, getState) {
		
		dispatch(requestSearchLogos())

		let url = new URL(nextPage)

		let headers = new Headers({
				'accept' : 'application/vnd.api.v1+json'
			})
		var request = new Request(url, {
			headers: headers
		})

		visitor.event('search', 'loadmore').send()

		return fetch(request)
			.then((response) => response.json())
			.then((responseJson) => {
				dispatch(receiveSearchLogos(responseJson))
			})
			.catch((error) => {
				console.error(error);
			});
	}
};

export const insertDragStart = (id, name) => {
	visitor.event('Drag', name, id).send()
};

export const insertLogoStart = (id, name) => {
	visitor.event('Insert', name, id).send()
};