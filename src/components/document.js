import React from 'react';
import { connect } from 'react-redux';
import TinyMCE from 'react-tinymce';
import { saveDoc } from '../actions/document';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const options = [
	{ value: 'public', label: 'Public' },
	{ value: 'private', label: 'Private' },
  { value: 'role', label: 'Role'}
];

class Document extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      title: '',
      content: '',
      access: 'public',
      ownerId: 0 //Autoassigned via server
    }
  }

  handleEditorChange = (e) => {
    if(e.target.id === "react-tinymce-0") {
       this.setState({title: e.target.getContent()});
    } else {
       this.setState({content: e.target.getContent()});
    }
   }

  accessCtrl = (e) => {
     this.setState({access: e.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveDoc(this.state);
  }

  render () {
    return (
      <div className="container">
       <form className="col s9" onSubmit={this.handleSubmit}>
        Select Option
        <Select
          name="form-field-name"
          value={this.state.access}
          options={options}
          onChange={this.accessCtrl}
        />
                <h1>Title:
                <TinyMCE
                      content= ""
                      config={{
                        height: 30,
                        width: 50,
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
                        width: 650,
                        menubar: true,
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code ',
                      }}
                      onChange={this.handleEditorChange}
                  />
                  <p className="pull-right">
                      <input type="submit" value="Save" className="waves-effect waves-light btn" />
                 </p>
          </form>
        </div>
    );
  }
}


export default connect(null, { saveDoc })(Document);