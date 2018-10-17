const axios = require("axios");

module.exports = {
  handleTeamInput: val => {
    return val;
  },
  handleMessageInput: val => {
    return val;
  },
  deleteMessage: path => {
    return axios.delete(path).then(res => {
      console.log(res.data);
      return res.data;
    });
  },
  updateMessage: path => {
    return axios.put(path).then( res => {
      console.log(res.data);
      return res.data
    })
  }
};
