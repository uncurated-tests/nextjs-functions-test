const childProcess = require('child_process');

export default (req, res) => {
    // This is extra fresh
    res.end(childProcess.execSync('cat /proc/meminfo'))
}
