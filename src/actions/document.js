import axios from 'axios';

export function SAVE_A_DOC(doc) {
  return {
    type:'SAVE_NEW_DOC',
    doc
  }
}

export function saveDoc(doc) {
  return dispatch => {
     //instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
     return axios.post('/documents', doc)
      .then((res) => {
        console.log('document created');
      })
  }
}
