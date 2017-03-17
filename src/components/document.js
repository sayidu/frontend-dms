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
       this.setState({title: e.target.getContent({format: 'text'})});
    } else {
       this.setState({content: e.target.getContent({format: 'text'})});
    }
   }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveDoc(this.state);
  }

  render () {
    return (
       <form onSubmit={this.handleSubmit}>
              <div className="input-field col s10">
                <div style={STYLES.container}>
                <h1>Title:
                <TinyMCE
                      content= ""
                      config={{
                        height: 30,
                        width: 100,
                        inline: true,
                        menubar: false
                      }}
                      onChange={this.handleEditorChange}
                  />
                  </h1>
                  <TinyMCE
                      selector= "container"
                      content="<p>This is the initial content of the editor</p>"
                      menubar ="file edit insert view format table tools"
                      config={{
                        theme: "modern",
                        height: 500,
                        width: 1000,
                        menubar: true,
                        // plugins: 'save',
                        // save_enablewhendirty: true,
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | save',
                      }}

                      onChange={this.handleEditorChange}
                  />
                </div>
                  <p className="pull-right">
                      <input type="submit" value="Save" className="waves-effect waves-light btn" />
                 </p>
              </div>
          </form>
    );
  }
}


export default connect(null, { saveDoc })(Document);
