export default function user(state={}, action){
  switch(action.type) {
    case 'NEW_USER_ADDED':
      return Object.assign({}, state, action.user);
    default:
     return state;
  }
}
