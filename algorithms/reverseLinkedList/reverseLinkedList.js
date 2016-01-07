/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return head;
    var next = null;
    var _n;

    while(head.next){
        _n = head.next;
        head.next = next;
        next = head;
        head = _n;
    }
    
    head.next = next;
    return head;
};