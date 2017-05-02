var React = require('react');

class Contact extends React.Component{
    render() {
        return (
            <div className="col-md-12">
            <div className="content">
                <h2>Got More Questions?</h2>
                <p>The easiest thing to do is send us
                    an email at: <ins>cs.pdx.help@gmail.com</ins>
                </p>
            </div>
            </div>
        );
    }
};

module.exports = Contact;