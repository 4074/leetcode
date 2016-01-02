/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var result = 0;
    
    if(root === null) return result;
    
    result ++;
    
    var leftDepth = maxDepth(root.left);
    var rightDepth = maxDepth(root.right);
    
    result += leftDepth > rightDepth ? leftDepth : rightDepth;
    
    return result;
};

// Runtime: 168ms 
// Beats 75.50% of javascript submissions