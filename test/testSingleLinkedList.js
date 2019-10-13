const expect = require('chai').expect;

const {
  LinkedListNode
} = require('../problems/datastructures/singlyLinkedList/Node');
const {
  SingleLinkedList
} = require('../problems/datastructures/singlyLinkedList/LinkedList');

describe.only('singly linked list', () => {
  let list;
  let node;
  it('test for new LinkedList ', () => {
    list = new SingleLinkedList();
    expect(list.head).to.be.a('null');
    expect(list.tail).to.be.a('null');
    expect(list.length).to.equal(0);
  });

  it('tests a new Single Linked List NODE ', () => {
    node = new LinkedListNode(0);
    expect(node.data).to.equal(0);
    expect(node.next).to.be.a('null');
  });
  it(' tests the push method', () => {
    list.push('a');
    expect(list.head.data).to.be.equal('a');
    expect(list.length).to.be.equal(1);

    list.push(2);
    expect(list.length).to.be.equal(2);
    expect(list.tail.data).to.be.equal(2);

    list.push('three');
    expect(list.tail.next).to.be.a('null');
    expect(list.tail.data).to.be.equal('three');
    expect(list.head.data).to.be.equal('a');
    expect(list.length).to.be.equal(3);

    list.push('four').push(5);
    expect(list.tail.next).to.be.a('null');
    expect(list.tail.data).to.be.equal(5);
  });
  it('test pop ', () => {
    var popped = list.pop();
    expect(popped.data).to.be.equal(5);
    expect(popped.next).to.be.a('null');
    expect(list.tail.data).to.be.equal('four');
    expect(list.length).to.be.equal(4);
  });

  it('tests shift', () => {
    var shifted = list.shift();
    expect(shifted.data).to.be.equal('a');
    expect(shifted.next.data).to.be.equal(2);
    expect(list.length).to.be.equal(3);

    list.shift();
    expect(list.length).to.be.equal(2);
    expect(list.tail.data).to.be.equal('four');
  });

  it('test unshift > empty linked list', () => {
    let list = new SingleLinkedList();
    expect(list.length).to.be.equal(0);

    list.unshift('first');
    expect(list.length).to.be.equal(1);
    expect(list.head.data).to.be.eql(list.tail.data);
    expect(list.head.next).to.be.a('null');

    list.unshift('second');
    expect(list.length).to.be.equal(2);
    expect(list.head.data).to.be.equal('second');
    expect(list.tail.data).to.be.equal('first');
    expect(list.tail.next).to.be.a('null');
  });

  it('test get by index', () => {
    list = new SingleLinkedList()
      .push('one')
      .push('two')
      .push('three');
    expect(() => list.get(3)).to.throw();
    expect(list.get(0).data).to.be.equal('one');
  });

  it('test set with index', () => {
    expect(() => list.set(13)).to.throw();

    expect(list.set(1, 100)).to.be.equal(100);
    expect(list.get(1).data).to.be.equal(100);

    expect(list.set(2)).to.be.undefined;
    expect(list.tail.data).to.be.undefined;
  });
  it('tests the insert function > tests head', () => {
    var inserted = 'INSERTED';
    list = new SingleLinkedList()
      .push('one')
      .push('two')
      .push('three');

    expect(list.insert(0, inserted)).to.be.true;
    expect(list.head.data).to.be.equal(inserted);
  });

  it('tests insert function > tail', () => {
    list = new SingleLinkedList()
      .push('one')
      .push('two')
      .push('three');
    expect(list.insert(2, 'inserted')).to.be.true;
    expect(list.tail.data).to.be.equal('three');
    expect(list.get(2).data).to.be.equal('inserted');
  });

  it('test remove', () => {
    list = new SingleLinkedList()
      .push('one')
      .push('two')
      .push('three');

    let shift = list.remove(0);
    expect(shift.data).to.be.equal('one');
    expect(list.length).to.be.equal(2);

    let pop = list.remove(1);
    expect(pop.data).to.be.equal('three');
    expect(list.length).to.be.equal(1);

    list.push('extra').push('and more extra');
    list.remove(1);
    expect(list.head.data).to.be.equal('two');
    expect(list.tail.data).to.be.equal('and more extra');
  });
});
