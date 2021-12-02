const path = require("path")
const fs = require("fs")
const IGNORE_DIR_DEFAULT = [".github", ".vuepress", "dist", "node_modules", "public", ".git"]

const getSubDir = (dir) => {
    let dirList = fs.readdirSync(dir)
    return dirList.filter(v => fs.lstatSync(path.resolve(dir, v)).isDirectory())
}
const getSubItems = (dir) => {
    let dirList = fs.readdirSync(dir)
    return dirList
}
const sortDirs = (dirArr) => {
    // console.log("prepare sort:", dirArr)
    dirArr.sort()
    let firstIndex = dirArr.indexOf("README.md")
    
    if (firstIndex != -1) {
        let indexEle = dirArr.splice(firstIndex, firstIndex+1)
        dirArr.unshift(indexEle[0])
    }
    // console.log("sort:", dirArr)
    return dirArr
}
const getSubFiles = (dir) => {
    let fileList = fs.readdirSync(dir)
    return fileList.filter(v => fs.lstatSync(path.resolve(dir, v)).isFile())
}

class AutoNavSide {
    constructor(root, ignoreDirList=IGNORE_DIR_DEFAULT, ignoreFileList) {
        this.root = root ? root : process.cwd()
        this.ignoreDirList = ignoreDirList
        this.structure = this.getStructure()
        this.fileInfo = this.getFileInfo()
        console.log(`
----------------------------------------------------------
root: ${this.root}
ignore: ${this.ignoreDirList}
structure: \n${JSON.stringify(this.structure, null, 4)}
----------------------------------------------------------
        `)
    }
    getStructure() {
        this.autoGroupDir = fs.readdirSync(this.root).filter(dir => this.ignoreDirList.indexOf(dir) == -1 )
        let structure = {}
        for (let baseDir of this.autoGroupDir) {
            let temp = path.resolve(this.root, baseDir)
            if (!fs.lstatSync(temp).isDirectory()) {
                continue
            }
            structure[baseDir] = getSubDir(temp)
        }
        return structure
    }
    getFileInfo() {
        let fileInfo = {}
        for (let dir of Object.keys(this.structure)) {
            let temp = path.resolve(this.root, dir)
            // console.log(`prepare get subfile of dir ${temp}`)
            let subFileList = getSubFiles(temp)
            if (subFileList.length > 0) {
                fileInfo[dir] = subFileList
            } else {
                continue;
            }
        }
        return fileInfo
    }
    
    genNavbarGroup() {
        let result = []
    
        for (let dir of Object.keys(this.structure)) {
            let subDir = this.structure[dir]
            if (subDir.length > 0) {
                let  children = subDir.map(sub => `/${dir}/${sub}/`) 
                if (this.fileInfo[dir] && this.fileInfo[dir].length) {
                    children.unshift(`/${dir}/README.md`)
                }
                result.push({
                    text: dir,
                    children
                })
                
            } else {
                result.push({
                    text: dir,
                    link: `/${dir}/README.md`
                })
            }
        }
        return result
    }
    genSidebarGroup() {
        // subArrKey = Object.keys(this.subDict)
        // let result = {}
        let result = {}
        for (let dir of Object.keys(this.structure)) {
            let subDir = this.structure[dir]
            if (subDir.length > 0) {
                for (let sub of subDir) {
                    let temp = path.resolve(this.root, dir, sub)
                    result[`/${dir}/${sub}/`] = sortDirs(getSubItems(temp)).map(v => `/${dir}/${sub}/${v}`)
                }
                if (this.fileInfo[dir] && this.fileInfo[dir].length) {
                    result[`/${dir}/`] = sortDirs(this.fileInfo[dir]).map(v => `/${dir}/${v}`)
                }
            } else {
                let temp = path.resolve(this.root, dir)
                result[`/${dir}/`] = sortDirs(getSubItems(temp)).map(v => `/${dir}/${v}`)
            }
        }
        return result
    }
}

// if (process.env.TEST) {
//     let test = new AutoNavSide()
//     console.log(test.genNavbarGroup())
//     console.log(test.genSidebarGroup())
// }
module.exports = {
    AutoNavSide,
}