import React, {Component} from 'react';
import {BiMenuAltLeft} from 'react-icons/bi'
import {Switch,  Route} from 'react-router-dom';
import {routes} from "../../react-immutable/routes";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Content extends Component {
    addClass = () => {
        this.props.menu();
    }

    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-md-9">
                        <div className="content-header">
                            <button className="menu" onClick={this.addClass}><BiMenuAltLeft/>
                            </button>
                        </div>
                        <main>
                            <Switch>
                                {
                                    routes.map(item => <Route key={item.path} path={item.path} component={item.component} exact />)
                                }
                            </Switch>
                        </main>
                    </div>
                    <div className="col-md-3">
                        <div className="right-content">
                            <Calendar
                                onChange={(e)=>{
                                    console.log(e)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;