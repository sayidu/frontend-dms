import React from 'react';
import { connect } from 'react-redux';
import TinyMCE from 'react-tinymce';
// import { createUser } from '../actions/document';
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
    }
  }

  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createUser(this.state);
  }

  render () {
    return (
        <form onSubmit={this.handleSubmit}>
              <div className="input-field col s10">
                <div style={STYLES.container}>
                  <TinyMCE
                      content="<p>This is the initial content of the editor</p>"
                      content_style="div {margin: 10px; border: 5px solid red; padding: 3px}"
                      config={{
                        height: 900,
                        menubar: false,
                        plugins: 'link image code',
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                      }}
                      onChange={this.handleEditorChange}
                  />
                </div>
                  <p>
                      <input type="submit" value="Save" className="waves-effect waves-light btn" />
                 </p>
              </div>
         </form>
    );
  }
}

export default Document;
