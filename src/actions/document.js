import axios from 'axios';


export function saveADoc(doc) {
  return {
    type:'SAVE_NEW_DOC',
    doc
  }
}

export function saveDoc(doc) {
  return dispatch => {
   return axios.post('/documents', doc)
      .then((res) => {
        dispatch(saveADoc(doc));
      })
  }
}

export function viewDocs(docs) {
  return {
    type:'VIEW_DOCS',
    docs
  }
}

export function viewDocuments() {
  return dispatch => {
     return axios.get('/documents')
      .then((res) => {
          dispatch(viewDocs(res.data.docs));
      })
  }
}
