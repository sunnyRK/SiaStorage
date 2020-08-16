import React, { Component } from 'react';

import Vidoes from './Videos';
import { getSiaInstance } from '../../../../config/contractinstance';
import web3 from '../../../../config/web3';

class VidoesContainer extends Component {
  state = { 
    token: null, 
    info: null, 
    addrsList: [],
    selectedFile: null,
    account: '',
    siaHasharray: [],
    vidoesLoading: false,
  }

  componentDidMount = async () => {
    this.setState({ vidoesLoading: true });
    const siaHasharray = [];
    const accounts = await web3.eth.getAccounts();
    const hashLength = await getSiaInstance().methods.getSiaHashLength(accounts[0]).call();
    for (var i=0; i<hashLength; i++) {
      const hash = await getSiaInstance().methods.getSiaHashByIndex(i, accounts[0]).call();
      const filename = await getSiaInstance().methods.getFileName(accounts[0], hash).call();
      const detailsObj = {
        hash: hash,
        filename: filename,
      }
      siaHasharray.push(detailsObj);
    }
    this.setState({
      siaHasharray, vidoesLoading: false,
    });
  };

  render() {
    return (
      <Vidoes 
        siaHasharray={this.state.siaHasharray}
        vidoesLoading={this.state.vidoesLoading}
      />
    );
  }
}

export default VidoesContainer;
