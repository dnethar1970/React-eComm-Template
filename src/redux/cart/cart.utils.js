export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );

 //if existingitem then create new array with quantity updated
 if (existingCartItem) {
     return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
     );
 }
 
  //if item is not found return existing array with object of cartitemtoadd with quantity 1
  return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }];
};