fill(0, 0, 0);

var nodes = [];

var Node = function(x, y, size) {
    Node.prototype.allNodes = [];
    Node.prototype.allNodes.push(this);
    nodes.push(this);

    this.x = x;
    this.y = y;
    this.size = 10;
    this.size = size;
    
    this.incoming = []; // like the dendrite
    this.outgoing = []; // like the axon
    
    this.connect = function(target) {
        // text('connecting nodes...', 10, 30);
        this.outgoing.push(target); // add the target to self's outgoing connections
        target.incoming.push(this); // add self to target's incoming connections
        this.size += 5;
    };
    
    this.drawNode = function() {
        ellipse(this.x, this.y, this.size, this.size);
    };
    
    this.drawConnections = function() {
        for (var target = 0; target < this.outgoing.length; target += 1) {
            line(this.x, this.y, this.outgoing[target].x, this.outgoing[target].y);
            // line(this.x,this.y,100,100);
        }

    };
};

var nodes = [];

var nAll = new Node(50,50,10);
var n1 = new Node(200,188,10);
var n2 = new Node(219,297,10);
var n3 = new Node(350,200,10);
var n4 = new Node(150,250,10);
// var n4 = new Node(150,250,10);

// make some connections
n1.connect(n2);
n1.connect(n3);
n3.connect(n4);

//connect nAll to all nodes
for (var node = 0; node < nodes.length; node += 1) {
    nAll.connect(nodes[node]);
}
// draw all nodes and connections
for (var node = 0; node < nodes.length; node += 1) {
    nodes[node].drawNode();
    nodes[node].drawConnections();
}