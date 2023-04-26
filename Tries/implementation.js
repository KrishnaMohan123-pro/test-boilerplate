function TrieNode(data) {
    this.data = data
    // children length = 26
    this.children = []
    this.isTerminal = false
}

function convertLetterToNumber(str) {
    if ((typeof str === "string" || str instanceof String) && /^[a-zA-Z]+$/.test(str)) {
      str = str.toUpperCase();
      let out = 0,
        len = str.length;
      for (pos = 0; pos < len; pos++) {
        out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
      }
      return out;
    } else {
      return undefined;
    }
  }
// implementation for strings
function Trie() {
    this.root = new TrieNode()
    this.insert = function(word) {
        function insertUtil(root, word) {
            if(word.length === 0) {
                root.isTerminal = true
                return
            }
            let child = new TrieNode()
            let index = convertLetterToNumber(word.charAt(0))
            if(root.children[index]) {
                child = root.children[index]
            } else {
                child = new TrieNode(word.charAt(0))
                root.children[index] = child
            }
            insertUtil(child, word.substr(1))

        }
        insertUtil(this.root, word)
    }
}

console.log(convertLetterToNumber('A'))
const T = new Trie();
T.insert('abcd')
console.log(T)