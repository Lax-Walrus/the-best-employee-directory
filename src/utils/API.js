import axios from "axios";

const BASEURL =
  "https://randomuser.me/api/?inc-name,email,cell,picture&results=50&nat=US";
const APIKEY = "&apikey=trilogy";

export default {
  getUser: function (query) {
    return axios.get(BASEURL);
  },
};
