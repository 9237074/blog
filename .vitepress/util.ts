import {readdirSync} from "node:fs";
import { join } from 'node:path'

const getFile = (prefixPath: string) => readdirSync(join(process.cwd(), prefixPath))
  .map(item => ({
    text: item.replace('.md', ''),
    link:`${prefixPath}/${item.replace('.md', '')}`}))

const createSideBarConfig = (text: string, prefixPath: string) => {
  const items = getFile(prefixPath)
  const data = {
    text,
    link: items[0].link,
    collapsed: !!items.length,
    items
  }
  return data
}

export default createSideBarConfig