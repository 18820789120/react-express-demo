import fetch from "isomorphic-fetch";

export const USER_INFO = "SIGN_POST";

export function requestPosts(userInfo){
  return{
    type: USER_INFO,
    userInfo
  }
}

function receivePosts(resp){
  console.log("resp:: receivePosts", resp);
}
// {userName:'patChen', password:"0000"}
function makeSignRequest(data){
  return fetch("http://10.0.2.15/mockjs/2/api/signin", {
    method: "post",
    // headers:{
    //   "Accept": "application/json",
    //   "Content-Type": "application/json"
    // },
    body: JSON.stringify(data)
  })
}

export function fetchUserInfo(userInfo){
  return dispatch=>{
    dispatch(requestPosts(userInfo))
    return makeSignRequest({userName:'patChen', password:"0000"})
      .then( response => {
        console.log("=====>>>", response, response.json());
      })
      .then(json=>dispatch(receivePosts(json)))
  }
}
