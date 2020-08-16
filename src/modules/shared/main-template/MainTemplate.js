
const MainTemplate = ({ children }) => (
  <div className="main-template">
    <div className="main-header">
      <div className="app-name">SiaStorage</div>
    </div>
    <div className="main-content">
      {children}
    </div>
    <div className="main-footer">
    </div>
  </div>
);

export default MainTemplate;
