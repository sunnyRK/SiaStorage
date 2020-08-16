import BlockUI from 'react-block-ui';
import GoogleLoader from '../../shared/GoogleLoader';
import CustomDropzone from '../../shared/CustomDropzone';
import { Button } from '@material-ui/core';

const Info = ({
  metamaskAddress,
  infoLoading,
  onDropFiles,
  uploadContent,
  isDropZoneHasError,
  selectedFiles,
  uploadLoading,
}) => (
  <div className="info">
    <div className="add-file">
      <BlockUI
        tag="div"
        blocking={uploadLoading}
        loader={<GoogleLoader height={50} width={50} />}
        className="full-screen"
      >
        <form className="add-file-wrapper" onSubmit={uploadContent}>
            <div className="custom-dropzone-wrapper">
              <CustomDropzone
                onDropFiles={onDropFiles}
                name="csvFileUploader"
                dropzoneMessage="Drag and drop video File"
                accept="video/*"
                selectFileButtonLabel="Select file to upload"
              />
            </div>
            {
              isDropZoneHasError &&
              <p className="error">Please Choose At Least One File</p>
            }
            {
              selectedFiles && selectedFiles.length > 0 && (
                <section className="no-of-rows">
                  <p className="table-row">
                    <div className="label">File Names :</div>
                    {
                      selectedFiles.map((selectedfile, index) => (
                        <div className="value">{`${index + 1}. ${selectedfile.name}`}</div>
                      ))
                    }
                  </p>
                </section>
              )
            }
            <div className="upload-content-button">
              <Button
                type="submit"
                className="upload-button"
              >
              Upload
              </Button>
            </div>
        </form>
      </BlockUI>
    </div>
    <div className="account-details card">
      <BlockUI
        tag="div"
        blocking={infoLoading}
        loader={<GoogleLoader height={50} width={50} />}
        className="full-screen"
      >
        <div className="metamask-address details-content">
          <label className="heading">Metamask Address</label>
          <div className="address">{metamaskAddress}</div>
        </div>
      </BlockUI>
    </div>
  </div>
);

export default Info;
