const childProcess = require('child_process');

export default (req, res) => {
    res.end(childProcess.execSync('cat /proc/meminfo'))
}
