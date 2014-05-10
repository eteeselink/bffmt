var fs      = require('fs');

var stdin = process.openStdin();
var data = '';
stdin.on('data', function(chunk) {
    data += chunk;
});


var indent = '';
var out = '';

function newline() {
    out += '\n' + indent;
}

stdin.on('end', function() {
    data = data.replace('\r\n', '\n');
    for(var i = 0; i != data.length; i++) {
        var ch = data[i];
        switch(ch) {
            case '[':
                indent = indent + '  ';
                out += '[';
                newline();
                break;
            case ']':
                indent = indent.slice(0, -2);
                newline();
                out += ']'
                break;
            case '\n':
                newline();
                break;
            default:
                out += ch;
        }
    }
    console.log(out);
});