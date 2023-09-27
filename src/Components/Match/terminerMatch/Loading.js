import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../../css/Loading.css';
function Loading() {
    return (
        <div class="dot">
            <h1>the winner is </h1>
        <Spinner animation="border" role="status" >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
        </div>
    );
}

export default Loading;