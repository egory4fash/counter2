export type InitialStateType = {
    min: number,
    max: number,
    error: boolean,
    setMode: boolean,
    displayedValue: number
}

export type ActionType =
    IncreaseCounterACType |
    ResetCounterACType |
    setMaxValueACType |
    setMinValueACType |
    onSetPressHandlerACType |
    setSetModeACType |
    GetFromLocalStorageACType

export type IncreaseCounterACType = ReturnType<typeof increaseCounterAC>
export type ResetCounterACType = ReturnType<typeof resetCounterAC>
export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export type setMinValueACType = ReturnType<typeof setMinValueAC>
export type onSetPressHandlerACType = ReturnType<typeof onSetPressHandlerAC>
export type setSetModeACType = ReturnType<typeof setSetModeAC>
export type GetFromLocalStorageACType = ReturnType<typeof getFromLocalStorageAC>


const initialState:InitialStateType = {
    min: 0,
    max: 3,
    error: false,
    setMode: false,
    displayedValue: 2
}

export const reducer = (state = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "INCREASE-COUNTER" : {
            if (state.displayedValue !== state.max) {
                let newState = {...state}
                newState.displayedValue += 1
                return newState
            }
            return state
        }
        case "RESET-COUNTER": {
            let newState = {...state}
            newState.displayedValue = newState.min
            return newState
        }
        case "SET-MAX-VALUE": {
            let newState = {...state}

            if (action.payload.value <= 0) {
                newState.max = 0
                newState.error = true
            } else if (action.payload.value > state.min) {
                newState.max = action.payload.value
                newState.error = false
            } else {
                newState.max = action.payload.value
                newState.error = true
            }
            return newState
        }
        case "SET-MIN-VALUE": {
            let newState = {...state}
            if (action.payload.value <= 0) {
                newState.min = 0
                if (newState.max === 1) {
                    newState.error = false
                }
            } else if (action.payload.value >= state.max) {
                newState.min = action.payload.value
                newState.error = true
                return newState
            } else {
                newState.min = action.payload.value
                newState.error = false
            }
            return newState
        }
        case "ON-SET-PRESS=HANDLER": {
            let newState = {...state}
            newState.setMode = false
            newState.displayedValue = newState.min
            //LOCALSTORAGE
            return newState
        }
        case "SET-SETMODE": {
            let newState = {...state}
            newState.setMode = action.payload.value
            return newState
        }
        default:
            return state
    }
}

export const increaseCounterAC = () => {
    return {
        type: "INCREASE-COUNTER"
    } as const
}
export const resetCounterAC = () => {
    return {
        type: "RESET-COUNTER"
    } as const
}
export const setMaxValueAC = (value: number) => {
    return {
        type: "SET-MAX-VALUE",
        payload: {value}
    } as const
}
export const setMinValueAC = (value: number) => {
    return {
        type: "SET-MIN-VALUE",
        payload: {value}
    } as const
}
export const onSetPressHandlerAC = () => {
    return {
        type: "ON-SET-PRESS=HANDLER"
    } as const
}
export const setSetModeAC = (value:boolean) => {
    return {
        type: "SET-SETMODE",
        payload: {
            value
        }
    } as const
}
export const getFromLocalStorageAC = (value:InitialStateType) => {
    return {
        type: "GET-FROM-LOCAL-STORAGE",
        payload: {
            value
        }
    } as const
}