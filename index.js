const Notification = props => {
    const { bgColor, iconUrl, iconImage, textContent, notificationMessage } = props;
    return (
        <div className={bgColor}>
            <img src={iconUrl} className={iconImage} />
            <p className={notificationMessage}>{textContent}</p>
        </div>
    )
}

const element = (
    <div className="bg-card-container">
        <div className="content-container">
            <h1 className="main-heading"> Notifications</h1>
            <Notification iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" textContent="Information message" iconImage="icon-image" notificationMessage="notification-message" bgColor="info-container-bgcolor" />
            <Notification iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" textContent="Success Message" iconImage="icon-image" notificationMessage="notification-message" bgColor="success-container-bgcolor" />
            <Notification iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" textContent="Warning message" iconImage="icon-image" notificationMessage="notification-message" bgColor="warning-container-bgcolor " />
            <Notification iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" textContent="Error  message" iconImage="icon-image" notificationMessage="notification-message" bgColor="error-container-bgcolor" />
        </div>

    </div>
)

ReactDOM.render(element, document.getElementById('root'))
