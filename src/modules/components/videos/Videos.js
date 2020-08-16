import BlockUI from 'react-block-ui';
import GoogleLoader from '../../shared/GoogleLoader';

const Videos = ({ siaHasharray, vidoesLoading }) => (
  <div className="videos card">
    <div className="videos-header">
      <h3>Your Videos</h3>
    </div>
    <BlockUI
      tag="div"
      blocking={vidoesLoading}
      loader={<GoogleLoader height={50} width={50} />}
      className="full-screen"
    >
      <div className="videos-content">
        {
          !vidoesLoading && siaHasharray.length === 0 ? (
              <p className="no-content">You haven't uploaded videos yet</p>
            ) : (
            siaHasharray.map(name => (
              <div className="video-wrapper">
                <video 
                  controls 
                  src={"https://siasky.net/"+name.hash}
                  className="video-player"
                />
                <div className="video-details">
                  <div className="file-name">{name.filename || '-'}</div>
                </div>
              </div>
            ))
          )
        }
      </div>
    </BlockUI>
  </div>
);

export default Videos;
