// Higher Order Components

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please do not share.</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ? <p>Please log in</p> : <WrappedComponent {...props}/>}
        </div>
    );
};
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, 
//                 document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, 
                document.getElementById('app'));