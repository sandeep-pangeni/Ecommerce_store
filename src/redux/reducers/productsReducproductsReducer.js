import { ActionTypes } from "../contants/action-types"

const initialState = {
    products: [{
        id: 1,
        title: "Sandeep",
        category: "programmer"
    },
    ],
};

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};
