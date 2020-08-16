import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BlockUI from 'react-block-ui';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';
import UploadIcon from '@material-ui/icons/CloudUpload';

import GoogleLoader from './GoogleLoader';
import { noop } from '../utils';

const CustomDropzone = ({
  loading, onDropFiles, imageSrc, name, dropzoneMessage,
  multiple, accept, hideUploadButton, selectFileButtonLabel, disabled,
}) => (
  <BlockUI
    tag="div"
    blocking={loading}
    loader={<GoogleLoader height={50} width={50} />}
  >
    <div className={`custom-dropzone ${multiple ? 'custom-dropzone-multiple' : ''}`} disabled={disabled}>
      <Dropzone
        multiple={multiple}
        accept={accept}
        onDrop={files => onDropFiles(name, files)}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="dropzone-content"
          >
            <input {...getInputProps()} className="dropzone-input" />
            <div className="dropzone-indication-area">
              <UploadIcon className="dropzone-upload-icon" />
              <p className="dropzone-upload-text">{dropzoneMessage}</p>
              {
                !hideUploadButton
                && (
                  <Fragment>
                    <p className="dropzone-upload-text or">or</p>
                    <Button
                      variant="contained"
                      color="primary"
                      className="dropzone-button"
                    >
                      {selectFileButtonLabel}
                    </Button>
                  </Fragment>
                )
              }
            </div>
          </div>
        )}
      </Dropzone>
    </div>
  </BlockUI>
);

CustomDropzone.propTypes = {
  requestState: PropTypes.string,
  feedbackId: PropTypes.string,
  onDropFiles: PropTypes.func,
  imageSrc: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  dropzoneMessage: PropTypes.string,
  multiple: PropTypes.bool,
  showPreview: PropTypes.bool,
  accept: PropTypes.string,
  hideUploadButton: PropTypes.bool,
  selectFileButtonLabel: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

CustomDropzone.defaultProps = {
  requestState: '',
  feedbackId: '',
  onDropFiles: noop,
  imageSrc: [],
  name: '',
  dropzoneMessage: 'Upload files',
  multiple: false,
  showPreview: false,
  accept: '',
  hideUploadButton: false,
  selectFileButtonLabel: 'Select files to upload',
  disabled: false,
  loading: false,
};

export default CustomDropzone;
