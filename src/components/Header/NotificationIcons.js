const NotificationIcons = () => (
  <>
    <button className="bg-transparent border-0 p-2 position-relative">
      <i className="bi bi-chat-dots fs-5 text-success"></i>
      <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
        <span className="visually-hidden">1</span>
      </span>
    </button>
    <button className="bg-transparent border-0 p-2">
      <i className="bi bi-bell fs-5 text-success"></i>
    </button>
  </>
);

export default NotificationIcons;
