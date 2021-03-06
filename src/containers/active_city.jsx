import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class ActiveCity extends Component {
  render() {

    return(
      <div className="active-city" >
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} alt=""/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}


export default connect(mapStateToProps, null)(ActiveCity);
