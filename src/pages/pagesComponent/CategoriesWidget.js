import React from 'react';
import { useSelector } from 'react-redux';

function CategoriesWidget () {

    const categories = useSelector((state) => state.home.posts);
    
    return (
        <React.Fragment>
            <div className="card mb-4">
                <div className="card-header">Categories</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="list-unstyled mb-0">
                                {categories && categories.map((item)=> {
                                    return (<li key={item.name}><p>{item.name}</p></li>);
                                })}                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CategoriesWidget;