import React from 'react';
import { connect } from 'react-redux';
import { viewDocuments } from '../actions/document';
import TinyMCE from 'react-tinymce';
import { Button, FloatingActionButton } from 'react-materialize';

class viewDocs extends React.Component {
  constructor(props) {
    super(props);
    this.props.viewDocuments();
    this.state = {
      docs : {}
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render () {
    const docsLength = this.props.docs;
    const docArr = [];

     if(this.props.docs["0"]) {
       for(let i in docsLength) {
          docArr.push(this.props.docs[i]);
       }
    } else {
       return false;
    }

    return (
      <div className="container">
        <div className="accessButtons left-align">
          <a className="waves-effect waves-light btn" id="mainHeader"> <h2> My Documents </h2></a>
        </div>
        {docArr.map(function(object, i){
            return <p key={i}>
             <Button floating x-small className='red' waves='light' style={{position: 'right', left: 920}} zdepth={3} icon='mode_edit' />
             <Button floating x-small className='red' waves='light' style={{position: 'right', left: 920}}  zdepth={3} icon='delete' />
              <TinyMCE
                      selector= "container"
                      content= {`Title: ${object.title} <hr/> Content: <br/> ${object.content}`}
                      config={{
                        height: 30,
                        width: 50,
                        inline: true,
                        menubar: false,
                        readonly : true
                      }}
                  />
              </p>;
        })}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {docs: state.document};
};



export default connect(mapStatetoProps, { viewDocuments})(viewDocs);
