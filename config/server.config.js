if(process.env.NODE != "production"){
    require('dotenv').config()
}

module.exports = {
    PORT_SERVER : process.env.PORT,
}