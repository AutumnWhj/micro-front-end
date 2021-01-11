const path = require('path')
const fs = require('fs-extra')

const tasks = [
  {
    src: 'packages/office/dist',
    dest: 'docs',
  },
  {
    src: 'packages/crm/dist',
    dest: 'docs/crm',
  },
  {
    src: 'packages/hr/dist',
    dest: 'docs/hr',
  },
  {
    src: 'packages/oa/dist',
    dest: 'docs/oa',
  },
]

fs.removeSync(path.resolve(__dirname, 'dist'))

for (const { src, dest } of tasks) {
  fs.moveSync(path.resolve(__dirname, src), path.resolve(__dirname, dest))
  console.log('\x1b[1m%s\x1b[31m%s\x1b[0m', '[Copy]: ', `src: ${src}, dest: ${dest}`, 'success.')
}
