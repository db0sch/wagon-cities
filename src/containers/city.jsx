import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {

  handleClick = () => {
    this.props.selectCity(this.props.city)
  }

  render() {

    let classes = "list-group-item"
    if (this.props.activeCity === this.props.city) {
      classes += " selected"
    }
    return(
      <div className={classes} onClick={this.handleClick}>
        <span>{this.props.city.name}</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(City);

