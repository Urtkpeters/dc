function loadMap()
{

	/* Overhead view of the map */
	var tempMap = 
	[
		[0,0,0,0,0,0,0,0],
		[0,0,1,0,0,0,0,0],
		[0,0,1,1,1,0,0,0],
		[0,0,1,0,1,1,1,0],
		[0,1,1,1,1,0,1,0],
		[0,1,0,0,0,0,1,0],
		[0,1,1,1,1,1,1,0],
		[0,0,0,0,0,0,0,0]
	]
	
	
	/* 
		Map enhancer that takes the map above and replaces all of the 1s with usable arrays for directional heading. Example below.
			[[4,2,2,1,1,1,2],[3,2,1,1,1,2,1],[1,2,2,0,0,0,0],[2,1,2,1,1,0,0]]
		The above is for the last row with a 1 in it, the second 1 from the left. Example shows directions based on the heading starting at North, East, South West.
	*/
	for(i = 0; i < tempMap.length; i++)
	{
		for(j = 0; j < tempMap[i].length; j++)
		{
			for(k = 0; k < 4; k++)
			{
				var wallA = 0;
				var wallB = 0;
				var wallC = 0;
				var wallD = 0;
				var wallE = 0;
				var wallF = 0;
				var wallG = 0;
				
				if(tempMap[i][j] == 1)
				{
					tempMap[i][j] = [[0],[0],[0],[0]];
				}
				
				/* NORTH FACING */
				if(k == 0)
				{
					if(tempMap[i][j] != 0)
					{
						wallB = 1;
						wallC = 1;
						
						if(tempMap[i-1][j] != 0)
						{
							wallD = 1;
							wallE = 1;
							
							if(tempMap[i-2][j] != 0)
							{
								wallF = 1;
								wallG = 1;
								
								if(tempMap[i-3][j] != 0)
								{
									wallA = 4;
								}
								else
								{
									wallA = 3;
								}
								
								if(tempMap[i-2][j-1] != 0)
								{
									wallF = 2;
								}
								
								if(tempMap[i-2][j+1] != 0)
								{
									wallG = 2;
								}
							}
							else
							{
								wallA = 2;
							}
							
							if(tempMap[i-1][j-1] != 0)
							{
								wallD = 2;
							}
							
							if(tempMap[i-1][j+1] != 0)
							{
								wallE = 2;
							}
						}
						else
						{
							wallA = 1;
						}
						
						if(tempMap[i][j-1] != 0)
						{
							wallB = 2;
						}
						
						if(tempMap[i][j+1] != 0)
						{
							wallC = 2;
						}
					}
				}
				
				/* EAST FACING */
				if(k == 1)
				{
					if(tempMap[i][j] != 0)
					{
						wallB = 1;
						wallC = 1;
						
						if(tempMap[i][j+1] != 0)
						{
							wallD = 1;
							wallE = 1;
							
							if(tempMap[i][j+2] != 0)
							{
								wallF = 1;
								wallG = 1;
								
								if(tempMap[i][j+3] != 0)
								{
									wallA = 4;
								}
								else
								{
									wallA = 3;
								}
								
								if(tempMap[i-1][j+2] != 0)
								{
									wallF = 2;
								}
								
								if(tempMap[i+1][j+2] != 0)
								{
									wallG = 2;
								}
							}
							else
							{
								wallA = 2;
							}
							
							if(tempMap[i-1][j+1] != 0)
							{
								wallD = 2;
							}
							
							if(tempMap[i+1][j+1] != 0)
							{
								wallE = 2;
							}
						}
						else
						{
							wallA = 1;
						}
						
						if(tempMap[i-1][j] != 0)
						{
							wallB = 2;
						}
						
						if(tempMap[i+1][j] != 0)
						{
							wallC = 2;
						}
					}
				}
				
				/* SOUTH FACING */
				if(k == 2)
				{
					if(tempMap[i][j] != 0)
					{
						wallB = 1;
						wallC = 1;
						
						if(tempMap[i+1][j] != 0)
						{
							wallD = 1;
							wallE = 1;
							
							if(tempMap[i+2][j] != 0)
							{
								wallF = 1;
								wallG = 1;
								
								if(tempMap[i+3][j] != 0)
								{
									wallA = 4;
								}
								else
								{
									wallA = 3;
								}
								
								if(tempMap[i+2][j+1] != 0)
								{
									wallF = 2;
								}
								
								if(tempMap[i+2][j-1] != 0)
								{
									wallG = 2;
								}
							}
							else
							{
								wallA = 2;
							}
							
							if(tempMap[i+1][j+1] != 0)
							{
								wallD = 2;
							}
							
							if(tempMap[i+1][j-1] != 0)
							{
								wallE = 2;
							}
						}
						else
						{
							wallA = 1;
						}
						
						if(tempMap[i][j+1] != 0)
						{
							wallB = 2;
						}
						
						if(tempMap[i][j-1] != 0)
						{
							wallC = 2;
						}
					}
				}
				
				/* WEST FACING */
				if(k == 3)
				{
					if(tempMap[i][j] != 0)
					{
						wallB = 1;
						wallC = 1;
						
						if(tempMap[i][j-1] != 0)
						{
							wallD = 1;
							wallE = 1;
							
							if(tempMap[i][j-2] != 0)
							{
								wallF = 1;
								wallG = 1;
								
								if(tempMap[i][j-3] != 0)
								{
									wallA = 4;
								}
								else
								{
									wallA = 3;
								}
								
								if(tempMap[i+1][j-2] != 0)
								{
									wallF = 2;
								}
								
								if(tempMap[i-1][j-2] != 0)
								{
									wallG = 2;
								}
							}
							else
							{
								wallA = 2;
							}
							
							if(tempMap[i+1][j-1] != 0)
							{
								wallD = 2;
							}
							
							if(tempMap[i-1][j-1] != 0)
							{
								wallE = 2;
							}
						}
						else
						{
							wallA = 1;
						}
						
						if(tempMap[i+1][j] != 0)
						{
							wallB = 2;
						}
						
						if(tempMap[i-1][j] != 0)
						{
							wallC = 2;
						}
					}
				}
				
				if(tempMap[i][j] != 0)
				{
					tempMap[i][j][k] = [wallA,wallB,wallC,wallD,wallE,wallF,wallG];
				}
			}
		}
	}
	map = tempMap;
}

function checkPos()
{
	if(cPos[2] == 0 && key == 87 && map[cPos[1]-1][cPos[0]] != 0)
	{
		return true;
	}
	else if (cPos[2] == 0 && key == 83 && map[cPos[1]+1][cPos[0]] != 0)
	{
		return true;
	}
	else if (cPos[2] == 1 && key == 87 && map[cPos[1]][cPos[0]+1] != 0)
	{
		return true;
	}
	else if (cPos[2] == 1 && key == 83 && map[cPos[1]][cPos[0]-1] != 0)
	{
		return true;
	}
	else if (cPos[2] == 2 && key == 87 && map[cPos[1]+1][cPos[0]] != 0)
	{
		return true;
	}
	else if (cPos[2] == 2 && key == 83 && map[cPos[1]-1][cPos[0]] != 0)
	{
		return true;
	}
	else if (cPos[2] == 3 && key == 87 && map[cPos[1]][cPos[0]-1] != 0)
	{
		return true;
	}
	else if (cPos[2] == 3 && key == 83 && map[cPos[1]][cPos[0]+1] != 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}