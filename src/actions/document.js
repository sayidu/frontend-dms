import axios from 'axios';


const AUTH_TOKEN = localStorage.getItem('loginToken');

const config = {
  headers: {'Authorization': AUTH_TOKEN}
};

export function saveADoc(doc) {
  return {
    type:'SAVE_NEW_DOC',
    doc
  }
}

export function saveDoc(doc) {
  return dispatch => {
    console.log("Document dispatched", doc, config);
     return axios.post('/documents', doc, config)
      .then((res) => {
        dispatch(saveADoc(doc));
        console.log('db document created');
      })
  }
}
