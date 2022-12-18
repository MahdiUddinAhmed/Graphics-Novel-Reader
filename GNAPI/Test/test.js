const register = (username,email,password) => {
    if (username && email && password) {
        console.log({
            check:"true",
            error:"0"
        });
    }
    else{
        console.log({
            check:"false",
            error:"1"
        });
    }
}
const login = (username,password) => {
    if (username && password) {
        console.log({
            check:"true",
            error:"0"
        });
    }
    else{
        console.log({
            check:"false",
            error:"1"
        });
    }
}
const verifyTokenAndAdmin = (lastYear) => {
    if (lastYear) {
        console.log({
            check:"true",
            error:"0"
        });
    }
    else{
        console.log({
            check:"false",
            error:"1"
        });
    }
}
const verifyTokenAuthorization = (token)=>{
    if (token) {
        console.log({
            check:"true",
            error:"0"
        });
    }
    else{
        console.log({
            check:"false",
            error:"1"
        });
    }
}

module.exports = {
    register,
    login,
    verifyTokenAndAdmin,
    verifyTokenAuthorization,
}
