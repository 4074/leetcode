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
var removeZeroSumSublists = function(head) {
    var dummy = new ListNode(0)
    dummy.next = head

    var nodes = {0: dummy}, currrnt = head, sum = 0
    while (currrnt) {
        sum += currrnt.val
        if (nodes[sum]) {
            nodes[sum].next = currrnt.next
        } else {
            nodes[sum] = currrnt
        }
        currrnt = currrnt.next
    }

    return dummy.next
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function buildListNodeLink(arr) {
    var head, pointer
    for (var i=0; i<arr.length; i++) {
        if (pointer) {
            pointer.next = new ListNode(arr[i])
            pointer = pointer.next
        } else {
            pointer = new ListNode(arr[i])
            head = pointer
        }
    }
    return head
}

console.log(
    removeZeroSumSublists(buildListNodeLink([2,2,-2,1,-1,-1])),
    removeZeroSumSublists(buildListNodeLink([0,0]))
)