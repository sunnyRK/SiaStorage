import VideosContainer from '../videos/VideosContainer';
import InfoContainer from '../Info/InfoContainer';

const Dashboard = ({ handleState }) => (
  <div className="dashboard">
    <div className="content-section">
      <VideosContainer />
    </div>
    <div className="info-section">
      <InfoContainer />
    </div>
  </div>
);

export default Dashboard;
