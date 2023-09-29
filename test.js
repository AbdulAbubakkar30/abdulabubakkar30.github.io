
// let tree, leaves, slider;

let obj = {
	val: 5,
	
	Up: function() {
		return this.val;
	},
	
	SetVal: function(v) {
		this.val = v;
	}
};

console.log(obj.Up());
obj.SetVal(50);
console.log(obj.Up());

// function preload() {
// 	tree = loadImage('trees.png');
// 	leaves = loadImage('leaves.png');
// }

// function setup() {
// 	createCanvas(400, 256 * 2);
// 	slider = createSlider(0, 400);
// }

// function draw() {
// 	background('#6374de');
	
// 	image(tree, slider.value(), 0, 48 * 2, 256 * 2, 80, 0);
	
// }