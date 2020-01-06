import { useDispatch, useSelector } from "react-redux"

import { TGlobalState } from "../..";
import { changeTitleAction, getDataAsync } from "../../actions";
import { TAppState } from "../../types";

const useAppState = () => {
    const state = useSelector<TGlobalState, TAppState>(({ appModule }) => appModule);
    const dispatch = useDispatch();

    return {
        ...state,
        changeTitle: (newTitle: string) => dispatch(changeTitleAction(newTitle)),
        getData: () => getDataAsync(dispatch)
    };
};

export {
    useAppState
};