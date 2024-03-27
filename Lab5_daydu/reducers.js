
const initState = {
    dem: 0
}

const demReducer = (state = initState, action) => {
    switch(action.type) // kiem tra hanh dong nao duoc goi
    { 
        case 'TANG':
            return {...state, dem: state.dem+1};
        case 'GIAM':
            return {...state, dem: state.dem-1};
        default:
            return state; 
    }
}

export default demReducer;
