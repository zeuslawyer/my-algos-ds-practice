const expect = require('chai').expect;

const { Node } = require('../problems/datastructures/doublyLinkedList/Node');
const {
  LinkedList
} = require('../problems/datastructures/doublyLinkedList/DoublyLinkedList');

describe.only('doubly linked list', () => {
  let list;
  let node;
  it.only('test for new LinkedList ', () => {
    list = new LinkedList();
    expect(list.head).to.be.a('null');
    expect(list.tail).to.be.a('null');
    expect(list.length).to.equal(0);
  });

  it.only('tests a new doubly Linked List NODE ', () => {
    node = new Node(0);
    expect(node.data).to.equal(0);
    expect(node.next).to.be.a('null');
  });

  it.only(' tests the push method', () => {
    list.push('a');
    expect(list.head.data).to.be.equal('a');
    expect(list.length).to.be.equal(1);

    list.push(2);
    expect(list.length).to.be.equal(2);
    expect(list.tail.data).to.be.equal(2);
    expect(list.tail.prev.data).to.be.equal('a');

    list.push('four').push(5);
    expect(list.tail.next).to.be.a('null');
    expect(list.tail.data).to.be.equal(5);
    expect(list.tail.prev.data).to.be.equal('four');
    expect(list.length).to.be.equal(4);
  });

  it.only('test pop ', () => {
    var popped = list.pop();
    expect(popped.prev).to.be.null;
    expect(popped.data).to.be.equal(5);
    expect(popped.next).to.be.null;
    expect(list.tail.data).to.be.equal('four');
    expect(list.tail.prev.data).to.be.equal(2);
    expect(list.length).to.be.equal(3);
  });

  it.only('tests shift', () => {
    list = new LinkedList();
    list.push('one');
    var shifted = list.shift();
    expect(shifted.next).to.be.null;
    expect(list.head).to.be.null;

    list.push('three').push('four');
    expect(list.head.data).to.be.equal('three');
    expect(list.tail.data).to.be.equal('four');
    expect(list.length).to.be.equal(2);
  });

  it.only('test unshift > empty linked list', () => {
    let list = new LinkedList();
    expect(list.length).to.be.equal(0);

    list.unshift('first');
    expect(list.length).to.be.equal(1);
    expect(list.head.data).to.be.eql(list.tail.data);
    expect(list.tail.next).to.be.a('null');

    list.unshift('second');
    expect(list.length).to.be.equal(2);
    expect(list.head.data).to.be.equal('second');
    expect(list.tail.data).to.be.equal('first');
    expect(list.tail.next).to.be.a('null');
    expect(list.tail.prev).to.be.eql(list.head);
    expect(list.head.prev).to.be.null;
  });

  it.only('test get by index', () => {
    list = new LinkedList()
      .push('one')
      .push('two')
      .push('three')
      .push('four')
      .push('five');
    expect(() => list.get(5)).to.throw();
    expect(list.get(0).data).to.be.equal('one');
    expect(list.get(4).data).to.be.equal('five');
  });

  it.only('test set with index', () => {
    expect(() => list.set(13)).to.throw();

    expect(list.set(1, 100)).to.be.equal(true);
    expect(list.get(1).data).to.be.equal(100);

    expect(list.set(2)).to.be.true;
    expect(list.tail.data).to.be.equal('five');
    expect(list.tail.prev.data).to.be.equal('four');
  });

  it.only('tests the insert function > tests head', () => {
    var inserted = 'INSERTED';
    list = new LinkedList()
      .push('one')
      .push('two')
      .push('three');

    // test out of range
    expect(list.length).to.be.equal(3);
    expect(list.insert(15, 'throw me')).to.be.false;

    // test insert head
    expect(list.insert(0, inserted)).to.be.true;
    expect(list.head.data).to.be.equal(inserted);

    // test prev link
    expect(list.length).to.be.equal(4);
    expect(list.get(1).prev.data).to.be.equal(inserted);

    // test insert in middle somewhere
    expect(list.insert(3, inserted)).to.be.true;
    expect(list.length).to.be.equal(5);

    // test tail
    expect(list.insert(5, 'last')).to.be.true;
    expect(list.length).to.be.equal(6);
    expect(list.tail.data).to.be.equal('last');
  });

  it.only('tests insert function > tail', () => {
    list = new LinkedList()
      .push('one')
      .push('two')
      .push('three');

    // test out of range
    expect(list.length).to.be.equal(3);
    expect(list.remove(15)).to.be.undefined;

    // // test insert head
    expect(list.remove(0).data).to.be.equal('one');
    expect(list.head.data).to.be.equal('two');

    // test pop
    list.push('four');
    expect(list.length).to.be.equal(3);
    expect(() => list.remove(3).data).to.throw();
    expect(list.remove(2).data).to.be.equal('four');

    // // test prev link
    expect(list.length).to.be.equal(2);
    expect(list.get(1).prev.data).to.be.equal('two');

    // // test remove in middle somewhere
    list.push('four');
    // console.log('LIST LENGTH:', list.length, list.get(0).data,  list.get(1).data,  list.get(2).data)
    expect(list.insert(2, 'inserted')).to.be.true;
    expect(list.remove(1).data).to.be.equal('three');

    // // test tail
    expect(list.remove(5)).to.be.undefined;
    expect(list.tail.data).to.be.equal('four');
  });

  it('test remove', () => {
    list = new LinkedList()
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

  it('reverses a linked list', () => {
    list = new LinkedList()
      .push('one')
      .push('two')
      .push('three');

    let reversed = list.reverse();
    expect(reversed.head).to.be.equal(list.tail);
    expect(list.get(1)).to.be.equal(reversed.get(1));
  });
});
