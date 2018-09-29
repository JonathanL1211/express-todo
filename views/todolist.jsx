var React = require('react');

var DefaultLayout = require('./layout/defaulthome');

class TodoList extends React.Component{
    render(){
        //console.log(this.props);
        return (<li>
                    <h4>Task: {this.props.todo.task}</h4>
                    <p>Days to completion: {this.props.todo.daysCompletion}</p>
                    <p>Status Code: {this.props.todo.status}</p>
                    <p>Date: {this.props.todo.time}</p>
                </li>
            )
    }
}

class Todo extends React.Component {
  render() {
    console.log("THIS.PROPS IN TODO CLASS IS: ", this.props.task);
    const displayToDoList = this.props.task.map( mapList => {
        return <TodoList todo={mapList} />
    })

    return (
        <DefaultLayout title="To do list">
            <div>
                <h1>Your to-do-list: </h1>
                <ol>{displayToDoList}</ol>
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = Todo;