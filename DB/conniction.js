import { connect } from 'mongoose';

connect('mongodb://127.0.0.1:27017/sraha_app')
  .then(() => console.log('Connected Successfully!')).catch((error)=> console.log(error))

