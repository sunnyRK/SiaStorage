import { toast } from 'react-toastify';

import Info from './Info';
import web3 from '../../../../config/web3';
import { uploadContent } from '../../utils';
import { getSiaInstance } from '../../../../config/contractinstance';

class InfoContainer extends React.Component {
  state = {
    accounts: [],
    infoLoading: false,
    selectedFiles: [],
    isDropZoneHasError: false,
    isProcessingFile: false,
  };

  async componentDidMount() {
    this.setState({ infoLoading: true });
    const accounts = await web3.eth.getAccounts();
    this.setState({ accounts, infoLoading: false });
  }

  handleChange = (fieldName, files) => {
    if (files) {
      this.setState({
        selectedFiles: files,
        isDropZoneHasError: false,
      });
    }
  }

  uploadContent = async (e) => {
    e.preventDefault();
    try {
      const { accounts } = this.state;
      const files = this.state.selectedFiles;
      if (files.length === 0) {
        this.setState({ isDropZoneHasError: true });
      } else {
        const fileName = this.state.selectedFiles[0].name;
        this.setState({ isProcessingFile: true });
        const { skylink } = await uploadContent(files[0]);
        await getSiaInstance().methods.UploadNewSiaHash(skylink, fileName).send({
          from: accounts[0],
        });
        this.setState({
          isProcessingFile: false,
          selectedFiles: [],
        });
        toast.success('Video Uploaded Successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      this.setState({
        selectedFiles: [],
        isProcessingFile: false,
      });
    }
  }

  render() {
    const { infoLoading, accounts } = this.state;
    return (
      <Info
        infoLoading={infoLoading}
        metamaskAddress={accounts.length > 0 && accounts[0]}
        onDropFiles={this.handleChange}
        uploadContent={this.uploadContent}
        isDropZoneHasError={this.state.isDropZoneHasError}
        selectedFiles={this.state.selectedFiles}
        uploadLoading={this.state.isProcessingFile}
      />
    )
  }
}

export default InfoContainer;
