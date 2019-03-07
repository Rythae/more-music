require('dotenv').config();

const dev ={
  REACT_APP_DEV_API_URL: 'http://localhost:3000'
}

const prod ={
  REACT_APP_PROD_API_URL: 'http://api.musixmatch.com'
}
const config = process.env.NODE_ENV==='development'? dev:prod

export default config;