export const addToDo = (data) => {
    return{
        type : 'ADD_TODO',
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}
export const removeToDo = (id) => {
    return{
        type : 'REMOVE_TODO',
        payload : id
    }
}
