import { useDispatch, useSelector } from "react-redux"

import { TGlobalState } from "../..";
import { changeTitleAction } from "../../actions";

const useAppState = () => {
    const state = useSelector(({ appModule }: TGlobalState) => appModule);
    const dispatch = useDispatch();

    return {
        ...state,
        changeTitle: (newTitle: string) => dispatch(changeTitleAction(newTitle))
    };
};

export {
    useAppState
};