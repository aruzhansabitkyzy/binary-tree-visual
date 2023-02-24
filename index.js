class Node {
    constructor(value) {
       this.value  = value
       this.left = this.right = null;
    }
}

let root= null;
 
function insertNode(value, root) {
        if(!root) {
            root = new Node(value);
            return root;
        }

        if(value < root.value) {
            root.left = insertNode(value, root.left)
        }
        else if(value > root.value) {
            root.right = insertNode(value, root.right)
        }


        return root;
}
function insert(value) {
    root = insertNode(value, root)
}



// draw

function randomNum() {
    let num = Math.floor(Math.random() * 100)
    num *= Math.round(Math.random()) ? -1 : 1;
    return num;
}

function draw(node, x, y) {
    if (node === null) return;

    const container = document.getElementById("container");

    const nodeElement = document.createElement("div");
    nodeElement.className = "node";
    nodeElement.innerText = node.value;
    nodeElement.style.top = y + "px";
    nodeElement.style.left = x + "px";
    container.appendChild(nodeElement);

    if (node.left !== null) {
      const leftElement = document.createElement("div");
      leftElement.className = "line";
      leftElement.classList.add('rotate-left');
      leftElement.style.top = y + 70 + "px";
      leftElement.style.left = x - 50 + "px";
      container.appendChild(leftElement);
      draw(node.left, x - 100, y + 100);
    }

    if (node.right !== null) {
      const rightElement = document.createElement("div");
      rightElement.className = "line";
      rightElement.classList.add('rotate-right');
      rightElement.style.top = y + 70 + "px";
      rightElement.style.left = x + 50 + "px";
      container.appendChild(rightElement);
      draw(node.right, x + 100, y + 100);
    }
}


document.body.onkeyup = function(e) {
    if(e.key == "" || e.code== "Space" || e.keyCode == 32) {
       let num = (randomNum())
       insert(num)
       
       draw(root, 500, 50);
    }
}
