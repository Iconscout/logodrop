import { connect } from 'react-redux'
import LogoList from '../components/LogoList'
import { loadMoreLogos, logoLoaded, insertLogo, insertLogoStart } from '../actions'

const mapStateToProps = (state) => {
	return {
		results: state.results
	}
}

const mapDispatcherToProps = (dispatch, ownProps) => {
	return {
		onLogoClick: (logo) => {
			dispatch(insertLogo(logo))
		},
		onImageLoaded: (id) => {
			dispatch(logoLoaded(id))
		},
		onLoadMore: (url) => {
			dispatch(loadMoreLogos(url))
		}
	}
}

const VisibleLogos = connect(
	mapStateToProps,
	mapDispatcherToProps
)(LogoList)

export default VisibleLogos