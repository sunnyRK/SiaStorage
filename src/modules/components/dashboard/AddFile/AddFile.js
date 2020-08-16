import React from 'react';
import dynamic from 'next/dynamic';
import BlockUI from 'react-block-ui';
import GoogleLoader from '../../../shared/GoogleLoader';

const AddFile = () => (
  <BlockUI
    tag="div"
    blocking={uploadLoading}
    loader={<GoogleLoader height={50} width={50} />}
    className="full-screen"
  >
    <div className="add-file-dialog">
      <div>Add File Button</div>
    </div>
  </BlockUI>
);

export default AddFile;
