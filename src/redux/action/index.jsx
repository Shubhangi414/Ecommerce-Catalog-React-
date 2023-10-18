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
  
  export const setLoading = (loading) => ({
    type: 'SET_LOADING',
    payload: loading,
  });
  
  export const setSortAsc = () => ({
    type: 'SET_SORT_ASC',
  });
  
  export const setSortDesc = () => ({
    type: 'SET_SORT_DESC',
  });
  
  export const setActiveCategory = (category) => ({
    type: 'SET_ACTIVE_CATEGORY',
    payload: category,
  });
  
  export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories,
  });