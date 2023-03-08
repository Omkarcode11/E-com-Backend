if(process.env.NODE == "production"){
    require('dotenv').config()
}

module.exports = {
    PORT : process.env.PORT,
    DB :process.env.DB,
    HOST:process.env.HOST,
    DIALECT : process.env.DIALECT,
    PASSWORD : process.env.PASSWORD,
    USER : process.env.USER,
}