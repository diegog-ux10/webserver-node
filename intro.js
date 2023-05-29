const http = require('http');

http.createServer( ( req, res ) => {

    // res.writeHead(404, {'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    // const person = {
    //     id: 1,
    //     name: 'Diego '
    // }

    res.write( 'id, name\n' );
    res.write( '1, Diego\n' );
    res.write( '2, Bella\n' );
    res.end();
}).listen( 8080 );

console.log('Listen port')