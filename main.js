function main (rows, columns){
	alert('inside main');
	
	var cells = new Array(rows);
	for (var i = 0; i < rows; i++) {
	    cells[i] = new Array(rows);
	    for (var j = 0; j < columns; j++) {
	        cells[i][j] = '0';
	    }
    }
    alert(cells[1][1]);
	var arena = new Arena (cells);
	arena.getAliveNeighbours(1, 1)	;
}

