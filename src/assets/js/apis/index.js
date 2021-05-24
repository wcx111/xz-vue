import {
    axios
} from "../config.js"

function getIndex(){
    return new Promise(function(resolve){
        axios.get("/index").then(result=>{
            //console.log(res.data.recommendedItems);
            resolve(result.data)
        })
    })
}

export {
    getIndex
}