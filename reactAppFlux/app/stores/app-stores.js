import constants from '../constants/app-constants';
import dispatcher from '../dispatcher/app-dispatcher';
import {EventEmitter} from 'events'

let _count = 0;

function getCount() {
  return _count;
}

function incrementCount (incrementer=1) {
  _count = _count + incrementer;
}

export const TodoStore = Object.assign({}, EventEmitter.prototype, {
  getCount,
  emitChange: function () {
    this.emit('CHANGE_EVENT')
  },
  addChangeListener: function (callback) {
    this.on('CHANGE_EVENT', callback)
  },
  removeChangeListener: function (callback) {
    this.removeListner('CHANGE_EVENT', callback)
  }
});

// TODO: register with the dispatcher
dispatcher.register(action => {
    console.log(`inside cb ${action}`);
  switch (action.actionType) {
    case 'INCREMENT':
      incrementCount();
      TodoStore.emitChange();
      break;
    default:

  }
})
