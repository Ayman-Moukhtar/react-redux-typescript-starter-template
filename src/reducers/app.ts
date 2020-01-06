import { AnyAction, isType } from "typescript-fsa";

import { changeTitleAction, getDataAction } from "../actions";
import { TAppState } from "../types";

const initialState: TAppState = {
    title: 'This is App Module',
    data: []
};

const appReducer = (state: TAppState = initialState, action: AnyAction): TAppState => {
    
    if (isType(action, changeTitleAction)) {
        return {
            ...state,
            title: action.payload
        };
    }

    if (isType(action, getDataAction.started)) {
        // Do data loading ui work if needed.
        return {
            ...state
        };
    }

    if (isType(action, getDataAction.done)) {
        return {
            ...state,
            data: action.payload.result
        };
    }

    if (isType(action, getDataAction.failed)) {
        // Do error handling work if needed
        return {
            ...state
        };
    }

    return state;
};

export {
    appReducer
};