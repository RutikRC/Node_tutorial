const { readFileSync, writeFileSync } = require('fs');
//const fs = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
    './content/result.txt', 
    `Here is the result ${first} and ${second}`, 
    {flag: 'a'}
);


/////////////////////////////////////////////////////////////
const { readFile, writeFile } = require('fs');
//const fs = require('fs');

readFile('./content/first.txt','utf8', (err, result)=> {
    if (err) {
        console.error(err);
        return
    }
    const first = result
    readFile('./content/second.txt','utf8', (err, result)=> {
        if (err) {
            console.error(err);
            return
        }
        const second = result
        writeFile(
            './content/third.txt',
            `Here is the result ${first} and ${second}`,
            (err, result) => {
                if (err) {
                    console.error(err); 
                    return
                }
                console.log(result);
            }
        )
    })
})