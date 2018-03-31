import React from "react";

export default function reducer(state = {}, action) {
    if (action.type == "PRODUCT_LIST") {
        return {
            ...state,
            productList: action.productList
        };
    }

    if (action.type == "PRODUCT") {
        return {
            ...state,
            product: action.product
        };
    }
    return state;
}
