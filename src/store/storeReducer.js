const types = { 
    'SUMA': 'suma',
    'RESTA':'resta',
    'MULTIPLICAION':'multiplicacion',
    'DIVISION':'division',
    'RESULTADO': 'resultado',
    'NUM1': 'num1',
    'NUM2': 'num2'
}

const initialStore = {
    num1: 0,
    num2: 0,
    ope: '+',
    res: 0
}

const storeReducer = ((state, action)=>{
    switch (action.type)    
    {
        case types.SUMA:
            return {
                ...state,
                ope: '+',
                res: (parseInt(state.num1) + parseInt(state.num2))
            }
        
        case types.RESTA:
            return {
                ...state,
                ope: '-',
                res: (parseInt(state.num1) - parseInt(state.num2))
            }
        case types.MULTIPLICAION:
            return {
                ...state,
                ope: 'X',
                res: (parseInt(state.num1) * parseInt(state.num2))
            }
        case types.DIVISION:
            return {
                ...state,
                ope: '/',
                res: (parseInt(state.num1) / parseInt(state.num2))
            }
        case types.NUM1:
            return {
                ...state,
                num1: action.payload.num1,
                res: parseInt(parseInt(action.payload.num1) + parseInt((state.num2) === undefined?0:(state.num2)))
            }
        case types.NUM2:
            if (state.ope === '+')
                return {
                    ...state,
                    num2: action.payload.num2,
                    res: parseInt(parseInt((state.num1)=== undefined?0:(state.num1)) + parseInt((action.payload.num2) === undefined?0:(action.payload.num2)))
                }
            if (state.ope === '-')
                return {
                    ...state,
                    num2: action.payload.num2,
                    res: parseInt(parseInt((state.num1)=== undefined?0:(state.num1)) - parseInt((action.payload.num2) === undefined?0:(action.payload.num2)))
                }
            if (state.ope === 'x')
                return {
                    ...state,
                    num2: action.payload.num2,
                    res: parseInt(parseInt((state.num1)=== undefined?0:(state.num1)) * parseInt((action.payload.num2) === undefined?0:(action.payload.num2)))
                }
            if (state.ope === '/')
                return {
                    ...state,
                    num2: action.payload.num2,
                    res: parseInt(parseInt((state.num1)=== undefined?0:(state.num1)) / parseInt((action.payload.num2) === undefined?0:(action.payload.num2)))
                }
        
        default:
            return state;
    }
});
export { initialStore, types }

export default storeReducer;