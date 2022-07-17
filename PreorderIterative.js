
 
// Data structure to store a binary tree node
class Node
{
  
    // Function to create a new binary tree node having a given key
   constructor(key)
    {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}
 
class Main
{
    // Iterative function to perform preorder traversal on the tree
    preorderIterative(root)
    {
        // return if the tree is empty
        if (root == null) {
            return;
        }
    
        // create an empty stack and push the root node
        let stack=[]
        stack.push(root);
    
        // loop till stack is empty
        while (stack.length!=0)
        {
            // pop a node from the stack and print it
            let curr = stack.pop();
    
            console.log(curr.data + " ");
    
            // push the right child of the popped node into the stack
            if (curr.right != null) {
                stack.push(curr.right);
            }
    
            // push the left child of the popped node into the stack
            if (curr.left != null) {
                stack.push(curr.left);
            }
    
        
        }
    }
 
}
        
 
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.right.left = new Node(5);
        root.right.right = new Node(6);
        root.right.left.left = new Node(7);
        root.right.left.right = new Node(8);
 const BST=new Main()
        BST.preorderIterative(root);
    
