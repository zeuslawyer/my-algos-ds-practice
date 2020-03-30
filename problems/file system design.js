// https://leetcode.com/articles/design-in-memory-file-system/

class Directory {
  constructor(name) {
    this.name = name;
    this.subdirs = {};
    this.files = {};
  }
}

class File {
  constructor(name) {
    this.name = name;
    this.content = '';
  }
}

class FileSystem {
  constructor() {
    this.root = new Directory('__ROOT__');
  }

  ls(path) {
    if (path === '/') {
      return Object.keys(this.root.files);
    }

    // else
    let dir = this.root;
    let levels = path.split('/');
    for (let i = 1; i < levels.length - 1; i++) {
      // iterate through paths till n-1
      dir = dir.subdirs[levels[i]];
    }
    // at parent directory, so check if next is file or dir
    let finalPathName = levels[levels.length - 1];

    if (dir.files[finalPathName]) {
      // is a file
      return Object.keys(dir.files[finalPathName]);
    }
    // else is a dir
    dir = dir.subdirs[finalPathName];
    if (dir) {
      let currentDirs = Object.keys(dir.subdirs);
      let currentFiles = Object.keys(dir.files);
      let dirContents = [...currentDirs, ...currentFiles];
      return dirContents;
    }

    // nothing found, error path
    return `ERROR. No file or directory found on path ${path}`;
  }

  mkdir(path) {
    let nodes = path.split('/');
    let dir = this.root;
    for (let i = 1; i < nodes.length; i++) {
      const dirName = nodes[i];
      dir.subdirs[dirName] = new Directory(dirName);
      dir = dir.subdirs[dirName];
    }
  }
  addContentToFile(filePath, fileName, content) {}

  readContentFromFile(filePath, fileName) {}
}

const fs = new FileSystem();
console.log('ls and Root structure:', fs.ls('/'), fs.root); // ls

// mkdir
fs.mkdir('/top/second/third');
console.log('ls 2:', fs.ls('/top/second')); // ls
