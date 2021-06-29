const initalState = {
    list : []
}

const todoReducer = (state=initalState,action) => {
    switch(action.type){
        case 'ADD_TODO' : 
            const id = action.payload.id;
            const data = action.payload.data;
            var newList = state.list;
            newList.push({id:id , data:data});
            return {...state, list:newList}
        case 'REMOVE_TODO':
            const delId = action.payload;
            const newList1 = [];
            state.list.forEach((value)=> {
                if(value.id != delId)
                    newList1.push(value);
            })
            return {...state,list:newList1};
        default :
            return state
    }
}
export default todoReducer;