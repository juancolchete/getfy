import axios from "axios"

const getfy = async (url:string)=>{
  const urlAndParamsRaw = url.split("?")
  const urlBase = urlAndParamsRaw[0]
  const paramsRaw =  urlAndParamsRaw[1].split("&")
  const jsonParseKeys = ["params","headers"]
  let urlVars:any = {}
  for(let i =0;i < paramsRaw.length; i++){
    const keyValue = paramsRaw[i].split("=") 
    if(jsonParseKeys.indexOf(keyValue[0]) > -1){
      urlVars[keyValue[0]] = JSON.parse(keyValue[1])
    }else{
      urlVars[keyValue[0]] = keyValue[1]
    }
  }
  let reqUrl = `${urlBase}?`;
  const paramsKeys = Object.keys(urlVars["params"])
  const paramsValues = Object.values(urlVars["params"])
  for(let i=0;i<paramsKeys.length;i++){
    if(i == paramsKeys.length -1){
      reqUrl += `${paramsKeys[i]}=${paramsValues[i]}`  
    }else{
      reqUrl += `${paramsKeys[i]}=${paramsValues[i]}&`
    }
  }
  const request = await axios.get(reqUrl,{headers: urlVars.headers})
  let postRunData = request
  if(urlVars?.["code"].length > 0){
    postRunData = eval(urlVars["code"])
  }else{
    postRunData = request.data;
  }
  return postRunData;
}

export default getfy
