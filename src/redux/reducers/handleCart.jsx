const cart = []
const initialState = {
    data: [],
    filter: [],
    loading: false,
    sortByPriceAsc: true,
    activeCategory: 'All',
    categories: [],
  };

export const handleCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            //check if product is already exist or not 
            const existProduct = state.find((x) => x.id === product.id)
            if (existProduct) {
                return state.map((x) =>
                    //quantity increase
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                )
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }

        case "REMOVEITEM":
            const exist1 = state.find((x) => x.id === product.id)
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);

            }
            else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                )
            }

        case "INCREASE_QUANTITY":
            return state.map((x) =>
                x.id === product.id ? { ...x, qty: Math.min(x.qty + 1, 10) } : x
            );

        case "DECREASE_QUANTITY":
            return state.map((x) =>
                x.id === product.id ? { ...x, qty: Math.max(x.qty - 1, 1) } : x
            );

        default:
            return state

    }
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return { ...state, data: action.payload, filter: action.payload };
      case 'SET_LOADING':
        return { ...state, loading: action.payload };
      case 'SET_SORT_ASC':
        return { ...state, sortByPriceAsc: true };
      case 'SET_SORT_DESC':
        return { ...state, sortByPriceAsc: false };
      case 'SET_ACTIVE_CATEGORY':
        return { ...state, activeCategory: action.payload };
      case 'SET_CATEGORIES':
        return { ...state, categories: action.payload };
      default:
        return state;
    }
  };
  
  export default productsReducer;