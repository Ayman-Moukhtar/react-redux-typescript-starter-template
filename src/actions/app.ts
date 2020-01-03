import actionCreatorFactory from 'typescript-fsa';
import actionIds from './action-ids';

const actionCreator = actionCreatorFactory();

const changeTitleAction = actionCreator<string>(actionIds.APP_CHANGE_TITLE);

export {
    changeTitleAction
};