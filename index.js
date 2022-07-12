console.log('hi')
const { exec } = require("child_process");

// exec("ls -la", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });
exec("echo hostname >> notes.md && git config --global user.email paglipay@gmail.com && git config --global user.name 'Paul Aglipay' && git pull origin main && git add . && git commit -m 'hi' && git push origin main", (error, stdout, stderr) => {
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
exec("echo hostname >> notes.md && cd ../../test && git clone https://github.com/paglipay/node-feedback-loop.git && cd ./node-feedback-loop && npm install && npm start && code .", (error, stdout, stderr) => {
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