// Data structure to store a binary tree node
class Node
{
	// Function to create a new binary tree node having a given key
	constructor(key)
	{ this.data = key;
        this.left = null;
        this.right = null;
	}
};

class BinarySearchTree
{
	// Recursive function to perform preorder traversal on the tree
	 preorder(root)
	{
		// return if the current node is empty
		if (root == null) {
			return;
		}
	
		// Display the data part of the root (or current node)
		console.log(root.data);
	
		// Traverse the left subtree
		this.preorder(root.left);
	
		// Traverse the right subtree
		this.preorder(root.right);
	}

	
		
}
		const root = new Node(1);
        //console.log(root.data)
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.right.left = new Node(5);
		root.right.right = new Node(6);
		root.right.left.left = new Node(7);
		root.right.left.right = new Node(8);
const BST=new BinarySearchTree()
		BST.preorder(root);
