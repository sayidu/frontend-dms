import React from 'react';
//  import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import Document from './document';
import ViewDocs from './viewDocs';
import { Modal, Button, FloatingActionButton } from 'react-materialize';

class Dashboard extends React.Component {
 constructor(props){
    super(props)
    this.state = {
       sidebarOpen: false,
       sidebarDocked: false,
       userName: localStorage.getItem('userName'),
       selectView: 'viewDoc'
    };
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  componentWillMount() {
    var mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  render () {
    const sidebarContent=
    <div id="sidebar">
      <h2> Dashboard </h2>
      <h5><center>{this.state.userName}</center></h5>
       <h5><center>Edit Profile</center></h5>
    </div>;
    return (
      <div className="container">
         <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
               <ViewDocs/>
              <Modal
                header='New Doc'
                trigger={
                  <Button floating large className='red' waves='light'  style={{position: 'fixed', bottom: 20, right: 20}} zdepth={3} icon='add' />
                }>
               <Document />
              </Modal>;
         </Sidebar>
      </div>
    );
  }
}


export default Dashboard;
