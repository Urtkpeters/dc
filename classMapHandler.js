function loadClasses()
{
	/*
		classArray[0][1][2][3][4]
		
			0 = Character
			1 = Class
			2 = Y Grid
			3 = X Grid
	*/
	
	/* Currently only pushing a squire class per character */
	for(var i = 0; i < 3; i++)
	{
		classArray.push
		(
			[
				[
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,4,5,6,3,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,4,5,6,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,3,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,4,0,4,5,6,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				]
			]
		);
		
		for(var j = 0; j < classArray[i].length; j++)
		{
			for(var k = 0; k < classArray[i][j].length; k++)
			{
				for(var l = 0; l < classArray[i][j][k].length; l++)
				{
					if(classArray[i][j][k][l] > 1)
					{
						classArray[i][j][k][l] = nodeArray[classArray[i][j][k][l]-2].slice();
						
						/* 
							Pushing another number at the end of the node data to keep track of status. Eventually this will need to come from save data rather than being default. 
							Status IDs below
							0 = Undiscovered
							1 = Discovered (but not claimed)
							2 = Claimed
							3 = Occupying
						*/
						/*
						if(k == 10 && l == 1 || k == 11 && l == 1)
						{
							classArray[i][j][k][l].push(1);
						}
						else
						{
							classArray[i][j][k][l].push(0);
						}
						*/
						
						classArray[i][j][k][l].push(0);
					}
					else if(classArray[i][j][k][l] == 1)
					{
						classArray[i][j][k][l] = nodeArray[classArray[i][j][k][l]-1].slice();
						classArray[i][j][k][l].push(3);
					}
				}
			}
			setClassPos(i,true,j);
			gridDiscovery(i,j);
		}
	}
}

function classMoveCheck(moveDirection)
{
	var classNumber = getClassNumber(mPos[2],mPos[3]);
	
	switch(moveDirection)
	{
		case 0:
			/* W Key */
			if(classArray[mPos[5]][classNumber][startMenuMovePos[1]-1][startMenuMovePos[0]] != 0)
			{
				return true;
			}
			else
			{
				return false;
			}
			break;
		case 1:
			/* A Key */
			if(classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]-1] != 0)
			{
				return true;
			}
			else
			{
				return false;
			}
			break;
		case 2:
			/* S Key */
			if(classArray[mPos[5]][classNumber][startMenuMovePos[1]+1][startMenuMovePos[0]] != 0)
			{
				return true;
			}
			else
			{
				return false;
			}
			break;
		case 3:
			/* D Key */
			if(classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]+1] != 0)
			{
				return true;
			}
			else
			{
				return false;
			}
			break;
	}
}

function getClassNumber(classNumber, classNumber2)
{
	var classNumber = 0;
	
	/* Add else ifs for other classes */
	if(classNumber == 0 && classNumber2 == 0)
	{
		classNumber = 0;
	}
	
	return classNumber;
}

function setClassPos(charNumber, haveClassNumber, classNumber, classNumber2)
{
	if(haveClassNumber == false)
	{
		classNumber = getClassNumber(classNumber,classNumber2);
	}
	
	for(var i = 0; i < classArray[charNumber][classNumber].length; i++)
	{
		for(var j = 0; j < classArray[charNumber][classNumber][i].length; j++)
		{
			if(classArray[charNumber][classNumber][i][j][8] == 3)
			{
				startMenuMovePos[0] = j;
				startMenuMovePos[1] = i;
				classGridPos[0] = j;
				classGridPos[1] = i;
				break;
			}
		}
	}
}

function loadNodeArray()
{
	/*
		Vertically is the node ID
		[0,1,2,3,4,5,6,7]
		
			0 = Name
			1 = Stat modified
			2 = Number changed
			3 = Stat modified
			4 = Number changed
			5 = Stat modified
			6 = Number changed
			7 = Skill unlocked
			
			Stat IDs
			0 = None
			1 = Strength
			2 = Vitality
			3 = Agility
			4 = Intelligence
	*/
	
	nodeArray.push(['Empty',0,0,0,0,0,0,0]);
	nodeArray.push(['Str + 1',1,1,0,0,0,0,0]);
	nodeArray.push(['Vit + 1',2,1,0,0,0,0,0]);
	nodeArray.push(['Agi + 1',3,1,0,0,0,0,0]);
	nodeArray.push(['Int + 1',4,1,0,0,0,0,0]);
}

function activateNode()
{
	var canMove = false;
	var classNumber = getClassNumber(mPos[2],mPos[3]);
	
	/* Makes sure you are only selecting one square away */
	if(classGridPos[0] - startMenuMovePos[0] == 1 && classGridPos[1] - startMenuMovePos[1] == 0 || classGridPos[0] - startMenuMovePos[0] == -1 && classGridPos[1] - startMenuMovePos[1] == 0)
	{
		canMove = true;
	}
	else if(classGridPos[1] - startMenuMovePos[1] == 1 && classGridPos[0] - startMenuMovePos[0] == 0 || classGridPos[1] - startMenuMovePos[1] == -1 && classGridPos[0] - startMenuMovePos[0] == 0)
	{
		canMove = true;
	}
	
	if(canMove == true)
	{
		/* Check to see if you have available CP and the skill is unlocked */
		if(charArray[mPos[5]][9][(classNumber+1)*3] > 0 && classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][8] == 1)
		{
			/* Set previously occupied node to unlocked */
			classArray[mPos[5]][classNumber][classGridPos[1]][classGridPos[0]][8] = 2;
			
			/* Remove one level */
			charArray[mPos[5]][9][(classNumber+1)*3] -= 1;
			
			/* Apply Stats */
			if(classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][1] != 0)
			{
				charArray[mPos[5]][6][classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][1]-1] += classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][2];
			}
			
			if(classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][3] != 0)
			{
				charArray[mPos[5]][6][classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][3]-1] += classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][4];
			}
			
			if(classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][5] != 0)
			{
				charArray[mPos[5]][6][classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][5]-1] += classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][6];
			}
			
			/* Apply Skill */ 
			if(classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][7] != 0)
			{
				charArray[mPos[5]][10][0].push(classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][7]-1);
			}
			
			/* Move to target node */
			classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][8] = 3;
			
			/* Set new position */
			classGridPos[0] = startMenuMovePos[0];
			classGridPos[1] = startMenuMovePos[1];
			
			/* Calculate position and reveal needed nodes */ 
			gridDiscovery(mPos[5], classNumber);
			
			appendOutput('Unlocked!');
		}
		/* Otherwise checks to see if it is already unlocked and available to be moved through */
		else if(charArray[mPos[5]][9][(classNumber+1)*3] > 0 && classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][8] == 1 || charArray[mPos[5]][9][(classNumber+1)*3] > 0 && classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][8] == 2)
		{
			classArray[mPos[5]][classNumber][classGridPos[1]][classGridPos[0]][8] = 2;
			charArray[mPos[5]][9][(classNumber+1)*3] -= 1;
			classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][8] = 3;
			classGridPos[0] = startMenuMovePos[0];
			classGridPos[1] = startMenuMovePos[1];
		}
		/* If can't do either, then send message saying not enough points */
		else
		{
			appendOutput('Not enough CP...');
		}
	}
	else
	{
		appendOutput("Can't move there!");
	}
}

function gridDiscovery(charNumber, classNumber)
{
	var xPlus = 0;
	var yPlus = 0;
	var xPlus2 = 0;
	var yPlus2 = 0;
	var consoleVar = '';
	var consoleVar2 = '';
	for(var i = 0; i < 4; i++)
	{
		switch(i)
		{
			/* North */
			case 0:
				xPlus = 0;
				yPlus = -1;
				consoleVar = 'North1';
				break;
			/* East */
			case 1:
				xPlus = 1;
				yPlus = 0;
				consoleVar = 'East1';
				break;
			/* South */
			case 2:
				xPlus = 0;
				yPlus = 1;
				consoleVar = 'South1';
				break;
			/* West */
			case 3: 
				xPlus = -1;
				yPlus = 0;
				consoleVar = 'West1';
				break;
		}
		
		if(classArray[charNumber][classNumber][classGridPos[1]+yPlus][classGridPos[0]+xPlus] != 0)
		{
			if(classArray[charNumber][classNumber][classGridPos[1]+yPlus][classGridPos[0]+xPlus][8] == 0)
			{
				classArray[charNumber][classNumber][classGridPos[1]+yPlus][classGridPos[0]+xPlus][8] = 1;
			}
			console.log(consoleVar);
			for(var j = 0; j < 4; j++)
			{
				switch(j)
				{
					/* North */
					case 0:
						xPlus2 = 0;
						yPlus2 = -1;
						consoleVar2 = 'North2';
						break;
					/* East */
					case 1:
						xPlus2 = 1;
						yPlus2 = 0;
						consoleVar2 = 'East2';
						break;
					/* South */
					case 2:
						xPlus2 = 0;
						yPlus2 = 1;
						consoleVar2 = 'South2';
						break;
					/* West */
					case 3: 
						xPlus2 = -1;
						yPlus2 = 0;
						consoleVar2 = 'West2';
						break;
				}
				
				if(classArray[charNumber][classNumber][classGridPos[1]+yPlus+yPlus2][classGridPos[0]+xPlus+xPlus2][8] == 0)
				{
					console.log(consoleVar2);
					classArray[charNumber][classNumber][classGridPos[1]+yPlus+yPlus2][classGridPos[0]+xPlus+xPlus2][8] = 1;
				}
			}
		}
	}
}