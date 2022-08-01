import { range, take } from 'lodash-es'
import { constants } from 'fs'
import { access } from 'fs/promises'
import { genericCombine, ffmux } from '../index.js'
import { downloadFile } from '../lib/util.js'

const file = 'BigBuckBunny-720p.mp4'
const fileHost = new URL('https://erwinvcc.ap-south-1.linodeobjects.com')

try {
  await access(file, constants.R_OK)
} catch {
  const fileDownloadLink = new URL(file, fileHost)
  console.error('Downloading', fileDownloadLink.href)
  await downloadFile(fileDownloadLink, './')
}

const inputs = range(16).map(
  (i) => [file, [`-ss ${i * 10}`, '-t 10']] as [string, string[]]
)

for (const i of range(1, 17)) {
  await ffmux(genericCombine(take(inputs, i), `combined_${i}.mp4`))
}