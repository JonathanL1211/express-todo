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
                    <select name="status">
                    <option value="select">Select one option...</option>
                    <option value="completed">Completed</option>
                    <option value="inProgress">In-progress</option>
                    <option value="haventStart">Haven't Start</option>
                    </select>
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