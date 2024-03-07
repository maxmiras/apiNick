const express = require('express')
const db = require('./db.js')
const router1 = require('./routes/usuarios.js');
const cors=require('cors');

let app = express()
db.obtenerDB('./Gym.db')



app.use(cors({
    origin: 'https://nick-black.vercel.app/'
  }))
app.use(express.json())


app.use(router1)


app.set('port', process.env.PORT || 3000)


app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get( 'port' ))
})