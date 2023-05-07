import { createStore, combineReducers } from 'redux';

// Define the initial state
const initialState = {
  count: 0,
  propertyData : [
    {
        id: 1,
        address: "Lahore",
        postalcode: "54770",
        propertytype: "City",
        rooms: "2",
        area: "8000"
    },
    {
        id: 2,
        address: "Islamabad",
        postalcode: "54670",
        propertytype: "City",
        rooms: "4",
        area: "7000"
    },
    {
        id: 3,
        address: "Karachi",
        postalcode: "54440",
        propertytype: "City",
        rooms: "8",
        area: "12000"
    },
    {
        id: 4,
        address: "Faisalabad",
        postalcode: "54660",
        propertytype: "City",
        rooms: "8",
        area: "5000"
    },
    {
        id: 5,
        address: "Rawalpindi",
        postalcode: "53230",
        propertytype: "City",
        rooms: "9",
        area: "6000"
    }
]
};

 

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
}


function reducer2(state = initialState, action) {
    switch (action.type) {
        case 'PROPERTY':
          return {
            ...state,
            data: state.propertyData
          };
        default:
          return state;
      }
}

const rootReducer = combineReducers({
    reducer,
    reducer2
})


// Create the store
const store = createStore(rootReducer);

export default store;