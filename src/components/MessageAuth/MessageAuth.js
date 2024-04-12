import "./MessageAuth.css";

const MessageAuth = ({error}) => {
  return (
    <div className="MessageAuth">
      <div>

        <div className="MessageAuth_TXT">
          <p>{error}</p>
        </div>

      </div>
    </div>
  );
};

export default MessageAuth;
