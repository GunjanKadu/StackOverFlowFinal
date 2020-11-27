import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://bufferoverflow1.herokuapp.com/api'
    : `https://${process.env.SITE_NAME}/api`

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
