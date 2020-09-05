import React from 'react';
import TaskBoard from './TaskBoard';
import Menu from './Menu';
import { claims, getUsers } from './data/claims.js';
import { sample } from 'lodash';

export class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        let user = sample(getUsers());

        return (
            <div style={{display:'flex'}}>
                <div>
                    <Menu user={user}/>
                </div>
                <div className="container">
                    <h1 className="title">
                        Insurance Claims
                    </h1>
                    <div className="columns" style={{height:'50em', background: '#CDCDCD'}}>                           
                        <div style={{ display:'block' }}>
                            <TaskBoard claims={claims} user={user} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
