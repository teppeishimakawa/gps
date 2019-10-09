var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.method == 'POST') {
    var body = '';
    // data受信イベントの発生時に断片データ(chunk)を取得
    // body 変数に連結
    req.on('data', function(chunk) {
        body += chunk;
    });

    // 受信完了(end)イベント発生時
    req.on('end', function() {
      console.log(body);
      res.end();
    });
  }
}).listen(8080);