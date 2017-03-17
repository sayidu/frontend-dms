import React from 'react';
import { connect } from 'react-redux';
import TinyMCE from 'react-tinymce';
import { saveDoc } from '../actions/document';

const STYLES = {
  container: {
    fontFamily: 'Helvetica Neue, sans-serif',
    padding: '0 25px'
  },
  output: {
    border: '1px solid #999',
    borderRadius: 5,
    fontFamily: 'Courier New, monospace',
    padding: 10,
    height: 250,
    overflow: 'auto'
  }
};

class Document extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      title: '',
      content: '',
      access: 'public',
      ownerId: 1
    }
  }

  handleEditorChange = (e) => {
    if(e.target.id === "react-tinymce-0") {
       this.setState({title: e.target.getContent()});
    } else {
       this.setState({content: e.target.getContent()});
    }
   }

  handleSubmit = (e) => {
    event.preventDefault();
    this.props.saveDoc(this.state);
    console.log('Doc was submitted:', e.content);
  }

  render () {
    return (
        <form onSubmit={this.handleSubmit}>
              <div className="input-field col s10">
                <div style={STYLES.container}>
                <TinyMCE
                      content= "<p><b>  TITLE:  </b></p>"
                      config={{
                        selector:'#text',
                        height: 50,
                        width: 1000,
                        inline: true,
                        menubar: false
                      }}
                      onChange={this.handleEditorChange}
                  />
                  <TinyMCE
                      content="<p>This is the initial content of the editor</p>"
                      menubar ="file edit insert view format table tools"
                      config={{
                        selector:'.text',
                        height: 500,
                        width: 1000,
                        menubar: true,
                        plugins: 'link save',
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | save',
                        save_enablewhendirty: true,
                        save_onsavecallback: function () {
                          console.log('Saved');
                        }
                      }}
                     // onSaveContent={this.handleSubmit}
                      onChange={this.handleEditorChange}
                  />
                </div>
              </div>
         </form>
    );
  }
}

export default Document;
