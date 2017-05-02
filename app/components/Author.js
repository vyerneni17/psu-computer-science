var React = require('react');

class Author extends React.Component{
    render() {
        return (
            <div className="col-md-12">
            <div className="content">
                <h2>About Author</h2>
                <p>Venkata Yerneni(Sai Krishna Yerneni)</p>
                <p>More Information - Coming soon!</p>
            </div>
            </div>
        );
    }
};

module.exports = Author;