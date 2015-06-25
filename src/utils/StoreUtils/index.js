/**
 * Adapted from:
 * https://github.com/gaearon/flux-react-router-example
 */
 
import { EventEmitter } from 'events'
import assign from 'react/lib/Object.assign'

const CHANGE_EVENT = 'change'

export function createStore(spec) {
  var store = assign({
    emitChange() {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  }, spec, EventEmitter.prototype)


  for (let key in store) {
    if (store.hasOwnProperty(key) && _isFunction(store[key])) {
       store[key] = store[key].bind(store)
    }
  }

  store.setMaxListeners(0)
  return store
}

function _isFunction(obj) {
  var getType = {}
  return obj && getType.toString.call(obj) === '[object Function]'
}

export function isInBag(bag, id, fields) {
  var item = bag[id];
  if (!bag[id]) {
    return false;
  }

  if (fields) {
    return fields.every(field => item.hasOwnProperty(field));
  } else {
    return true;
  }
}

export function mergeIntoBag(bag, entities, transform) {
  if (!transform) {
    transform = (x) => x;
  }

  for (var key in entities) {
    if (!entities.hasOwnProperty(key)) {
      continue;
    }

    if (!bag.hasOwnProperty(key)) {
      bag[key] = transform(entities[key]);
    } else if (!shallowEqual(bag[key], entities[key])) {
      bag[key] = transform(assign({}, bag[key], entities[key]));
    }
  }
}


function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }
  var key;
  // Test for A's keys different from B.
  for (key in objA) {
    if (objA.hasOwnProperty(key) &&
        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
      return false;
    }
  }
  // Test for B'a keys missing from A.
  for (key in objB) {
    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}