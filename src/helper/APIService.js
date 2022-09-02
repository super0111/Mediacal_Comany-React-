const axios = require("axios");
let tokenData = "bearer " + localStorage.getItem("token");

export function GetApi(path) {
  const GetApiData = axios
    .get(path, {})
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return GetApiData;
}

export function PostApi(path, data, token) {
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: tokenData,
    },
  };
  const PostApiData = axios
    .post(path, data, config)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return PostApiData;
}