import React from 'react'
import './assets/css/bootstrap.css'
import './assets/css/style.css';
import Sidebar from "./components/main/Sidebar";
import Content from "./components/main/Content";

class App extends React.Component {
    state = {
        tab: false
    }
    moveSideBar = () => {
        this.setState({
            tab: !this.state.tab
        })
    }

    render() {
        return (
            <div className="App">
                <Sidebar menu={this.state.tab}/>
                <Content menu={this.moveSideBar}/>
            </div>
        );
    }
}

export default App;
