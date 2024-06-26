const getify = async (url:string)=>{
  const urlAndParamsRaw = url.split("?")
  const urlBase = urlAndParamsRaw[0]
  const paramsRaw =  urlAndParamsRaw[1].split("&")
  const params = {}
  for(let i =0;i < paramsRaw.length; i++){
    const keyValue = paramsRaw[i].split("=") 
    params[keyValue[0]] = keyValue[1]
  }
  console.log(urlBase,params)
  return "getify"
}

export default getify
