import { AnyAction, isType } from "typescript-fsa";
import { changeTitleAction } from "../actions";
import { TAppState } from "../types";

const initialState: TAppState = {
    title: 'Initial Title'
};

const appReducer = (state: TAppState = initialState, action: AnyAction) => {
    if (isType(action, changeTitleAction)) {
        return {
            ...state,
            title: action.payload
        };
    }

    return state;
};

export {
    appReducer,
    initialState as appInitialState
};