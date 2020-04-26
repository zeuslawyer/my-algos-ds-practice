// https://leetcode.com/articles/design-in-memory-file-system/

const { assertEquals } = require('../test/assertEquals');
class Directory {
  constructor(name) {
    this.name = name;
    this.subdirs = {};
    this.files = {};
  }
}

class File {
  constructor(name, content) {
    this.name = name;
    this.content = content || '';
  }
}

class FileSystem {
  constructor() {
    this.root = new Directory('__ROOT__');
    this.ROOT_PATH = '/';
  }

  ls(path) {
    if (path === this.ROOT_PATH) {
      const files = Object.keys(this.root.files);
      const dirs = Object.keys(this.root.subdirs);
      return [...dirs, ...files].sort(); // lexographical order
    }

    // else
    let dir = this.root;
    let levels = path.split(this.ROOT_PATH); // first will be empty "" so start at 1
    for (let i = 1; i < levels.length - 1; i++) {
      if (!dir.subdirs[levels[i]])
        throw new Error(`Invalid Path. "${levels[i]}" does not exist.`);
      // iterate through paths till n-1
      dir = dir.subdirs[levels[i]];
    }
    // at parent directory, so check if next is file or dir
    let finalLevelName = levels[levels.length - 1];

    if (finalLevelName in dir.files) {
      // if (dir.files.hasOwnProperty(finalLevelName)) {
      // is a file
      return dir.files[finalLevelName].content;
    }
    // else is a dir
    dir = dir.subdirs[finalLevelName];
    if (dir) {
      let currentDirs = Object.keys(dir.subdirs);
      let currentFiles = Object.keys(dir.files);
      let dirContents = [...currentDirs, ...currentFiles];
      return dirContents;
    }

    // nothing found, error path
    return `ERROR. No file or directory found on path ${path}`;
  }

  /**
   *
   * @return {Directory} the Directory created
   */
  mkdir(path) {
    let levels = path.split('/');
    let currentDir = this.root;
    for (let i = 1; i < levels.length; i++) {
      const dirName = levels[i];

      if (!currentDir.subdirs[dirName]) {
        let newDir = new Directory(dirName);
        currentDir.subdirs[dirName] = newDir;
      }

      currentDir = currentDir.subdirs[dirName];
    }
    return currentDir;
  }

  /**
   * 
   * @return {File} the File Object

   */
  addContentToFile(filePath, fileName, content) {
    if (filePath === this.ROOT_PATH) {
      const files = this.root.files;
      if (files[fileName] === undefined) {
        // no such file
        files[fileName] = new File(fileName, content);
      } else {
        // append new content
        files[fileName].content += ' ' + content;
      }
      // return file
      return files[fileName];
    }
  }

  readContentFromFile(filePath, fileName) {}
}
const fs = new FileSystem();
assertEquals(fs.root.name, '__ROOT__', 'Root name is correct');

let rootFile = fs.addContentToFile('/', 'root_filename', 'empty for now');
assertEquals(rootFile.content, 'empty for now', 'File added');

rootFile = fs.addContentToFile('/', 'root_filename', 'This is now added');
assertEquals(
  rootFile.content,
  'empty for now ' + 'This is now added',
  'content added to file'
);

let firstDir = fs.mkdir('/top-level');
assertEquals(firstDir.name, 'top-level', 'make top level directory in root');

let thirdDir = fs.mkdir('/top-level/second-level/third-level');
assertEquals(
  fs.root.subdirs['top-level'].subdirs['second-level'].subdirs['third-level']
    .name,
  thirdDir.name,
  'second level added'
);
