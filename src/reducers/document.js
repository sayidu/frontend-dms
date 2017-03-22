export default function doc(state={}, action){
  switch(action.type) {
    case 'SAVE_NEW_DOC':
      return Object.assign({}, state, action.docs);
    case 'VIEW_DOCS':
      return Object.assign({}, state, action.docs);
    default:
     return state;
  }
}
