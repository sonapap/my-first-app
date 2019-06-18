import React from 'react';
const Header = (props) => {
    const {title, message, userName} = props;
    return (
        <div>
           <h2>{title}</h2>
           <h2>{message}</h2>
           <h4>{userName}</h4>
            <hr />
        </div>
    );
}
export default Header