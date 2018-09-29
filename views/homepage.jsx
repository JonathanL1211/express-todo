var React = require('react');

var DefaultLayout = require('./layout/defaulthome');

class Home extends React.Component {
  render() {
    //console.log(this.props);
    return (
        <DefaultLayout title="Home Page">
            <div>
                <h1>Things to do in your life: </h1>
                <form id="form" method="POST" action="/todo" >
                    <p>Tasks: </p>
                    <input type="text" name="task" required/>
                    <p>Days to complete: </p>
                    <input type="text" name="days" required/>
                    <p>Status: </p>
                    <select name="status" required>
                    <option value="">Select one option...</option>
                    <option value="haventStart">Haven't Start</option>
                    <option value="inProgress">In-progress</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = Home;