import React from 'react';

function HeaderHomeComponent () {
    return (
        <React.Fragment>
            <header className="py-5 bg-light border-bottom mb-4">
            <div className="container">
                <div className="text-center my-5">
                    <h1 className="fw-bolder">Welcome to Blog Home!</h1>
                    <p className="lead mb-0">imply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since 
                    </p>
                </div>
            </div>
        </header>
        </React.Fragment>
    );
}

export default HeaderHomeComponent;