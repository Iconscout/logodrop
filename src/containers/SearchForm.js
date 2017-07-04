import { connect } from 'react-redux'
import Search from '../components/Search'

const mapStateToProps = (state) => {
	return {
		results: state.results
	}
}


const SearchForm = connect(
	mapStateToProps,
	undefined
)(Search)

export default SearchForm

