import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.timeout = 20000
