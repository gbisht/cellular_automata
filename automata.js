
function Arena(matrix){
	this.matrix = matrix;		
	this.xSize = matrix.length;   // number of rows
	this.ySize = matrix[0].length;	  // number of columns
}

Arena.prototype.getAliveNeighbours = function(x, y){
	var aliveCount = 0;	
	for (var i = x - 1; i <= x + 1; ++i ){
		for(var j = y - 1; j <= y + 1; ++j){			
			if (!(i == x && j == y)) {
				aliveCount += this.isAlive(i, j);
			}
		}
	}	
	return aliveCount;
};

// check if matrix[x][y] is alive
Arena.prototype.isAlive = function(x, y){
	if(x < 0){
		x = this.xSize - 1;
	}
	else if(x == this.xSize){
		x = 0;
	}
	if(y < 0){
		y = this.ySize - 1;
	}
	else if(y == this.ySize){
		y = 0;
	}	
	return this.matrix[x][y];		
};

// get whole matrix
Arena.prototype.getNextGenMatrix = function(){
	var nextMatrix = [];
	for (var x = 0; x < this.xSize; ++x){
		nextMatrix[x] = [];
		for (var y = 0; y < this.ySize; ++y){
			nextMatrix[x][y] = this.getNextGenCell(x, y);			
		}
	}
	this.matrix = nextMatrix;
	return this.matrix;
};


// set matrix[x][y] if it satisfies condition
Arena.prototype.getNextGenCell = function(x, y){
	var aliveCount = this.getAliveNeighbours(x, y);
	var nextStatus;
	if (this.isAlive(x, y)){
		nextStatus = (aliveCount == 2 || aliveCount == 3) ? 1 : 0;
	}
	else {
		nextStatus = (aliveCount == 3) ? 1 :  0;
	}
	return nextStatus;
};

Arena.prototype.getXSize = function(){	
	return this.xSize;
};

Arena.prototype.getYSize = function(){	
	return this.ySize;
};

Arena.prototype.getMatrix = function(){	
	return this.matrix;
};








