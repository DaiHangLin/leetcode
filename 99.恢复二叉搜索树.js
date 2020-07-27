/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
   if (!root) {
        return ;
    }
    let curr = root;
    let node1 = null;
    let node2 = null;
    let lastNode = null;
    while (curr) {
        if (curr.left) {
            // 找当前节点的前驱节点
            let preNode = curr.left;
            while (preNode.right && preNode.right != curr) {
                preNode = preNode.right;
            }
            
            if (!preNode.right) { // 设置前驱节点
                preNode.right = curr;
                curr = curr.left;
            } else { // preNode.right == curr；前驱节点已经遍历
                // 记录需要调换的节点
                if (lastNode && lastNode.val > curr.val) {
                    if (node1) {
                        node2 = curr;
                    } else {
                        node1 = lastNode;
                        node2 = curr;
                    }
                }
            
                lastNode = curr;
                curr = curr.right;
                preNode.right = null; // 恢复树的形状
            }
        } else {
            // 记录需要调换的节点
            if (lastNode && lastNode.val > curr.val) {
                if (node1) {
                    node2 = curr;
                } else {
                    node1 = lastNode;
                    node2 = curr;
                }
            }
        
            lastNode = curr;
            curr = curr.right;
        }
        
    }
    const tmp = node1.val;
    node1.val = node2.val;
    node2.val = tmp;
};
// @lc code=end

