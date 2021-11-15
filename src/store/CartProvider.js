import React, { useReducer } from 'react';

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}
/*name, amount, price, to jest w item*/

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        let updatedItems;

        if (existingCartItemIndex === -1) {
            updatedItems = state.items.concat(action.item);
        } else {
            const clonedArray = [...state.items];
            clonedArray[existingCartItemIndex].amount += action.item.amount;
            updatedItems = clonedArray;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    } else if (action.type === 'REMOVE') {
        return
    }

    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;