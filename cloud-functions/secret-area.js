const express = require('express')
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()
const port = process.env.PORT || 3000

app.use('/users', createProxyMiddleware({ 
  target: 'https://v1.stormapi.com/', 
  changeOrigin: true 
  })
)

app.use('/.netlify', createProxyMiddleware({ 
  target: 'https://condescending-payne-1beaf7.netlify.app/', 
  changeOrigin: true 
  })
)

app.use(express.static(path.join(__dirname, '../app')));

app.listen(port, () => console.log(`App is live on port ${port}!`))