import chai, { expect, it, context, describe } from 'chai'
import chaiChange from 'chai-change'
import BinaryTree from '../src/bst'

chai.use(chaiChange)

describe('BinaryTree', () => {
  'use strict'

  it('exists', () => {
    expect(BinaryTree).to.be.a('function')
  })

  context('insert(value)', () => {
    it('Inserts a treenode with a value.', () => {
      const myBinaryTree = new BinaryTree()
      myBinaryTree.insert(12)
      expect(myBinaryTree.root.value).to.equal(12)
    })
    it('Inserts a treenode with a value.', () => {
      const myBinaryTree = new BinaryTree()
      myBinaryTree.insert(12)
      myBinaryTree.insert(5)
      expect(myBinaryTree.root.left.value).to.equal(5)
    })
    it('Inserts a treenode with a value.', () => {
      const myBinaryTree = new BinaryTree()
      myBinaryTree.insert(12)
      myBinaryTree.insert(18)
      expect(myBinaryTree.root.right.value).to.equal(18)
    })
  })

  context('search(value)', () => {
    it('Search for a value and return its node', () => {
      const myBinaryTree = new BinaryTree()
      myBinaryTree.insert(12)
      myBinaryTree.insert(18)
      expect(myBinaryTree.search(18).data).to.equal(18)
    })
  })

  context('remove(value)', () => {
    it('removes the tree node with a specific value.', () => {
      const myBinaryTree = new BinaryTree()
      myBinaryTree.insert(12)
      myBinaryTree.insert(18)
      myBinaryTree.remove(18)
      expect(myBinaryTree._size()).to.equal(1)
    })
  })

  context('traverse(value)', () => {
    it("traverse the tree using in-order traversal and apply function on each node's value", () => {
      const myBinaryTree = new BinaryTree()
      myBinaryTree.insert(12)
      myBinaryTree.insert(18)
      myBinaryTree.insert(5)
      expect(myBinaryTree.traverse((value) => console.log(value))).to.equal(12, 18, 5)
    })
  })

  context('count()', () => {
    it('return the number of nodes within the tree', () => {
      const myBinaryTree = new BinaryTree()
      myBinaryTree.insert(15)
      myBinaryTree.insert(11)
      myBinaryTree.insert(9)
      expect(myBinaryTree.count().to.equal(3))
    })
  })

})
