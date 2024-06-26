import axios from "axios"

const getify = async (url:string)=>{
  const urlAndParamsRaw = url.split("?")
  const urlBase = urlAndParamsRaw[0]
  const paramsRaw =  urlAndParamsRaw[1].split("&")
  let urlVars = {}
  for(let i =0;i < paramsRaw.length; i++){
    const keyValue = paramsRaw[i].split("=") 
    if(keyValue[0] == "params"){
      urlVars[keyValue[0]] = JSON.parse(keyValue[1])
    }else{
      urlVars[keyValue[0]] = keyValue[1]
    }
  }
  let reqUrl = `${urlBase}?`;
  const paramsKeys = Object.keys(urlVars["params"])
  const paramsValues = Object.values(urlVars["params"])
  console.log(paramsKeys)
  for(let i=0;i<paramsKeys.length;i++){
    if(i == paramsKeys.length -1){
      reqUrl += `${paramsKeys[i]}=${paramsValues[i]}`  
    }else{
      reqUrl += `${paramsKeys[i]}=${paramsValues[i]}&`
    }
  }
  axios.get(reqUrl)
  return "getify"
}

export default getify
