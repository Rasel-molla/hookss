import React, { useRef } from 'react';

const ExplorRef = () => {

const userNameRef = useRef (null);

const handleClick = () =>{

// console.log(userNameRef);
userNameRef.current.focus();

}

    return (
        <div>
            <input ref={userNameRef} type="text" />
            <button onClick={handleClick}> Get Focus </button>
        </div>
    );
};

export default ExplorRef;