const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
require('dotenv').config()



// middleware
app.use(express.static('./public'));
app.use(express.json())
//routes

// app.get('/hello', (req,res) =>{
//     res.send('Task manager app')
// })

app.use('/api/v1/tasks',tasks)

app.use(notFound);

const port = 3000

const start = async () => {
    try{
        
        await connectDB(process.env.MONGO_URI)
        console.log('connection successful')
        app.listen(3000, console.log(`server is listening on the ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start();