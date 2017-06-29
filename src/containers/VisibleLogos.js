import { connect } from 'react-redux'
import LogoList from '../components/LogoList'

const mapStateToProps = (state) => {
	return {
		logos: state.logos
	}
}

const mapDispatcherToProps = (dispatch) => {
	return {
		onLogoClick: (id) => {
			console.log("clicked" + id)
		}
	}
}

const VisibleLogos = connect(
	mapStateToProps,
	mapDispatcherToProps
)(LogoList)

export default VisibleLogos