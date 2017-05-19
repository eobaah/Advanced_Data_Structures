import chai, { expect, it, context, describe } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/HashTable'

chai.use(chaiChange)

describe('HashTable', () => {
  const ht = new HashTable()

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  it('adds a key-value pair to the hash table, deal with collisions using chaining', () => {
    ht.put('Madeon', 'Nonsense')
    ht.put('Porter Robinson', 'Natural Light')
    ht.put('The Chainsmokers', 'Roses')

    expect(ht._size()).to.deep.equal(3)
  })

  it('should update an existing element', () => {
    ht.put('Madeon', 'Ok')

    expect(ht.contains('Madeon')).to.deep.equal(true)
    expect(ht.get('Madeon')).to.deep.equal('Ok')
  })

  it('returns the data associated with key.', () => {
    ht.put('Mt. Eden', 'Oh That I Had')
    expect(ht.get('Mt. Eden')).to.deep.equal('Oh That I Had')
  })

  it('removes a key-value pair by key.', () => {
    ht.put('Rhianna', 'Umbrella')
    ht.put('Kaskade', 'Move For Me')
    ht.remove('Rhianna')

    expect(ht.contains('Rhianna')).to.deep.equal(false)
    expect(ht.size()).to.deep.equal(1)
  })

  it('returns the number of key-value pairs in the hash table.', () => {
    ht.put('Kaskade', 'Whatever')

    expect(ht.size()).to.deep.equal(1)
  })

  it('generates a hash for the key "The xx"', () => {
    ht.put('The xx', 'Hold On')

    expect(ht.hash('The xx')).to.deep.equal()
  })
})
