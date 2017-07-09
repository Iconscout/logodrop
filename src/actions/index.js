import fetch from 'isomorphic-fetch'
import Iconscout from '../common/config.js'

export const requestSearchLogos = () => {
	return {
		type: 'REQUEST_SEARCH_LOGOS'
	}
};

export const receiveSearchLogos = (results) => {
	return {
		type: 'RECEIVE_SEARCH_LOGOS',
		results
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

export const fetchLogos = (q, page=0) => {

	return function (dispatch) {

		dispatch(clearSearchLogos())
		dispatch(requestSearchLogos())

		let url = new URL(Iconscout.config.API_URL + '/v1/icons/search')
		let params = {
	        'q': q,
	        'price': 'free',
	        'categories': 'social-media-logos',
	        'access_token': Iconscout.config.ACCESS_TOKEN
		}

		if(q === "logo") {
			params = {
				...params,
				sortBy: 'popularity'
			}
		}

		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

		let headers = new Headers({
				'accept' : 'application/vnd.api.v1+json'
			})
		var request = new Request(url, {
			headers: headers
		});

		return fetch(request)
			.then((response) => response.json())
			.then((responseJson) => {
				dispatch(receiveSearchLogos(responseJson))
			})
			.catch((error) => {
				dispatch(handleError(error))
			});
	}

};

export const loadMoreLogos = (nextPage) => {

	return function (dispatch) {
		
		dispatch(requestSearchLogos())

		let url = new URL(nextPage)

		let headers = new Headers({
				'accept' : 'application/vnd.api.v1+json'
			})
		var request = new Request(url, {
			headers: headers
		});

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