const Error = ({ message, hideErrorBox }) => {

    return (
        <>
            <div
                className="error-message"
                style={{ display: message ? 'block' : 'none' }}
            >
                <button onClick={hideErrorBox}>x</button>
                <p>{message}</p>
            </div>
        </>
    )
}

export default Error;