var React = require('react');

var DefaultLayout = require('./layout/defaulthome');

class Home extends React.Component {
  render() {
    let homepage = "homepage";
    console.log(this.props);
    return (
        <DefaultLayout title="Home Page">
            <div>
                <h1> Hello! </h1>
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = Home;