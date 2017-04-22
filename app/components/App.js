var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Home = require('./Home');
var Courses = require('./Course');
var Professors = require('./Professor');
var Internships = require('./Internship');
var Opt = require('./Opt');
var Contact = require('./Contact');
var Author = require('./Author');
var Nav = require('./Nav');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className = 'container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/course' component={Courses}/>
                        <Route path='/professors' component={Professors}/>
                        <Route path='/internships' component={Internships}/>
                        <Route path='/opt' component={Opt}/>
                        <Route path='/author' component={Author}/>
                        <Route path='/contact' component={Contact}/>
                        <Route render={function(){
                                return(
                                    <p>Page Not Found!</p>
                                )
                            }}
                        />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;