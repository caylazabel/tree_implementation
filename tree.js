'use strict';


//Node Constructor//

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

//Tree Constructor//

function Tree (val){
  this.root = new Node(val)
}


//Example tree//

let exampleTree = new Tree(A);
  exampleTree.root.left.left = new Node(C);
  exampleTree.root.left.right = new Node(D);
  exampleTree.root.right = new Node(E);
  exampleTree.root.right.left = new Node(F);
  exampleTree.root.right.right = new Node(I);
  exampleTree.root.right.left.left = new Node(G);
  exampleTree.root.right.left.right = new Node(H);


  //pre order function//
var preOrder = function(node){
  console.log(node.val)
  if(node.left)preOrder(node.left)
  if(node.right)preOrder(node.right)
}

//post order function//
var postOrder = function(node){
  if(node.left)preOrder(node.left)
  if(node.right)preOrder(node.right)
  console.log(node.val)
}

// in order function//

var inOrder = function(node){
  if(node.left)preOrder(node.left)
  console.log(node.val)
  if(node.right)preOrder(node.right)
}
