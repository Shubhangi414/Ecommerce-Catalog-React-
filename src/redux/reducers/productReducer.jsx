const initialState = {
    data: [],
    filter: [],
    loading: false,
    sortByPriceAsc: true,
    activeCategory: 'All',
    categories: [],
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) { 
      case 'SET_PRODUCTS':
        return {
          ...state,
          data: action.payload,
          filter: action.payload,
          loading: false,
          categories: [...new Set(action.payload.map(product => product.category.name))],
        };
        
      case 'SET_FILTER':   
        return {
          ...state,
          filter: action.payload,
          activeCategory: action.category,
        };

      case 'TOGGLE_SORT':
        return {
          ...state,
          filter: action.payload,
          sortByPriceAsc: !state.sortByPriceAsc,
        };

      default:
        return state;
    }   
  };
  
  
export default productsReducer;

const person = {
  name:'sohan',
  designation:'SDE',
  location:{
    location1:'Mohali',
    location2:'Banglore',
    location3:'Gurgaon'
  }
}

console.log(person.location)
console.log(person.location.location2)
console.log(person.location.location3)
console.log(person.location.location1)
console.log(person.name)
console.log(person.designation)


