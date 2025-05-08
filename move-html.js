import fs from 'fs'
import path from 'path'

const srcPath = path.resolve('dist/src/popup/popup.html')
const destPath = path.resolve('dist/popup.html')

fs.renameSync(srcPath, destPath)
fs.rmSync(path.resolve('dist/src'), { recursive: true, force: true })
