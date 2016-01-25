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
	for(i = 0; i < 3; i++)
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
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,4,5,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,4,5,6,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,3,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,1,0,4,5,6,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				]
			]
		);
		
		for(j = 0; j < classArray[i].length; j++)
		{
			for(k = 0; k < classArray[i][j].length; k++)
			{
				for(l = 0; l < classArray[i][j][k].length; l++)
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
						if(k == 10 && l == 1 || k == 11 && l == 1)
						{
							classArray[i][j][k][l].push(1);
						}
						else
						{
							classArray[i][j][k][l].push(0);
						}
					}
					else if(classArray[i][j][k][l] == 1)
					{
						classArray[i][j][k][l] = nodeArray[classArray[i][j][k][l]-1].slice();
						classArray[i][j][k][l].push(3);
					}
				}
			}
		}
	}
}

function classMoveCheck(moveDirection)
{
	var classNumber = getClassNumber();
	
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

function getClassNumber()
{
	var classNumber = 0;
	
	/* Add else ifs for other classes */
	if(mPos[2] == 0 && mPos[3] == 0)
	{
		classNumber = 0;
	}
	
	return classNumber;
}

function setClassPos()
{
	for(i = 0; i < classArray[mPos[2]][getClassNumber()].length; i++)
	{
		for(j = 0; j < classArray[mPos[2]][getClassNumber()][i].length; j++)
		{
			if(classArray[mPos[2]][getClassNumber()][i][j] == 1)
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
		[0,1,2,3,4,5,6,7]
		
			Vertically is the node ID
			0 = Name
			1 = Stat modified
			2 = Number changed
			3 = Stat modified
			4 = Number changed
			5 = Stat modified
			6 = Number changed
			7 = Skill unlocked
	*/
	
	nodeArray.push(['Empty',0,0,0,0,0,0,0]);
	nodeArray.push(['Str + 1',1,1,0,0,0,0,0]);
	nodeArray.push(['Vit + 1',2,1,0,0,0,0,0]);
	nodeArray.push(['Agi + 1',3,1,0,0,0,0,0]);
	nodeArray.push(['Int + 1',4,1,0,0,0,0,0]);
}

function activateNode()
{
	/* Mkaes sure you are only selecting one square away */
	if(classGridPos[0] - startMenuMovePos[0] <= 1 && classGridPos[0] - startMenuMovePos[0] >= -1 && classGridPos[1] - startMenuMovePos[1] <= 1 && classGridPos[1] - startMenuMovePos[1] <= 1)
	{
		/* Check to see if you have available CP and the skill is unlocked */
		if(charArray[mPos[5]][9][(getClassNumber()+1)*3] > 0 && classArray[mPos[5]][getClassNumber()][startMenuMovePos[1]][startMenuMovePos[0]][8] == 0)
		{
			charArray[mPos[5]][9][(getClassNumber()+1)*3] -= 1;
			classArray[mPos[5]][getClassNumber()][startMenuMovePos[1]][startMenuMovePos[0]][8] = 3;
			classGridPos[0] = startMenuMovePos[0];
			classGridPos[1] = startMenuMovePos[1];
			appendOutput('Unlocked!');
		}
		/* Otherwise checks to see if it is already unlocked and available to be moved through */
		else if(charArray[mPos[5]][9][(getClassNumber()+1)*3] > 0 && classArray[mPos[5]][getClassNumber()][startMenuMovePos[1]][startMenuMovePos[0]][8] == 1)
		{
			charArray[mPos[5]][9][(getClassNumber()+1)*3] -= 1;
			classArray[mPos[5]][getClassNumber()][startMenuMovePos[1]][startMenuMovePos[0]][8] = 3;
			classGridPos[0] = startMenuMovePos[0];
			classGridPos[1] = startMenuMovePos[1];
		}
		/* If can't do either, then send message saying not enough points */
		else
		{
			appendOutput('Not enough CP...');
		}
	}
}