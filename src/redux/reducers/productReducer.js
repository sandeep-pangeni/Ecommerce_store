import { ActionTypes } from "../contants/action-types"

const initialState = {
    products: [{
        id: 1,
        title: "Sandeep",
        category: "programmer"
    },
    ],
};

export const productReducer = (state, action) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}