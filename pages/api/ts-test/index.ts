import { NowRequest, NowResponse } from '@vercel/node'
const childProcess = require('child_process');

export default (request: NowRequest, response: NowResponse) => {
    response.end(childProcess.execSync('cat /proc/meminfo'))
}
