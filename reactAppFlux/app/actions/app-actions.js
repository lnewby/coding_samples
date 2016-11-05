import constants from '../constants/app-constants';
import dispatcher from '../dispatcher/app-dispatcher';

export const incrementActions = {
  incrementCount: (inc) => {
    console.log('INCREMENT action dipatched');
    dispatcher.dispatch({
      actionType: constants.INCREMENT,
      inc
    });
  }
}
