import { ADD_FAV, REMOVE_FAV, ALL_PRODUCTS, ADD_CART, REMOVE_CART, ACTIVE_MODAL, DISABLE_MODAL, SET_USER } from "./action-type"

export const add_fav = (product) => {
    return {
        type: ADD_FAV,
        payload: product
    }
}

export const remove_fav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const allProducts = (products) => {
    return {
        type: ALL_PRODUCTS,
        payload: products
    }
}

export const add_cart = (product) => {
    return {
        type: ADD_CART,
        payload: product

    }
}
export const remove_cart = (id) => {
    return {
        type: REMOVE_CART,
        payload: id
    }
}

export const active_modal = () => {
    return {
        type: ACTIVE_MODAL,
        payload: true
    }
}
export const disable_modal = () => {
    return {
        type: DISABLE_MODAL,
        payload: false
    }
}
export const set_user = (name_user) => {
    return {
        type: SET_USER,
        payload: name_user
    }
}