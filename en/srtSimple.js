var filepath = './Emperor.srt'

var fs = require('fs')

var data = fs.readFileSync(filepath)
var txt = data.toString()

var txtArr = txt.split("\r\n")

var r = ''
for(var i = 0; i < txtArr.length; i = i + 4) {
    if (i + 2 > txtArr.length - 1) {
        break;
    }

    r += (' ' + txtArr[i + 2])
}



const md = `
# Emperor

----

${r}
`


fs.writeFileSync(filepath.replace('.srt', '.md'), md)

