import fs from 'fs';
import path from 'path';
const getFile = (prefixPath: string) => {
  return fs.readdirSync(path.join(process.cwd(), prefixPath))
    .map(item => `${prefixPath}/${item.replace('.md', '')}`)
}

const createSideBarConfig = (text:string, prefixPath:string, collapsible = true) => {
  return {
    text,
    collapsible,
    children: getFile(prefixPath)
  }
}

export default createSideBarConfig