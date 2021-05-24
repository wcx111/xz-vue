import axios from "axios"


//用户登录
function Login(user){
    return new Promise(function(resolve,reject){
        axios.post("/user/login",user).then(result=>{
        resolve(result.deta);
        })
    })
}

//用户登出
function Logout(){
    return new Promise(function(resolve,reject){
        axios.get("/user/logout").then(result=>{
        resolve(result.deta);
        })
    })
}

function getUseSeeionData(){
    return new Promise(function(resolve,reject){
        axios.get("/user/seeiondata").then(result=>{
        resolve(result.deta);
        })
    })
}

export {Login,Logout,getUseSeeionData}