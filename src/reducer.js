export  const initialState ={
    term: null
};

export const actionTypes={
    SET_SEARCH_TERM:"SET_SEARCH_TERM",
};

//reducer listen to any dispatch list
const reducer =(state, action) => {
    console.log(action);

    switch (action.type){
        case actionTypes.SET_SEARCH_TERM: //nqs e dim se ku ndodhet
            return{
                ...state,
                term: action.term,//ndryshon termin

            };//kthen si duket data layer

            default: 
            return state;
    }
};
export default reducer;

