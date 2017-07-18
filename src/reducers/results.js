import { fetchLogos, insertLogoStart } from '../actions'
import { visitor } from '../ga'

const appInsertLogo = window.app.insertLogo;
const app = window.app;

const logo = (state = {
	name: null,
	svg_file: null,
	color: null,
	imageLoaded: false
}, action) => {
	switch(action.type) {
		case 'CREATE_LOGO':
			return {
				...state,
				...action.logo
			}
		default:
			return state
	}
}

const logoList = (state = [], action) => {
	switch(action.type) {
		case 'RECEIVE_SEARCH_LOGOS':
			var logos = action.results.data

			return [
				...state,
				...logos
			]
		case 'RECEIVE_LOAD_MORE_LOGOS':
			return [
				...state,
				...logos
			]
		case 'LOAD_MORE':
			return state
		case 'CLEAR_SEARCH_LOGOS':
			var logos = action.results.data

			return [
				...state,
				...logos
			]
		default:
			return state
	}
}

const results = (
	state = {
		q: null,
		logos: [],
		loadingState: false,
		currentPage: 1,
		nextPage: null
	},
	action
) => {
	switch(action.type) {
		case 'REQUEST_SEARCH_LOGOS':
			return {
				...state,
				loadingState: true,
			};
		case 'RECEIVE_SEARCH_LOGOS':
			
			visitor.event('search', action.q, action.results.current_page).send()

			return {
				...state,
				q: action.q,
				nextPage: action.results.next_page_url,
				logos: logoList(state.logos, action),
				currentPage: action.results.current_page,
				loadingState: false,
			}
		case 'CLEAR_SEARCH_LOGOS':
			return {
				...state,
				logos: [],
				loadingState: false
			}

		case 'LOGO_LOADED':
			let logos = state.logos.map((value) => {
				if(value.id === action.id) {
					value.loaded = true
				}
				return value
			});

			return {
				...state,
				logos: logos
			}
		case 'INSERT_LOGO':
			let logo = state.logos.find((value, index) => {
				if(value.id === action.id) {
					return value
				}
			});

			appInsertLogo(logo)
			insertLogoStart(logo.id, logo.name)

			return state

		case 'HANDLE_ERROR':
			app.showError(action.error)
			
			// Return Blank Response
			return {
				...state,
				logos: [],
				loadingState: false
			}
		default:
			return state
	}
}

export default results