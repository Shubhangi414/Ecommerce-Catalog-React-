//for add item to cart

export const addItem = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// for remove item from cart
export const removeItem= (product) =>{
    return {
        type:"REMOVEITEM",
        payload:product
    }
}

export const increaseQuantity = (product) => {
    return {
        type: "INCREASE_QUANTITY",
        payload: product,
    };
}

export const decreaseQuantity = (product) => {
    return {
        type: "DECREASE_QUANTITY",
        payload: product,
    };
}


export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });
  
  export const setFilter = (filteredProducts, category) => ({
    type: 'SET_FILTER',
    payload: filteredProducts,
    category,
  });
  
  export const toggleSort = (sortedProducts) => ({
    type: 'TOGGLE_SORT',
    payload: sortedProducts,
  });