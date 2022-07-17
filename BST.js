class Node{
    constructor(data) {
       this.data = data;
       this.left = null;
       this.right = null;
    };
 };
 class BinarySearchTree{
    constructor(){
       this.root = null;
    }
    insert(data){
       var newNode = new Node(data);
       if(this.root === null){
          this.root = newNode;
       }else{
          this.insertNode(this.root, newNode);
       };
    };
    insertNode(node, newNode){
       if(newNode.data < node.data){
          if(node.left === null){
             node.left = newNode;
          }else{
             this.insertNode(node.left, newNode);
          };
       } else {
          if(node.right === null){
             node.right = newNode;
          }else{
             this.insertNode(node.right,newNode);
          };
       };
    };
    find(value){
        if(!this.root) return false
        
        let current = this.root
        let found = false
        while(current && !found){
              if(value < current.value){
                current = current.left
               } else if(value > current.value){
                  current = current.right
               } else {
                    found = current
               } 
              
              }
      
          if(!found) return undefined;
          return found
    
    }
 };
 const BST = new BinarySearchTree();
 BST.insert(1);
 BST.insert(3);
 BST.insert(2);
 console.log(BST.find(3));