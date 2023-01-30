const mainReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_SEARCH_KEYWORD": {
      const { searchKeyword } = payload;
      return {
        ...state,
        searchKeyword,
      };
    }
    case "START_SEARCHING": {
      return {
        ...state,
        searchingData: true,
      };
    }
    case "STOP_SEARCHING": {
      return {
        ...state,
        searchingData: false,
      };
    }
    case 'SEARCH_FIELD_FOCUS': {
      return {
        ...state,
        searchFieldFocus: true,
      };
    }
    case 'SEARCH_FIELD_BLUR': {
      return {
        ...state,
        searchFieldFocus: false,
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
