var React = require('react');

var DefaultLayout = require('./layout/defaulthome');

class Home extends React.Component {
  render() {
    let homepage = "homepage";
    console.log(this.props);
    return (
        <DefaultLayout title="Home Page">
            <div>
                <h1>Things to do in your life: </h1>
                <form method="POST" action="/todo">
                    <p>Tasks: </p>
                    <input type="text" name="task"/>
                    <p>Days to complete: </p>
                    <input type="text" name="days"/>
                    <p>Status: </p>
                    <input type="text" name="status"/>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = Home;