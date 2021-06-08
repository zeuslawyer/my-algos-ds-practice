// https://www.algoexpert.io/questions/Remove%20Kth%20Node%20From%20End

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeKthNodeFromEnd(head, k) {
    // Write your code here.
    let left = head;
    let right = head;

    for (let c = 1; c <= k; c++) {
        right = right.next;
    }

    if (right === null) {
        // snip old head, and update head
        left.value = left.next.value;
        left.next = left.next.next;

        return;
    }

    // walk both
    let prev = null;
    while (right !== null) {
        prev = left;
        left = left.next;
        right = right.next;
    }

    prev.next = left.next;
}
