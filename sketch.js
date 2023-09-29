const canvasWidth = 400, canvasHeight = 400, FGScalingFactor = 2.0, MMScalingFactor = 1.5625;

let birdOG = {
	posX: 150,
	posY: 0,
	width: 16 * FGScalingFactor,
	height: 16 * FGScalingFactor,
	sprite: undefined,
	frames: 5,
	frameSpeed: 3,
	currentFrame: 0,
	animDirection: 1,
	sprX: 0,
	sprY: 0,
	sprWidth: 16,
	sprHeight: 16,
	hitSpr: 80,
	hit: 0,
	hitCooldown: 0,
	collision: {
		x: 1 * FGScalingFactor,
		y: 2 * FGScalingFactor,
		w: 14 * FGScalingFactor,
		h: 11 * FGScalingFactor
	},
	
	velocity: 0,
	weight: 0.5,
	clickBoost: 8,
	speed: 5,
	lives: 3,
	
	
	Update: function() {
		this.velocity+=this.weight;
		this.posY+=this.velocity;
		if(this.posY > canvasHeight - this.height)
		{
			this.posY = canvasHeight - this.height;
		}
		else if(this.posY < 0)
		{
			this.posY = 0;
			this.velocity = 0;
		}
		
		if(this.hitCooldown > 0)
			this.hitCooldown--;
		
		if(this.hit == 0) {
			if(frameCount % this.frameSpeed == 0)
			{
				this.sprX = this.sprWidth * this.currentFrame;
				this.currentFrame += this.animDirection;
				if(this.currentFrame == this.frames - 1) {
					this.animDirection = -1;
				}
				else if(this.currentFrame == 0)
				{
					this.animDirection = 1;
				}
			}
			trees.renderQueue.forEach(element => {
				element.leaves.forEach(index => {
					trees.leaves[index].cBounds.forEach(leafIndex => {
						if(	this.posX + this.collision.x <= element.scrollX + trees.leaves[index].offsetX + leafIndex.w + leafIndex.x &&
								this.posX + this.collision.w >= element.scrollX + trees.leaves[index].offsetX + leafIndex.x &&
								this.posY + this.collision.y <= element.scrollY + trees.leaves[index].offsetY + leafIndex.h + leafIndex.y &&
								this.posY + this.collision.h >= element.scrollY + trees.leaves[index].offsetY + leafIndex.y &&
								this.hitCooldown == 0)
						{
							//console.log("Collision!");
							// element.hasCollided = true;
							this.hit = 7;
							this.velocity=-10;
							this.hitCooldown = 60;
							// background('#ff0000');
							// playerPoints = 0;
						};
						
					});
				});
			});
		}
		else {
			this.hit--;
			this.sprX = this.hitSpr;
			if(this.hit == 6)
				gameUI.Hurt();
		}
	},
	
	Draw: function() {
		image(this.sprite, this.posX, this.posY, this.width, this.height, this.sprX, this.sprY, this.sprWidth, this.sprHeight);
	},
	
	Reset: function() {
		this.posY = 0;
		this.sprX = 0;
		this.sprW = 0;
		this.currentFrame = 0;
		this.animDirection = 1;
	},
	
	OnClick: function() {
		if(this.hit == 0)
			this.velocity=-this.clickBoost;
	}
};
let fatBird = {
	posX: 150,
	posY: 0,
	width: 16 * FGScalingFactor,
	height: 16 * FGScalingFactor,
	sprite: undefined,
	frames: 2,
	frameSpeed: 3,
	currentFrame: 0,
	animDirection: 1,
	sprX: 0,
	sprY: 0,
	sprWidth: 16,
	sprHeight: 16,
	hitSpr: 32,
	hit: 0,
	hitCooldown: 0,
	collision: {
		x: 1 * FGScalingFactor,
		y: 1 * FGScalingFactor,
		w: 14 * FGScalingFactor,
		h: 13 * FGScalingFactor
	},
	
	velocity: 0,
	weight: 0.8,
	clickBoost: 7,
	speed: 3,
	lives: 5,
	
	Update: function() {
		this.velocity+=this.weight;
		this.posY+=this.velocity;
		if(this.posY > canvasHeight - this.height)
		{
			this.posY = canvasHeight - this.height;
		}
		else if(this.posY < 0)
		{
			this.posY = 0;
			this.velocity = 0;
		}
		
		if(this.hitCooldown > 0)
			this.hitCooldown--;
		
		if(this.hit == 0) {
			if(frameCount % this.frameSpeed == 0)
			{
				this.sprX = this.sprWidth * this.currentFrame;
				this.currentFrame += this.animDirection;
				if(this.currentFrame == this.frames - 1) {
					this.animDirection = -1;
				}
				else if(this.currentFrame == 0)
				{
					this.animDirection = 1;
				}
			}
			trees.renderQueue.forEach(element => {
				element.leaves.forEach(index => {
					trees.leaves[index].cBounds.forEach(leafIndex => {
						if(	this.posX + this.collision.x <= element.scrollX + trees.leaves[index].offsetX + leafIndex.w + leafIndex.x &&
								this.posX + this.collision.w >= element.scrollX + trees.leaves[index].offsetX + leafIndex.x &&
								this.posY + this.collision.y <= element.scrollY + trees.leaves[index].offsetY + leafIndex.h + leafIndex.y &&
								this.posY + this.collision.h >= element.scrollY + trees.leaves[index].offsetY + leafIndex.y &&
								this.hitCooldown == 0)
						{
							//console.log("Collision!");
							// element.hasCollided = true;
							this.hit = 7;
							this.velocity=-10;
							this.hitCooldown = 60;
							// background('#ff0000');
							// playerPoints = 0;
						};
						
					});
				});
			});
		}
		else {
			this.hit--;
			this.sprX = this.hitSpr;
			if(this.hit == 6)
				gameUI.Hurt();
		}
	},
	
	Draw: function() {
		image(this.sprite, this.posX, this.posY, this.width, this.height, this.sprX, this.sprY, this.sprWidth, this.sprHeight);
	},
	
	Reset: function() {
		this.posY = 0;
		this.sprX = 0;
		this.sprW = 0;
		this.currentFrame = 0;
		this.animDirection = 1;
	},
	
	OnClick: function() {
		if(this.hit == 0)
			this.velocity=-this.clickBoost;
	}
};
let birdRobin = {
	posX: 150,
	posY: 0,
	width: 16 * FGScalingFactor,
	height: 16 * FGScalingFactor,
	sprite: undefined,
	frames: 5,
	frameSpeed: 2,
	currentFrame: 0,
	animDirection: 1,
	sprX: 0,
	sprY: 0,
	sprWidth: 16,
	sprHeight: 16,
	hitSpr: 80,
	hit: false,
	collision: {
		x: 1 * FGScalingFactor,
		y: 1 * FGScalingFactor,
		w: 13 * FGScalingFactor,
		h: 12 * FGScalingFactor
	},
	
	velocity: 0,
	weight: 0.45,
	clickBoost: 8,
	speed: 7,
	lives: 1,
	
	Update: function() {
		this.velocity+=this.weight;
		this.posY+=this.velocity;
		if(this.posY > canvasHeight - this.height)
		{
			this.posY = canvasHeight - this.height;
		}
		else if(this.posY < 0)
		{
			this.posY = 0;
			this.velocity = 0;
		}
		
		if(this.hit)
			gameUI.Hurt();

		if(frameCount % this.frameSpeed == 0)
		{
			this.sprX = this.sprWidth * this.currentFrame;
			this.currentFrame += this.animDirection;
			if(this.currentFrame == this.frames - 1) {
				this.animDirection = -1;
			}
			else if(this.currentFrame == 0)
			{
				this.animDirection = 1;
			}
		}
		trees.renderQueue.forEach(element => {
			element.leaves.forEach(index => {
				trees.leaves[index].cBounds.forEach(leafIndex => {
					if(	this.posX + this.collision.x <= element.scrollX + trees.leaves[index].offsetX + leafIndex.w + leafIndex.x &&
							this.posX + this.collision.w >= element.scrollX + trees.leaves[index].offsetX + leafIndex.x &&
							this.posY + this.collision.y <= element.scrollY + trees.leaves[index].offsetY + leafIndex.h + leafIndex.y &&
							this.posY + this.collision.h >= element.scrollY + trees.leaves[index].offsetY + leafIndex.y)
					{
						this.hit = true;
						this.sprX = this.hitSpr;
					};
					
				});
			});
		});
	},
	
	Draw: function() {
		image(this.sprite, this.posX, this.posY, this.width, this.height, this.sprX, this.sprY, this.sprWidth, this.sprHeight);
	},
	
	Reset: function() {
		this.posY = 0;
		this.sprX = 0;
		this.sprW = 0;
		this.currentFrame = 0;
		this.animDirection = 1;
		this.hit = false;
	},
	
	OnClick: function() {
		if(this.hit == 0)
			this.velocity=-this.clickBoost;
	}
};
let BG = {
	skySprite: undefined,
	skySpriteX: 0,
	skySpriteY: 0,
	skySpriteWidth: 128,
	skySpriteHeight: 128,
	forestBGSprite: undefined,
	forestBGX: 0,
	forestBGY: 0,
	forestBGWidth: 256,
	forestBGHeight: 128,
	forestBGScroll1: 0,
	forestBGScroll2: 400,
	forestBGScollSpeed: 1,
	
	Update: function() {
		this.forestBGScroll1-=this.forestBGScollSpeed;
		this.forestBGScroll2-=this.forestBGScollSpeed;
		if(this.forestBGScroll1 < -canvasWidth)
		{
			this.forestBGScroll1 = canvasWidth - this.forestBGScollSpeed;
		}
		else if(this.forestBGScroll2 < -canvasWidth)
		{
			this.forestBGScroll2 = canvasWidth - this.forestBGScollSpeed;
		}
	},
	
	Draw: function() {
		image(this.skySprite, 0, 0, canvasWidth, canvasHeight, this.skySpriteX, this.skySpriteY, this.skySpriteWidth, this.skySpriteHeight);
		
		image(this.forestBGSprite, this.forestBGScroll1, 0, canvasWidth, canvasHeight, this.forestBGX, this.forestBGY, this.forestBGWidth/2, this.forestBGHeight);
		image(this.forestBGSprite, this.forestBGScroll2, 0, canvasWidth, canvasHeight, this.forestBGWidth/2, this.forestBGY, this.forestBGWidth/2, this.forestBGHeight);
	}
};
let trees = {
	sprites: {
		leaves: undefined,
		tree: undefined
	},
	
	leaves: [
		{
			sWidth: 48 * FGScalingFactor,
			sHeight: 32 * FGScalingFactor,
			originX: 0,
			originY: 48,
			width: 48,
			height: 32,
			offsetX: 6 * FGScalingFactor,
			offsetY: 0,
			cBounds: [
				{
					x: 2 * FGScalingFactor,
					y: 21 * FGScalingFactor,
					w: 30 * FGScalingFactor,
					h: 8 * FGScalingFactor
				},
				{
					x: 8 * FGScalingFactor,
					y: 12 * FGScalingFactor,
					w: 20 * FGScalingFactor,
					h: 9 * FGScalingFactor
				},
				{
					x: 12 * FGScalingFactor,
					y: 4 * FGScalingFactor,
					w: 11 * FGScalingFactor,
					h: 8 * FGScalingFactor
				},
			]
		}, //0
		{
			sWidth: 64 * FGScalingFactor,
			sHeight: 32 * FGScalingFactor,
			originX: 48,
			originY: 48,
			width: 64,
			height: 32,
			offsetX: -6 * FGScalingFactor,
			offsetY: 27 * FGScalingFactor,
			cBounds: [
				{
					x: 3 * FGScalingFactor,
					y: 18 * FGScalingFactor,
					w: 55 * FGScalingFactor,
					h: 10 * FGScalingFactor
				},
				{
					x: 12 * FGScalingFactor,
					y: 9 * FGScalingFactor,
					w: 37 * FGScalingFactor,
					h: 9 * FGScalingFactor
				},
				{
					x: 17 * FGScalingFactor,
					y: 3 * FGScalingFactor,
					w: 27 * FGScalingFactor,
					h: 6 * FGScalingFactor
				},
			]
		}, //1
		{
			sWidth: 80 * FGScalingFactor,
			sHeight: 48 * FGScalingFactor,
			originX: 112,
			originY: 48,
			width: 80,
			height: 48,
			offsetX: -14 * FGScalingFactor,
			offsetY: 53 * FGScalingFactor,
			cBounds: [
				{
					x: 6 * FGScalingFactor,
					y: 15 * FGScalingFactor,
					w: 66 * FGScalingFactor,
					h: 11 * FGScalingFactor
				},
				{
					x: 12 * FGScalingFactor,
					y: 7 * FGScalingFactor,
					w: 54 * FGScalingFactor,
					h: 8 * FGScalingFactor
				},
				{
					x: 16 * FGScalingFactor,
					y: 3 * FGScalingFactor,
					w: 46 * FGScalingFactor,
					h: 4 * FGScalingFactor
				},
			]
		}, //2
		{
			sWidth: 112 * FGScalingFactor,
			sHeight: 48 * FGScalingFactor,
			originX: 192,
			originY: 48,
			width: 112,
			height: 48,
			offsetX: -25 * FGScalingFactor,
			offsetY: 79 * FGScalingFactor,
			cBounds: [
				{
					x: 6 * FGScalingFactor,
					y: 18 * FGScalingFactor,
					w: 85 * FGScalingFactor,
					h: 10 * FGScalingFactor
				},
				{
					x: 12 * FGScalingFactor,
					y: 9 * FGScalingFactor,
					w: 74 * FGScalingFactor,
					h: 9 * FGScalingFactor
				},
				{
					x: 16 * FGScalingFactor,
					y: 4 * FGScalingFactor,
					w: 66 * FGScalingFactor,
					h: 5 * FGScalingFactor
				},
			]
		}, //3
		{
			sWidth: 112 * FGScalingFactor,
			sHeight: 48 * FGScalingFactor,
			originX: 304,
			originY: 48,
			width: 112,
			height: 48,
			offsetX: -31 * FGScalingFactor,
			offsetY: 107 * FGScalingFactor,
			cBounds: [
				{
					x: 7 * FGScalingFactor,
					y: 15 * FGScalingFactor,
					w: 98 * FGScalingFactor,
					h: 14 * FGScalingFactor
				},
				{
					x: 11 * FGScalingFactor,
					y: 8 * FGScalingFactor,
					w: 89 * FGScalingFactor,
					h: 7 * FGScalingFactor
				},
				{
					x: 14 * FGScalingFactor,
					y: 4 * FGScalingFactor,
					w: 84 * FGScalingFactor,
					h: 4 * FGScalingFactor
				},
			]
		}, //4
		{
			sWidth: 128 * FGScalingFactor,
			sHeight: 48 * FGScalingFactor,
			originX: 416,
			originY: 48,
			width: 128,
			height: 48,
			offsetX: -38 * FGScalingFactor,
			offsetY: 131 * FGScalingFactor,
			cBounds: [
				{
					x: 5 * FGScalingFactor,
					y: 19 * FGScalingFactor,
					w: 115 * FGScalingFactor,
					h: 13 * FGScalingFactor
				},
				{
					x: 11 * FGScalingFactor,
					y: 9 * FGScalingFactor,
					w: 103 * FGScalingFactor,
					h: 10 * FGScalingFactor
				},
				{
					x: 25 * FGScalingFactor,
					y: 4 * FGScalingFactor,
					w: 84 * FGScalingFactor,
					h: 5 * FGScalingFactor
				},
			]
		}, //5
		{
			sWidth: 128 * FGScalingFactor,
			sHeight: 48 * FGScalingFactor,
			originX: 544,
			originY: 48,
			width: 128,
			height: 48,
			offsetX: -39 * FGScalingFactor,
			offsetY: 159 * FGScalingFactor,
			cBounds: [
				{
					x: 6 * FGScalingFactor,
					y: 30 * FGScalingFactor,
					w: 77 * FGScalingFactor,
					h: 6 * FGScalingFactor
				},
				{
					x: 2 * FGScalingFactor,
					y: 14 * FGScalingFactor,
					w: 122 * FGScalingFactor,
					h: 16 * FGScalingFactor
				},
				{
					x: 6 * FGScalingFactor,
					y: 5 * FGScalingFactor,
					w: 115 * FGScalingFactor,
					h: 9 * FGScalingFactor
				},
			]
		}, //6
		{
			sWidth: 112 * FGScalingFactor,
			sHeight: 48 * FGScalingFactor,
			originX: 672,
			originY: 48,
			width: 112,
			height: 48,
			offsetX: -23 * FGScalingFactor,
			offsetY: 188 * FGScalingFactor,
			cBounds: [
				{
					x: 6 * FGScalingFactor,
					y: 24 * FGScalingFactor,
					w: 86 * FGScalingFactor,
					h: 13 * FGScalingFactor
				},
				{
					x: 10 * FGScalingFactor,
					y: 12 * FGScalingFactor,
					w: 78 * FGScalingFactor,
					h: 12 * FGScalingFactor
				},
				{
					x: 13 * FGScalingFactor,
					y: 6 * FGScalingFactor,
					w: 72 * FGScalingFactor,
					h: 6 * FGScalingFactor
				},
			]
		}, //7
	], // use 0 as originY for shaded
	tree: {
		width: 48 * FGScalingFactor,
		height: 256 * FGScalingFactor,
		sprX: 80,
		sprY: 0,
		sprWidth: 48,
		sprHeight: 256
	},
	treeShade: [
		{
			sWidth: 16 * FGScalingFactor,
			sHeight: 48 * FGScalingFactor,
			originX: 0,
			originY: 0,
			width: 16,
			height: 48
		}, //0
		{
			sWidth: 32 * FGScalingFactor,
			sHeight: 48 * FGScalingFactor,
			originX: 16,
			originY: 0,
			width: 32,
			height: 48
		}, //1
		{
			sWidth: 32 * FGScalingFactor,
			sHeight: 64 * FGScalingFactor,
			originX: 48,
			originY: 0,
			width: 32,
			height: 64
		}, //2
		{
			sWidth: 32 * FGScalingFactor,
			sHeight: 48 * FGScalingFactor,
			originX: 0,
			originY: 64,
			width: 32,
			height: 48
		}, //3
		{
			sWidth: 32 * FGScalingFactor,
			sHeight: 48 * FGScalingFactor,
			originX: 32,
			originY: 64,
			width: 32,
			height: 48
		}, //4
		{
			sWidth: 48 * FGScalingFactor,
			sHeight: 48 * FGScalingFactor,
			originX: 0,
			originY: 112,
			width: 48,
			height: 48
		}, //5
		{
			sWidth: 48 * FGScalingFactor,
			sHeight: 64 * FGScalingFactor,
			originX: 0,
			originY: 160,
			width: 48,
			height: 64
		}, //6
		{
			sWidth: 48 * FGScalingFactor,
			sHeight: 32 * FGScalingFactor,
			originX: 0,
			originY: 224,
			width: 48,
			height: 32
		}, //7
	],
	
	renderQueue: [
		// {
		//   scrollX: 400,
		// }
	],
	
	scrollSpeed: 5,
	treeSpawnTimer: 90,
	prevGap: 0,
	
	Update: function() {
		if(gameFrame % this.treeSpawnTimer == 0)
		{
			leavesArr = [0, 1, 2, 3, 4, 5, 6, 7];
			let gap;
			do {
				gap = Math.ceil((Math.random() * 100) % 5) + 1;
			} while (gap == this.prevGap);
			this.prevGap = gap;
			
			leavesArr.splice(gap, 2);
			this.renderQueue.push({scrollX: 600, scrollY: 0, leaves: leavesArr, hasPoint: true});
		}//
		if(this.renderQueue.length > 0 && this.renderQueue[0].scrollX < -this.tree.sprWidth*3.125)
			this.renderQueue.shift();
		this.renderQueue.forEach(element => {
			element.scrollX-=this.scrollSpeed
			if(element.scrollX < player.posX && element.hasPoint)
			{
				playerPoints++;
				// console.log(playerPoints);
				element.hasPoint = false;
			}
		});
	},
	
	Draw: function() {
		this.renderQueue.forEach(element => {
			image(this.sprites.tree, element.scrollX, 0, this.tree.width, this.tree.height, this.tree.sprX, this.tree.sprY, this.tree.sprWidth, this.tree.sprHeight);
			image(this.sprites.leaves, element.scrollX + this.leaves[0].offsetX, 0, this.leaves[0].sWidth, this.leaves[0].sHeight, this.leaves[0].originX, this.leaves[0].originY, this.leaves[0].width, this.leaves[0].height)
			let prvIndex = 0;
			element.leaves.forEach(index => {
				let shade = 0;
				if(index - prvIndex != 1)
					shade = this.leaves[index].originY;
				image(this.sprites.leaves, element.scrollX + this.leaves[index].offsetX, this.leaves[index].offsetY, this.leaves[index].sWidth, this.leaves[index].sHeight, this.leaves[index].originX, shade, this.leaves[index].width, this.leaves[index].height)
				prvIndex = index;
			});
			
		})
		// image(this.sprites.tree, 0, 0, this.tree.width * 3.125, this.tree.height * 3.125, this.tree.originX, this.tree.originY, this.tree.width, this.tree.height);
	}
};
let mainMenu = {
	sprite: {
		title: undefined,
		titleBG: undefined,
		titleBGGrad: undefined,
		startText: undefined,
		birdChoiceMenu: undefined,
		button: undefined,
	},
	
	sprGradX: 0,
	sprGradY: 0,
	sprGradW: 256,
	sprGradH: 256,
	
	titleX: 67 * MMScalingFactor,
	titleY: 23 * MMScalingFactor,
	titleW: 116 * MMScalingFactor,
	titleH: 78 * MMScalingFactor,
	sprTitleX: 0,
	sprTitleY: 0,
	sprTitleW: 116,
	sprTitleH: 78,
	titleScale: 0,
	scaleDirection: 1,
	
	titleBGX: 0,
	titleBGY: 1 * MMScalingFactor,
	titleBGW: canvasWidth,
	titleBGH: 132 * MMScalingFactor,
	sprTitleBGX: 0,
	sprTitleBGY: 0,
	sprTitleBGW: 256,
	sprTitleBGH: 132,
	
	startTextX: 43 * MMScalingFactor,
	startTextY: 187 * MMScalingFactor,
	startTextW: 170 * MMScalingFactor,
	startTextH: 26 * MMScalingFactor,
	sprstartTextX: 0,
	sprstartTextY: 0,
	sprstartTextW: 170,
	sprstartTextH: 26,
	
	isBirdChoiceMenu: false,
	
	sprBirdChoiceMenuX: 0,
	sprBirdChoiceMenuY: 0,
	sprBirdChoiceMenuW: 128,
	sprBirdChoiceMenuH: 128,
	
	sprButtonX: 0,
	sprButtonY: 0,
	sprButtonW: 16,
	sprButtonH: 16,
	buttonW: 28 * MMScalingFactor * 2,
	buttonH: 28 * MMScalingFactor * 2,
	
	button1X: 18 * MMScalingFactor * 2,
	button1Y: 66 * MMScalingFactor * 2,
	button2X: 50 * MMScalingFactor * 2,
	button2Y: 66 * MMScalingFactor * 2,
	button3X: 82 * MMScalingFactor * 2,
	button3Y: 66 * MMScalingFactor * 2,
	
	wait1: 0,
	wait2: 0,
	wait3: 0,
	anim1: 0,
	anim2: 0,
	anim3: 0,
	
	birdOffsetX: 4 * MMScalingFactor * 2,
	birdOffsetY: 4 * MMScalingFactor * 2,
	birdOffsetW: 1.25 * MMScalingFactor * 2,
	birdOffsetH: 1.25 * MMScalingFactor * 2,
	
	cFrame1: 0,
	cFrame2: 0,
	cFrame3: 0,
	animDir1: 1,
	animDir2: 1,
	animDir3: 1,
	
	transWait: 0,
	transBird: null,
	
	Update: function() {
		
		if(!this.isBirdChoiceMenu)
		{
			this.titleScale += this.scaleDirection * 1;
			if(this.titleScale > 25)
				this.scaleDirection = -1;
			else if(this.titleScale < 0)
				this.scaleDirection = 1;
		}
		else
		{
			if(this.wait1 == 0)
				mainMenu.anim1 = 0;
			else
			{
				this.wait1--;
				this.transWait++;
			}
			if(this.wait2 == 0)
				mainMenu.anim2 = 0;
			else
			{
				this.wait2--;
				this.transWait++;
			}
			if(this.wait3 == 0)
				mainMenu.anim3 = 0;
			else
			{
				this.wait3--;
				this.transWait++;
			}
			
			if(this.transWait == 5)
			{
				// Reset();
				playerPoints = 0;
				Scene = GameTrans;
				gameUI.hearts = [];
				trees.renderQueue = [];
				switch (this.transBird) {
					case 1:
						birdRobin.Reset()
						player = birdRobin;
						return;
						break;
					case 2:
						birdOG.Reset();
						player = birdOG;
						return;
						break;
					case 3:
						fatBird.Reset();
						player = fatBird;
						return;
						break;
				
					default:
						break;
				}
			}
			
			if(frameCount % birdRobin.frameSpeed == 0)
			{
				// this.sprX += this.sprWidth * this.animDirection;
				this.cFrame1 += this.animDir1;
				if(this.cFrame1 == birdRobin.frames - 1) {
					this.animDir1 = -1;
				}
				else if(this.cFrame1 == 0)
				{
					this.animDir1 = 1;
				}
			}
		
			if(frameCount % birdOG.frameSpeed == 0)
			{
				// this.sprX += this.sprWidth * this.animDirection;
				this.cFrame2 += this.animDir2;
				if(this.cFrame2 == birdOG.frames - 1) {
					this.animDir2 = -1;
				}
				else if(this.cFrame2 == 0)
				{
					this.animDir2 = 1;
				}
			}
		
			if(frameCount % fatBird.frameSpeed == 0)
			{
				// this.sprX += this.sprWidth * this.animDirection;
				this.cFrame3 += this.animDir3;
				if(this.cFrame3 == fatBird.frames - 1) {
					this.animDir3 = -1;
				}
				else if(this.cFrame3 == 0)
				{
					this.animDir3 = 1;
				}
			}
		}
	},
	
	Draw: function() {
		if(!this.isBirdChoiceMenu)
		{
			BG.Update();
			BG.Draw();
			image(this.sprite.titleBGGrad, 0, 0, canvasWidth, canvasHeight, this.sprGradX, this.sprGradY, this.sprGradW, this.sprGradH);
			image(this.sprite.titleBG, this.titleBGX, this.titleBGY, this.titleBGW, this.titleBGH, this.sprTitleBGX, this.sprTitleBGY, this.sprTitleBGW, this.sprTitleBGH);
			image(this.sprite.title, this.titleX - this.titleScale, this.titleY - this.titleScale, this.titleW + 2 * this.titleScale, this.titleH + 2 * this.titleScale, this.sprTitleX, this.sprTitleY, this.sprTitleW, this.sprTitleH);
			image(this.sprite.startText, this.startTextX - 0.125 * this.titleScale, this.startTextY - 0.125 * this.titleScale, this.startTextW + 0.25 * this.titleScale, this.startTextH + 0.25 * this.titleScale, this.sprstartTextX, this.sprstartTextY, this.sprstartTextW, this.sprstartTextH);
		}
		else
		{
			image(this.sprite.birdChoiceMenu, 0, 0, canvasWidth, canvasHeight, this.sprBirdChoiceMenuX, this.sprBirdChoiceMenuY, this.sprBirdChoiceMenuW, this.sprBirdChoiceMenuH);
			
			image(this.sprite.button, this.button1X, this.button1Y, this.buttonW, this.buttonH, this.sprButtonX + this.anim1, this.sprButtonY, this.sprButtonW, this.sprButtonH);
			image(this.sprite.button, this.button2X, this.button2Y, this.buttonW, this.buttonH, this.sprButtonX + this.anim2, this.sprButtonY, this.sprButtonW, this.sprButtonH);
			image(this.sprite.button, this.button3X, this.button3Y, this.buttonW, this.buttonH, this.sprButtonX + this.anim3, this.sprButtonY, this.sprButtonW, this.sprButtonH);
			
			// console.log(this.cFrame1);
			image(birdRobin.sprite, this.button1X + this.birdOffsetX, this.button1Y + this.birdOffsetY + this.anim1/4, birdRobin.sprWidth * this.birdOffsetW, birdRobin.sprHeight * this.birdOffsetH, birdRobin.sprX + this.cFrame1 * birdRobin.sprWidth, birdRobin.sprY, birdRobin.sprWidth, birdRobin.sprHeight);
			image(birdOG.sprite, this.button2X + this.birdOffsetX, this.button2Y + this.birdOffsetY + this.anim2/4, birdOG.sprWidth * this.birdOffsetW, birdOG.sprHeight * this.birdOffsetH, birdOG.sprX + this.cFrame2 * birdOG.sprWidth, birdOG.sprY, birdOG.sprWidth, birdOG.sprHeight);
			image(fatBird.sprite, this.button3X + this.birdOffsetX, this.button3Y + this.birdOffsetY + this.anim3/4, fatBird.sprWidth * this.birdOffsetW, fatBird.sprHeight * this.birdOffsetH, fatBird.sprX + this.cFrame3 * fatBird.sprWidth, fatBird.sprY, fatBird.sprWidth, fatBird.sprHeight);
			
		}
	},
	
	Reset: function() {
		
	this.cFrame1 = 0;
	this.cFrame2 = 0;
	this.cFrame3 = 0;
	this.animDir1 = 1;
	this.animDir2 = 1;
	this.animDir3 = 1;
	this.transWait = 0;
	this.transBird = null;
	this.wait1 = 0;
	this.wait2 = 0;
	this.wait3 = 0;
	this.anim1 = 0;
	this.anim2 = 0;
	this.anim3 = 0;
	
	},
	
	OnClick: function() {
		if(!mainMenu.isBirdChoiceMenu)
			mainMenu.isBirdChoiceMenu = true;
		else
		{
			if(mouseX > mainMenu.button1X &&
			mouseX < mainMenu.button1X + mainMenu.buttonW &&
			mouseY > mainMenu.button1Y &&
			mouseY < mainMenu.button1Y + mainMenu.buttonH
			)
			{
				mainMenu.anim1 = 16;
				mainMenu.wait1 = 5;
				mainMenu.transBird = 1;
				audio.ButtonClick();
			}
			if(mouseX > mainMenu.button2X &&
			mouseX < mainMenu.button2X + mainMenu.buttonW &&
			mouseY > mainMenu.button2Y &&
			mouseY < mainMenu.button2Y + mainMenu.buttonH
			)
			{
				mainMenu.anim2 = 16;
				mainMenu.wait2 = 5;
				mainMenu.transBird = 2;
				audio.ButtonClick();
			}
			if(mouseX > mainMenu.button3X &&
			mouseX < mainMenu.button3X + mainMenu.buttonW &&
			mouseY > mainMenu.button3Y &&
			mouseY < mainMenu.button3Y + mainMenu.buttonH
			)
			{
				mainMenu.anim3 = 16;
				mainMenu.wait3 = 5;
				mainMenu.transBird = 3;
				audio.ButtonClick();
			}
			
			
		}
	}
}
let gameUI = {
	sprite: {
		helthBarBG: undefined,
		heart: undefined,
		scoreboard: undefined,
		resultBoard: undefined,
		UIButtons: undefined
	},
	
	healthBarX: 0,
	healthBarY: 0,
	healthBarW: 128 * FGScalingFactor,
	healthBarH: 16 * FGScalingFactor,
	sprHealthBarX: 0,
	sprHealthBarY: 0,
	sprHealthBarW: 128,
	sprHealthBarH: 16,
	
	hearts:[],
	heartW: 16 * FGScalingFactor,
	heartH: 16 * FGScalingFactor,
	sprHeartW: 16,
	sprHeartH: 16,
	heartFrames: 5,
	
	paused: false,
	pauseScreen: false,
	pauseWait: 0,
	
	animPause: 0,
	animPauseWait: 0,
	animResume: 16,
	animResumeWait: 0,
	animRestart: 32,
	animRestartWait: 0,
	animHome: 48,
	animHomeWait: 0,
	
	dead: false,
	
	Update: function() {
		
		// if(!this.paused) {
			if(this.pauseWait > 0) {
				this.pauseWait--;
			}
			else {
				this.pauseWait = 0;
			}
		// }
		
		if(this.animPauseWait > 0) {
			this.animPauseWait--;
			if(this.animPauseWait == 0)
				this.Draw = this.PauseScreenMenu;
				// this.pauseScreen = true;
		}
		else {
			this.animPause = 0;
		}
		
		if(this.animResumeWait > 0) {
			this.animResumeWait--;
				if(this.animResumeWait == 0) {
					this.Draw = this.GameMenu;
					// this.pauseScreen = false;
					this.paused = false;
				}
		}
		else {
			this.animResume = 16;
		}
		
		if(this.animRestartWait > 0) {
			this.animRestartWait--;
			if(this.animRestartWait == 0)
				{
					Reset();
					audio.Begin();
					Scene = MainMenu;
					return 1;
				}
		}
		else {
			this.animRestart = 32;
			this.animHome = 48;
		}
		
		return 0;
	},
	
	Hurt: function() {
		audio.BirdHurt();
		for(let i = this.hearts.length - 1; i > -1; i--) {
			if(this.hearts[i].active) {
				this.hearts[i].active = false;
				break;
			}
		}
		if(!this.hearts[0].active) {
			this.dead = true;
			this.paused = true;
			this.Draw = this.DeathScreenMenu;
		}
	},
	
	Draw: undefined,
	
	/*
	function() {
		// if((this.pauseWait == 0 && !this.paused) || (this.pauseWait != 0 && this.paused)) {
		// if(!this.pauseScreen) {
		// 	image(this.sprite.helthBarBG, this.healthBarX, this.healthBarY, this.healthBarW, this.healthBarH, this.sprHealthBarX, this.sprHealthBarY, this.sprHealthBarW, this.sprHealthBarH);
		// 	this.hearts.forEach(element => {
		// 		element.Update();
		// 		element.Draw();
		// 	})
			
		// 	image(this.sprite.scoreboard, 304, 0, 96, 32);
			
		// 	textSize(16);
		// 	textAlign(RIGHT, CENTER);
		// 	fill('#14191a');
		// 	text(playerPoints.toString(), 390, 18);
		// 	image(this.sprite.UIButtons, 368, 32, 32, 32, this.animPause, 0, 16, 16);
		// }
		// else
		// {
		// 	background(0, 0, 0, 128);
		// 	fill(200, 200, 250, 255);
		// 	textAlign(CENTER, CENTER);
		// 	textSize(64);
		// 	text('PAUSED', 200, 100);
		// 	image(this.sprite.UIButtons, 264, 252, 96, 96, this.animResume, 0, 16, 16); //resume
		// 	image(this.sprite.UIButtons, 152, 252, 96, 96, this.animRestart, 0, 16, 16); //restart
		// 	image(this.sprite.UIButtons, 40, 252, 96, 96, this.animHome, 0, 16, 16); //home
		// }
		
	},*/
	
	GameMenu: function() {
		image(this.sprite.helthBarBG, this.healthBarX, this.healthBarY, this.healthBarW, this.healthBarH, this.sprHealthBarX, this.sprHealthBarY, this.sprHealthBarW, this.sprHealthBarH);
		this.hearts.forEach(element => {
			element.Update();
			element.Draw();
		})
		
		image(this.sprite.scoreboard, 304, 0, 96, 32);
		
		textSize(16);
		textAlign(RIGHT, CENTER);
		fill('#14191a');
		text(playerPoints.toString(), 390, 18);
		image(this.sprite.UIButtons, 368, 32, 32, 32, this.animPause, 0, 16, 16);
	},
	
	PauseScreenMenu: function() {
		background(0, 0, 0, 128);
		fill(200, 200, 250, 255);
		textAlign(CENTER, CENTER);
		textSize(64);
		text('PAUSED', 200, 100);
		image(this.sprite.UIButtons, 264, 252, 96, 96, this.animResume, 0, 16, 16); //resume
		image(this.sprite.UIButtons, 152, 252, 96, 96, this.animRestart, 0, 16, 16); //restart
		image(this.sprite.UIButtons, 40, 252, 96, 96, this.animHome, 0, 16, 16); //home
	},
	
	DeathScreenMenu: function() {
		
		background(0, 0, 0, 128);//16
		image(this.sprite.UIButtons, 96, 252, 96, 96, this.animHome, 0, 16, 16); //home
		image(this.sprite.UIButtons, 208, 252, 96, 96, this.animRestart, 0, 16, 16); //restart
		image(this.sprite.resultBoard, 56, 16, 288, 192, 0, 0, 48, 32);
		
		textAlign(CENTER, CENTER);
		textSize(32);
		fill(200, 200, 250, 255);
		text('Score:', 200, 65);
		fill('#d2ff08');
		text(playerPoints.toString(), 200, 135);
		//button click not meant to be here
		// Reset();
		// Scene = MainMenu;
	},
	
	Reset: function() {
		this.paused = false;
		this.dead = false;
		this.Draw = this.GameMenu;
		// this.pauseScreen = false;
		
	},
	
	OnClick: function() {
		if(!this.dead) {
			if(!this.paused){
				if(mouseX > 368 &&
					mouseY > 32 &&
					mouseY < 64)
				{
					this.animPause = 64;
					this.animPauseWait = 5;
					this.pauseWait = 5;
					this.paused = true;
					audio.ButtonClick();
				}
			}
			else {
				if(mouseX > 264 &&
					mouseX < 360 &&
					mouseY > 252 &&
					mouseY < 348)
				{
					this.animResume = 80;
					this.animResumeWait = 5;
					this.pauseWait = 5;
					audio.ButtonClick();
				}
				else if(mouseX > 152 &&
					mouseX < 248 &&
					mouseY > 252 &&
					mouseY < 348)
				{
					this.animRestart = 96;
					this.animRestartWait = 5;
					audio.ButtonClick();
				}
				else if(mouseX > 40 &&
					mouseX < 136 &&
					mouseY > 252 &&
					mouseY < 348)
				{
					mainMenu.isBirdChoiceMenu = false;
					this.animHome = 112;
					this.animRestartWait = 5;
					audio.ButtonClick();
				}
			}
		}
		else {
			if(mouseX > 208 &&
				mouseX < 304 &&
				mouseY > 252 &&
				mouseY < 348)
			{
				this.animRestart = 96;
				this.animRestartWait = 5;
				audio.ButtonClick();
			}
			else if(mouseX > 96 &&
				mouseX < 192 &&
				mouseY > 252 &&
				mouseY < 348)
			{
				mainMenu.isBirdChoiceMenu = false;
				this.animHome = 112;
				this.animRestartWait = 5;
				audio.ButtonClick();
			}
		}
	}
	
}
let audio = {
	mainMenu: undefined,
	game: undefined,
	birdHurt: undefined,
	buttonClick: undefined,
	
	volMM: 0,
	volG: 0,
	
	MM: true,
	G: false,
	
	Update: function() {
		this.mainMenu.setVolume(this.volMM);
		this.game.setVolume(this.volG);
		
		if(this.MM) {
			if(this.volMM < 1)
				this.volMM+=0.02;
			if(this.volG > 0)
				this.volG -= 0.02;
		}
		else {
			if(this.volG < 1)
				this.volG+=0.02;
			if(this.volMM > 0)
				this.volMM -= 0.02;
		}
	},
	
	Begin: function() {
		// this.mainMenu.play();
		this.MM = true;
	},
	
	GameBegin: function() {
		// this.game.play();
		this.MM = false;
	},
	
	BirdHurt: function() {
		this.birdHurt.play();
	},
	
	ButtonClick: function() {
		this.buttonClick.play();
	}
}

function Reset() {
	mainMenu.Reset();
	gameUI.Reset();
	birdRobin.Reset();
	birdOG.Reset();
	fatBird.Reset();
	gameFrame = trees.treeSpawnTimer;
	// playerPoints = 0;
}

let button1, button2;
let player;
let mouseClick = null;
let playerPoints = 0;
let font;
let gameFrame = trees.treeSpawnTimer;
const textureDir = 'assets/textures/';
const musicDir = 'assets/music/';
const assetDir = 'assets/';

function preload() {
	
	BG.skySprite = loadImage(textureDir+'sky.png');
	birdOG.sprite = loadImage(textureDir+'bird.png');
	fatBird.sprite = loadImage(textureDir+'fatBird.png');
	trees.sprites.tree = loadImage(textureDir+'trees.png');
	birdRobin.sprite = loadImage(textureDir+'birdRobin.png');
	BG.forestBGSprite = loadImage(textureDir+'ForestBG.png');
	trees.sprites.leaves = loadImage(textureDir+'leaves.png');
	mainMenu.sprite.title = loadImage(textureDir+'title.png');
	mainMenu.sprite.button = loadImage(textureDir+'button.png');
	gameUI.sprite.UIButtons = loadImage(textureDir+'icons.png');
	mainMenu.sprite.titleBG = loadImage(textureDir+'titleBG.png');
	gameUI.sprite.heart = loadImage(textureDir+'UIHealthHeart.png');
	gameUI.sprite.scoreboard = loadImage(textureDir+'scoreboard.png');
	mainMenu.sprite.startText = loadImage(textureDir+'startText.png');
	gameUI.sprite.resultBoard = loadImage(textureDir+'resultBoard.png');
	gameUI.sprite.helthBarBG = loadImage(textureDir+'UIHealthBarBG.png');
	mainMenu.sprite.titleBGGrad = loadImage(textureDir+'titleBGGrad.png');
	mainMenu.sprite.birdChoiceMenu = loadImage(textureDir+'birdChoiceScreen.png');
	
	font = loadFont(assetDir+'font.ttf');
	
	soundFormats('ogg');
	audio.mainMenu = loadSound(musicDir+"mainMenu.ogg");
	audio.game = loadSound(musicDir+"m03.ogg");
	audio.birdHurt = loadSound(musicDir+"birdHurt.ogg");
	audio.buttonClick = loadSound(musicDir+"buttonClick.ogg");
	
	audio.mainMenu.setVolume(0.35);
	audio.mainMenu.setLoop(true);
	audio.game.setVolume(0.35);
	audio.game.setLoop(true);
	audio.birdHurt.setVolume(0.35);
	audio.buttonClick.setVolume(0.35);
	
};

let Scene;

function PlayerMouseClickEvent() {
	if(!gameUI.paused)
		player.OnClick();
}

function GameTrans() {
	mouseClick = PlayerMouseClickEvent;
	audio.GameBegin();
	player.Reset();
	trees.scrollSpeed = player.speed;
	trees.treeSpawnTimer = Math.ceil(450 * (1/player.speed));
	for (let i = 0; i < player.lives; i++) {
		gameUI.hearts.push({
			x: i * 16 * FGScalingFactor,
			y:4,
			active:true,
			frame: 0,
			
			Update: function() {
				if(this.active == false && this.frame < gameUI.heartFrames * gameUI.sprHeartW && frameCount % 2 == 0) {
					this.frame += gameUI.sprHeartW;
				}
			},
			
			Draw: function() {
				image(gameUI.sprite.heart, this.x, this.y, gameUI.heartW, gameUI.heartH, this.frame, 0, gameUI.sprHeartW, gameUI.sprHeartH )
			}
		})
	}
	gameUI.healthBarX = (-100 * FGScalingFactor) + (gameUI.heartW * gameUI.hearts.length)
	Scene = Game;
}

function PRE() {
	background(0);
	textAlign(CENTER, CENTER);
	textSize(32);
	fill(255);
	strokeWeight(1);
	text('Start    ', 200, 200);
	fill(0);
	stroke(255);
	strokeWeight(7);
	triangle(240, 176, 272, 200, 240, 224);
}

function PREclick() {
	strokeWeight(1);
	noStroke();
	Audio = function() {audio.Update();}
	Scene = Start;
}

function Game() {
	background('#6374de');
	
	if(!gameUI.paused) {
		gameFrame++;
		BG.Update();
		trees.Update();
		player.Update();
	}
	if (gameUI.Update() == 0) {
		BG.Draw();
		trees.Draw();
		player.Draw();
		gameUI.Draw();
	}
};

function MainMenu() {
	mouseClick = mainMenu.OnClick;
	mainMenu.Update();
	mainMenu.Draw();
};

function Start() {
	
	audio.mainMenu.play()
	audio.game.play()
	audio.Begin();
	
	Scene = MainMenu;
}

function setup() {
	frameRate(30);
	createCanvas(canvasWidth, canvasHeight);
	noSmooth();
	
	textFont(font);
	
	player = birdRobin;
	trees.scrollSpeed = player.speed;
	gameUI.Draw = gameUI.GameMenu;
	
	Scene = PRE;
	mouseClick = PREclick;
};

let Audio = function(){};

function draw() {
	Audio();
	Scene();
	// console.log(audio.volMM);
	// console.log(audio.volG);
};

// function mouseClicked() {
// 	if(mouseClick != null)
// 		mouseClick();
// };

function mousePressed() {
	gameUI.OnClick();
	if(mouseClick != null)
		mouseClick();
}