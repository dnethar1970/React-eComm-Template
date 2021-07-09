import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true
};
//Dont forget to add the cartreducer to the root reducer
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
};

export default cartReducer;