import { combineReducers } from 'redux'
import logos from './logos'
import visibilityFilter from './visibilityFilter'

const sketchLogosApp = combineReducers({
	logos,
	visibilityFilter
})

export default sketchLogosApp