// https://leetcode.com/problems/merge-two-sorted-lists/
// https://www.algoexpert.io/questions/Merge%20Linked%20Lists
// https://drive.google.com/file/d/1BXGd5AMPpM9ot4LyF_kIncR1Ayp8HDPw/view?usp=sharing



// ITERATIVE
var mergeTwoLists = function(l1, l2) {
    let emptyHead = new ListNode();

    // build the pointer reference to the merged linkedList
    let pointer = emptyHead;
    
    while(l1 && l2){
        if(l1.val < l2.val) {
            pointer.next = l1;  // append the node with lesser value to pointer 
            l1 = l1.next // shorten list to remaining nodes
        } else {
            pointer.next = l2
            l2 = l2.next
        }
        // move pointer 
        pointer = pointer.next;
    }
    
    // append remaining linked list
    if(l1) {
        pointer.next = l1
    }
    if(l2){
        pointer.next = l2
    }
    
    return emptyHead.next
}

// RECURSIVE
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1
    
    if(l1.val < l2.val) {
       l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};
