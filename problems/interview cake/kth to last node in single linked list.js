// https://www.interviewcake.com/question/javascript/kth-to-last-node-in-singly-linked-list

// O(N + (N-k))== O(N) Time, O(1) Space
function kthToLastNode(k, head) {
    // Return the kth to last node in the linked list
    if (k === 0) throw new Error("k is 0");

    let current = head;
    let length = 1;
    while (current.next) {
        length += 1;
        current = current.next;
    }

    if (k > length) throw new Error("K exceeds length of LL");

    current = head;
    const targetNode = length - k;
    let pos = 0;
    while (pos !== targetNode) {
        current = current.next;
        pos += 1;
    }

    return current;
}

// TWO POINTER METHOD
function kthToLastNode(k, head) {
    if (k === 0) throw new Error("K cannot be 0");
    // Return the kth to last node in the linked list
    let left = head;
    let right = head;

    for (let p = 1; p < k; p++) {
        right = right.next;
    }

    while (right.next) {
        left = left.next;
        right = right.next;
    }

    // while(p.)
    return left;
}
