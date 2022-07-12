console.log('hi')
const { exec } = require("child_process");

const myExec = (cmd) => {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}
const myCmds = (cmds) => {
    cmds.map(e => myExec(e))
}


const cmds = [
    "git config --global user.email paglipay@gmail.com && git config --global user.name 'Paul Aglipay' && git add . && git commit -m 'pulling' && git pull origin main && echo hostname >> notes.md && git add . && git commit -m 'hi' && git push origin main",
    "echo hostname >> notes.md && cd ../../test && git clone https://github.com/paglipay/node-feedback-loop.git && cd ./node-feedback-loop && npm install && npm start && code ."
]

let i;
let count = 0;
require('fs').createReadStream('./notes.md')
    .on('data', function (chunk) {
        for (i = 0; i < chunk.length; ++i)
            if (chunk[i] == 10) count++;
    })
    .on('end', function () {
        console.log(count);
        count < 1 ? myCmds(cmds) : null;
    });


