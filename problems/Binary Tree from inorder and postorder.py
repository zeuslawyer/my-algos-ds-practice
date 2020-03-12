
# https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
# https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/942/discuss/153572/Python-Recursive-and-Iterative

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def buildTree(self, inOrder, postOrder):

        def helper(start, end):
            if start > end:
                return None

            if len(postOrder) > 0:
                val = postOrder.pop()
                tree = TreeNode(val)
                valIdx = inOrder.index(val)
                print(val, start, end)

                # build the tree, right branch first, that is how postorder trees are built
                tree.right = helper(valIdx+1, end)
                tree.left = helper(start, valIdx-1)

                return tree

        return helper(0, len(inOrder)-1)


inorder = [9, 3, 15, 20, 7]
postorder = [9, 15, 7, 20, 3]
# /**
#  *  return
#  *     3
#       /   \
#      9     20
#           /  \
#         15    7
#  */

ans = Solution().buildTree(inorder, postorder)
print(ans)
