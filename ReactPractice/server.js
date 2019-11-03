const http = require('http')
const ctype = {'Content-Type': 'text/html;charset=utf-8'}

const svr = http.createServer(handler)
svr.listen(8080)

function handler (req, res) {
  const url = req.url
  if (url === '/') {
    showTopPage(req, res)
    return
  }
  
  res.writeHead(404, ctype)
  res.end('404 not found')
}

function showTopPage(req, res) {
  res.writeHead(202, ctype)
  const html = '<h1>Hello World!!!!!</h1>'
  res.end(html)
}
