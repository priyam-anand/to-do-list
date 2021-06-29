export const addEvent = (value) => {
    return{
        type : 'ADD_EVENT',
        payload : value
    }
};

export const removeEvent = (id) => {
    return{
        type : 'REMOVE_EVENT',
        payload : id
    }
};