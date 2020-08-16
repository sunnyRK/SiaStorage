import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import AddFile from './AddFile';

class AddFileDialogContainer extends Component {
  render() {
    return (
      <Dialog
        className="custom-dialog custom-content-style"
        classes={{
          paperScrollPaper: 'paper-scroll-paper'
        }}
        open={this.props.openDialog}
        onEscapeKeyDown={() => this.props.handleState({ isAddFileOpen: false })}
      >
        <DialogTitle className="dialog-title">
          Add File
          <IconButton
            onClick={() => this.props.handleState({ isAddFileOpen: false })}
          >
            <CloseIcon />
          </IconButton>  
        </DialogTitle>
        <DialogContent className="dialog-content">
          <AddFile />
        </DialogContent>
      </Dialog>
    );
  }
}

export default AddFileDialogContainer;
