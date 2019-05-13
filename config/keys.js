//Decide which environmental keys to use

if(process.env.NODE_ENV === "production"){
  //USE PROD KEYS
  module.exports = require('./prod');
}else{
  // USE DEV KEYS
  module.exports = require('./dev');
}
