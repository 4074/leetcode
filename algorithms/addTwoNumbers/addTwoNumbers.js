/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let p1 = l1, p2 = l2
    let head, current, bit = 0

    while (p1 || p2 || bit) {
        let val = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + bit
        
        if (val >= 10) {
            val -= 10
            bit = 1
        } else {
            bit = 0
        }

        const item = new ListNode(val)
        if (!head) head = item;
        if (current) {
            current.next = item
        }
        current = item

        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
    }

    return head
};