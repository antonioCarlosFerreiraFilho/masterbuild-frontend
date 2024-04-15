import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading_box">
        <div className="loading_box-content">
          <img src="/logos/logo_00.png" alt="logo" />
          <div className="loading_box-gif">
          <img src="/loading/loading_01.gif" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
