
import Treenode from '../src/treenode'

export default class BinaryTree {
  constructor(){
    this.root = null;
    this._size = 0;
  }

  insert(value) {
    let newNode = new Treenode(value);
    this._size++
    // if tree is empty then insert new node at the root
    if(!this.root) {
      this.root = newNode;
    } else {
    // if root is not empty
      let currentNode = this.root;
      while(currentNode) {
        if(newNode.value <= currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else if (newNode.value > currentNode.value) {
          if(!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        } else {
          break;
        }
      }
    }
  }

  search(value) {
    if(!this.root) {
      return null
    }
    let currentNode = this.root
    if(value === currentNode.value) {
      return currentNode
    } else {
      while(currentNode) {
        if( value <= currentNode.value){
          if(currentNode.left.value === value) {
            return currentNode.left
          } else {
            currentNode = currentNode.left;
          }
        } else if (value > currentNode.value){
          if(currentNode.right.value === value) {
            return currentNode.right
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return null
        }
      }
    }
  }
}
