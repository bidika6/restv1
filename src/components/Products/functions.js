import React, {useState} from 'react';



//these hooks and onAdd() should probably be in App.js insead of this file.
//this hook starts the total with 0 and updates the state of total value as items are being added to cart
const [total, setTotal] = useState(0);

//this hook updates items in the cart
const [itemsInCart, setItemsInCart] = useState([]);

/*this is a function that checks for similar exisitng item in cart and adds on to the cart. If similar item is already found
in the cart, then quanity is incrementally increased.
If similar item with same id is not found in the cart then quantity is set to 1.

 */
const onAdd = (product) => {
    const existingProduct = itemsInCart.find(elem => elem.id === product.id);
    if (existingProduct) {
        setItemsInCart(itemsInCart.map(elem => elem.id === product.id ? {...existingProduct, qty : existingProduct.qty + 1} : elem))
    }
    else {
        setItemsInCart([...itemsInCart, {...product, qty : 1}]);
    }

}
