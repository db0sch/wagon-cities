// TODO: add and export your own actions
import cities from "../data/cities.js"

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}


export function selectCity(city) {
  // debugger
  return {
    type: 'SELECT_CITY',
    payload: city
  }
}
