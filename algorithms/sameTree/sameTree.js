/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var result;
    
    if(p && q){
        result = p.val === q.val;
    }else{
        result = p === q;
    }
    
    return result && (p && q ? (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) : true);
};