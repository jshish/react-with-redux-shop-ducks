import {ADD_TO_CART, REMOVE_FROM_CART, SET_DUCKS} from '../constants/ActionTypes';

export function addToCart(duckId) {
  return {
    type: ADD_TO_CART,
    payload: duckId
  }
}

export function removeFromCart(duckId) {
  return {
    type: REMOVE_FROM_CART,
    payload: duckId
  }
}

export function setDucks(ducks) {
  return {
    type: SET_DUCKS,
    payload: ducks
  }
}