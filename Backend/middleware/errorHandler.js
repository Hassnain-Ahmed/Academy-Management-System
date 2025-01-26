const {constants} = require("../constants")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.json({message: err.message, stackTrace: err.stack})
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Failed | Bad Request",
                message: err.message, 
                stackTrace: err.stack
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title:"UnAuthorized access", 
                message: err.message, 
                stackTrace: err.stack
            })
            break;

        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden Resource", 
                message: err.message, 
                stackTrace: err.stack
            })
            break;

        case constants.NOT_FOUND:
            res.json({
                title:"Resource Not found", 
                message: err.message, 
                stackTrace: err.stack
            })
            break;
    
        case constants.SERVER_ERROR:
            res.json({
                title:"Internal Server Error", 
                message: err.message, 
                stackTrace: err.stack
            })
            break;
    
        default:
            console.log("CONSTANTS: No Error All Good")
            break;
    }
}

module.exports = errorHandler