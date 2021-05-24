import axios from "axios"

function getDetails(lid){
    return new Promise(function(resolve){
        axios.get("/product/detail",{params:{lid}}).then(result=>{
        resolve(result.deta);
        })
    })
}
function getList(obj){
    var paramsObj={kw:obj.kw,pno:obj.pon,pageSize:obj.pageSize}
    return new Promise(function(resolve){
        axios.get("/product/detail",{params:{paramsObj}}).then(result=>{
        resolve(result.deta);
        })
    })
}


export {getDetails,getList}