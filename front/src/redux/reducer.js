import { ADD_FAV, REMOVE_FAV, ALL_PRODUCTS, ADD_CART, REMOVE_CART, ACTIVE_MODAL, DISABLE_MODAL, SET_USER } from "./action-type"

const initialState = {
    myFavorites: [],
    allProducts: [],
    shoppingCart: [],
    isModal: false,
    user: ""

}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FAV:
            return ({
                ...state,
                myFavorites: [...state.myFavorites, action.payload]

            })
        case REMOVE_FAV:
            return ({
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id !== Number(action.payload))
            })
        case ALL_PRODUCTS:
            return ({
                ...state,
                allProducts: action.payload
            })
        case ADD_CART:
            return ({
                ...state,
                shoppingCart: [...state.shoppingCart, action.payload]
            })

        case REMOVE_CART:
            return ({
                ...state,
                shoppingCart: state.shoppingCart.filter((product) => product.id !== Number(action.payload))
            })
        case ACTIVE_MODAL:
            return {
                ...state,
                isModal: action.payload
            }
        case DISABLE_MODAL:
            return {
                ...state,
                isModal: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default reducer