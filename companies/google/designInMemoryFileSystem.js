// 588. Design In-Memory File System
// https://leetcode.com/problems/design-in-memory-file-system/editorial/
// Hard
// Topics
// Companies
// Design a data structure that simulates an in-memory file system.

// Implement the FileSystem class:

// FileSystem() Initializes the object of the system.
// List<String> ls(String path)
// If path is a file path, returns a list that only contains this file's name.
// If path is a directory path, returns the list of file and directory names in this directory.
// The answer should in lexicographic order.
// void mkdir(String path) Makes a new directory according to the given path. The given directory path does not exist. If the middle directories in the path do not exist, you should create them as well.
// void addContentToFile(String filePath, String content)
// If filePath does not exist, creates that file containing given content.
// If filePath already exists, appends the given content to original content.
// String readContentFromFile(String filePath) Returns the content in the file at filePath.
 

// Example 1:


// Input
// ["FileSystem", "ls", "mkdir", "addContentToFile", "ls", "readContentFromFile"]
// [[], ["/"], ["/a/b/c"], ["/a/b/c/d", "hello"], ["/"], ["/a/b/c/d"]]
// Output
// [null, [], null, null, ["a"], "hello"]

// Explanation
// FileSystem fileSystem = new FileSystem();
// fileSystem.ls("/");                         // return []
// fileSystem.mkdir("/a/b/c");
// fileSystem.addContentToFile("/a/b/c/d", "hello");
// fileSystem.ls("/");                         // return ["a"]
// fileSystem.readContentFromFile("/a/b/c/d"); // return "hello"
 

// Constraints:

// 1 <= path.length, filePath.length <= 100
// path and filePath are absolute paths which begin with '/' and do not end with '/' except that the path is just "/".
// You can assume that all directory names and file names only contain lowercase letters, and the same names will not exist in the same directory.
// You can assume that all operations will be passed valid parameters, and users will not attempt to retrieve file content or list a directory or file that does not exist.
// 1 <= content.length <= 50
// At most 300 calls will be made to ls, mkdir, addContentToFile, and readContentFromFile.

const collator = new Intl.Collator(undefined, { sensitivity: 'base' });

class File {
    constructor() {
        this.isFile = false
        this.files = {}
        this.content = ""
    }
}
var FileSystem = function() {
    this.root = new File()
};

FileSystem.prototype.findOrCreateNode = function(path) { 
    let curr = this.root
    if(path === "/") return curr
    const d = path.split("/")
    for(let i=1; i<d.length; i++) {
        if(curr.files[d[i]]===undefined) curr.files[d[i]] = new File()
        curr = curr.files[d[i]]
    }
    return curr
}

/** 
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function(path) {
    const curr = this.findOrCreateNode(path)
    const d = path.split("/")
    if(curr.isFile) return [d[d.length-1]]
    const ans = Object.keys(curr.files).sort()
    return ans
};

/** 
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function(path) {
    this.findOrCreateNode(path)
};

/** 
 * @param {string} filePath 
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function(filePath, content) {
    let curr = this.findOrCreateNode(filePath)
    curr.isFile = true
    curr.content += content
};

/** 
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function(filePath) {
    let curr = this.findOrCreateNode(filePath)
    return curr.content
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */