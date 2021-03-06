const jsonfile = require('jsonfile');
const express = require('express');

const app = express();

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

//add JSON file
const FILE = 'shoppinglist.json';
//-----------------------------------------------------------------------------------------------------------
//express request
app.get('/', (req, res) =>{
    res.render('homepage');
})

app.post('/todo', (req, res) =>{

    jsonfile.readFile(FILE, (err,obj)=>{
        console.log(req.body);
        var reqOrd = req.body;
        let currentDate = new Date().toLocaleString();
        //const obj = req.body;
        let tasksObj = {
            id: obj.task.length + 1,
            task: reqOrd['task'],
            daysCompletion: parseInt(reqOrd['days']),
            status: reqOrd['status'],
            time: currentDate
        }
        obj['task'].push(tasksObj);
        var listObj = obj['task'];
        //console.log(obj);

        jsonfile.writeFile(FILE, obj, function(err){
            if (err){
                console.log("ERROR: ", err);
            }
            res.render('todolist', {task: listObj});
        });
    })
})

// let checked = () =>{
//         document.getElementById('task').checked = true;
//     }

//     if(checked()){
//         this.props.todo['status'] = "completed";
//     }

// app.delete('/deletedTasks', (req, res) => {
//     jsonfile.readFile( file, (err, obj) => {
//       // console.log( "obj:",obj );
//       console.log( "err:",err );

// })


app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));