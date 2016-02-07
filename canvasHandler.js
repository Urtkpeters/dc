function buildCanvas()
{
	if(blackBackground == true)
	{
		buildBlackBackground();
	}
	else
	{
		buildWalls();
	}
	
	if(inCombat == true)
	{
		buildMonster();
		buildMenuShell();
		if(attackOrderArray[0] == 0 || attackOrderArray[0] == 1 || attackOrderArray[0] == 2)
		{
			buildCommandMenus();
			/* Selecting Char Target */
			if(bPos[3] == 0 && choosingTarget == true)
			{
				buildCharTargetSelect();
			}
			/* Selecting Enemy Target */
			else if(bPos[3] == 1 && choosingTarget == true)
			{
				buildEnemyTargetSelect();
			}
			/* Selecting Item */
			else if(bPos[1] == 2 && choosingItem == true)
			{
				buildBattleItemSelect();
			}
		}
	}
	else if(menuOpen == true)
	{
		buildMenuShell();
		buildStartMenu();
		/* Items Menu */
		if(mPos[1] == 1)
		{
			buildItemMenu();
			blackBackground = true;
		}
		/* Skills Menu */
		else if(mPos[1] == 2)
		{
			buildSkillMenu();
		}
		/* Equipment Menu */
		else if(mPos[1] == 3)
		{
			buildEquipmentMenu();
		}
		/* Status Menu */
		else if(mPos[1] == 4)
		{
			buildStatusMenu();
		}
		/* Save Menu */
		else if(mPos[1] == 5)
		{
			
		}
		else
		{
			blackBackground = false;
		}
		
	}
}

function buildWalls()
{
	var wallConfig = map[cPos[1]][cPos[0]][cPos[2]];
	var combatY = 0;
	
	if(inCombat == true)
	{
		combatY = 75;
	}
	
	/*
		Order In Array (wallConfig)
		0 = Back Wall
		1 = First Left
		2 = First Right
		3 = Second Left
		4 = Second Right
		5 = Third Left
		6 = Third Right
		
		States In Array (wallConfig)
		0 = Invisible
		1 = Closed
		2 = Open
		3 = Open Further (Back wall only)
	
		-- Base Room Points --
		Point A - 250,125
		Point B - 750,125
		Point C - 250,375
		Point D - 750,375
		
		-- Secondary Room Points --31.25
		Point A - 375,187.5
		Point B - 625,187.5
		Point C - 375,312.5
		Point D - 625,312.5
		
		-- Far Room Points --
		Point A - 437.5,218.75
		Point B - 562.5,218.75
		Point C - 437.5,281.25
		Point D - 562.5,281.25
	*/

	/* ROOF */
	cContext.strokeStyle = "#000000";
	
	cContext.beginPath();
	cContext.fillStyle = "#899BA1";
	cContext.moveTo(0,0-combatY);
	cContext.lineTo(250,125-combatY);
	cContext.lineTo(750,125-combatY);
	cContext.lineTo(1000,0-combatY);
	cContext.lineTo(0,0-combatY);
	cContext.stroke();
	cContext.fill();
	cContext.closePath();
	
	/* FLOOR */
	cContext.beginPath();
	cContext.fillStyle = "#899BA1";
	cContext.moveTo(0,500-combatY);
	cContext.lineTo(250,375-combatY);
	cContext.lineTo(750,375-combatY);
	cContext.lineTo(1000,500-combatY);
	cContext.lineTo(0,500-combatY);
	cContext.stroke();
	cContext.fill();
	cContext.closePath();
	
	/* BACK WALL */
	switch(wallConfig[0])
	{
		case 1:
			cContext.beginPath();
			cContext.fillStyle = "#899BA1";
			cContext.moveTo(250,125-combatY);
			cContext.lineTo(250,375-combatY);
			cContext.lineTo(750,375-combatY);
			cContext.lineTo(750,125-combatY);
			cContext.lineTo(250,125-combatY);
			cContext.stroke();
			cContext.fill();
			cContext.closePath();
			break;
		case 2:
			cContext.beginPath();
			cContext.fillStyle = "#71878e";
			cContext.moveTo(375,187.5-combatY);
			cContext.lineTo(375,312.5-combatY);
			cContext.lineTo(625,312.5-combatY);
			cContext.lineTo(625,187.5-combatY);
			cContext.lineTo(375,187.5-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			
			/* Roof 2 */
			cContext.beginPath();
			cContext.fillStyle = "#71878e";
			cContext.moveTo(250,125-combatY);
			cContext.lineTo(375,187.5-combatY);
			cContext.lineTo(625,187.5-combatY);
			cContext.lineTo(750,125-combatY);
			cContext.lineTo(250,125-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			
			/* Floor 2 */
			cContext.beginPath();
			cContext.fillStyle = "#71878e";
			cContext.moveTo(250,375-combatY);
			cContext.lineTo(375,312.5-combatY);
			cContext.lineTo(625,312.5-combatY);
			cContext.lineTo(750,375-combatY);
			cContext.lineTo(250,375-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			break;
		case 3:
			cContext.beginPath();
			cContext.fillStyle = "#5a6c72";
			cContext.moveTo(437.5,218.75-combatY);
			cContext.lineTo(437.5,281.25-combatY);
			cContext.lineTo(562.5,281.25-combatY);
			cContext.lineTo(562.5,218.75-combatY);
			cContext.lineTo(437.5,218.75-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			
			/* Roof 2 */
			cContext.beginPath();
			cContext.fillStyle = "#71878e";
			cContext.moveTo(250,125-combatY);
			cContext.lineTo(375,187.5-combatY);
			cContext.lineTo(625,187.5-combatY);
			cContext.lineTo(750,125-combatY);
			cContext.lineTo(250,125-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			
			/* Floor 2 */
			cContext.beginPath();
			cContext.fillStyle = "#71878e";
			cContext.moveTo(250,375-combatY);
			cContext.lineTo(375,312.5-combatY);
			cContext.lineTo(625,312.5-combatY);
			cContext.lineTo(750,375-combatY);
			cContext.lineTo(250,375-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			
			/* Roof 3 */
			cContext.beginPath();
			cContext.fillStyle = "#5a6c72";
			cContext.moveTo(375,187.5-combatY);
			cContext.lineTo(437.5,218.75-combatY);
			cContext.lineTo(562.5,218.75-combatY);
			cContext.lineTo(625,187.5-combatY);
			cContext.lineTo(375,187.5-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			
			/* Floor 3 */
			cContext.beginPath();
			cContext.fillStyle = "#5a6c72";
			cContext.moveTo(375,312.5-combatY);
			cContext.lineTo(437.5,281.25-combatY);
			cContext.lineTo(562.5,281.25-combatY);
			cContext.lineTo(625,312.5-combatY);
			cContext.lineTo(375,312.5-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			break;
		case 4:
			cContext.beginPath();
			cContext.fillStyle = "#000000";
			cContext.moveTo(437.5,218.75-combatY);
			cContext.lineTo(437.5,281.25-combatY);
			cContext.lineTo(562.5,281.25-combatY);
			cContext.lineTo(562.5,218.75-combatY);
			cContext.lineTo(437.5,218.75-combatY);
			cContext.stroke();
			cContext.fill();
			cContext.closePath();
			
			/* Roof 2 */
			cContext.beginPath();
			cContext.fillStyle = "#71878e";
			cContext.moveTo(250,125-combatY);
			cContext.lineTo(375,187.5-combatY);
			cContext.lineTo(625,187.5-combatY);
			cContext.lineTo(750,125-combatY);
			cContext.lineTo(250,125-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			
			/* Floor 2 */
			cContext.beginPath();
			cContext.fillStyle = "#71878e";
			cContext.moveTo(250,375-combatY);
			cContext.lineTo(375,312.5-combatY);
			cContext.lineTo(625,312.5-combatY);
			cContext.lineTo(750,375-combatY);
			cContext.lineTo(250,375-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			
			/* Roof 3 */
			cContext.beginPath();
			cContext.fillStyle = "#5a6c72";
			cContext.moveTo(375,187.5-combatY);
			cContext.lineTo(437.5,218.75-combatY);
			cContext.lineTo(562.5,218.75-combatY);
			cContext.lineTo(625,187.5-combatY);
			cContext.lineTo(375,187.5-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			
			/* Floor 3 */
			cContext.beginPath();
			cContext.fillStyle = "#5a6c72";
			cContext.moveTo(375,312.5-combatY);
			cContext.lineTo(437.5,281.25-combatY);
			cContext.lineTo(562.5,281.25-combatY);
			cContext.lineTo(625,312.5-combatY);
			cContext.lineTo(375,312.5-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			break;
	}
	
	/* LEFT WALL 1 */
	switch(wallConfig[1])
	{
		case 1:
			cContext.beginPath();
			cContext.fillStyle = "#899BA1";
			cContext.moveTo(0,0-combatY);
			cContext.lineTo(250,125-combatY);
			cContext.lineTo(250,375-combatY);
			cContext.lineTo(0,500-combatY);
			cContext.lineTo(0,0-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			break;
		case 2:
			cContext.beginPath();
			cContext.fillStyle = "#899BA1";
			cContext.moveTo(0,0-combatY);
			cContext.lineTo(250,125-combatY);
			cContext.lineTo(250,375-combatY);
			cContext.lineTo(0,500-combatY);
			cContext.lineTo(0,0-combatY);
			cContext.fill();
			cContext.moveTo(250,125-combatY);
			cContext.lineTo(0,125-combatY);
			cContext.lineTo(0,375-combatY);
			cContext.lineTo(250,375-combatY);
			cContext.stroke();
			cContext.closePath();
			break;
	}
	
	/* RIGHT WALL 1 */
	switch(wallConfig[2])
	{
		case 1:
			cContext.beginPath();
			cContext.fillStyle = "#899BA1";
			cContext.moveTo(1000,0-combatY);
			cContext.lineTo(750,125-combatY);
			cContext.lineTo(750,375-combatY);
			cContext.lineTo(1000,500-combatY);
			cContext.lineTo(1000,0-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			break;
		case 2:
			cContext.beginPath();
			cContext.fillStyle = "#899BA1";
			cContext.moveTo(1000,0-combatY);
			cContext.lineTo(750,125-combatY);
			cContext.lineTo(750,375-combatY);
			cContext.lineTo(1000,500-combatY);
			cContext.lineTo(1000,0-combatY);
			cContext.fill();
			cContext.closePath();
			cContext.moveTo(750,125-combatY);
			cContext.lineTo(1000,125-combatY);
			cContext.lineTo(1000,375-combatY);
			cContext.lineTo(750,375-combatY);
			cContext.stroke();
			break;
	}
	
	/* Left Wall 2 */
	switch(wallConfig[3])
	{
		case 1:
			cContext.beginPath();
			cContext.fillStyle = "#71878e";
			cContext.moveTo(250,125-combatY);
			cContext.lineTo(375,187.5-combatY);
			cContext.lineTo(375,312.5-combatY);
			cContext.lineTo(250,375-combatY);
			cContext.lineTo(250,125-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			break;
		case 2:
			cContext.beginPath();
			cContext.fillStyle = "#71878e";
			cContext.moveTo(250,125-combatY);
			cContext.lineTo(375,187.5-combatY);
			cContext.lineTo(375,312.5-combatY);
			cContext.lineTo(250,375-combatY);
			cContext.lineTo(250,125-combatY);
			cContext.fill();
			cContext.moveTo(250,187.5-combatY);
			cContext.lineTo(375,187.5-combatY);
			cContext.lineTo(375,312.5-combatY);
			cContext.lineTo(250,312.5-combatY);
			cContext.stroke();
			cContext.closePath();
			break;
	}
	
	/* Right Wall 2 */
	switch(wallConfig[4])
	{
		case 1:
			cContext.beginPath();
			cContext.fillStyle = "#71878e";
			cContext.moveTo(750,125-combatY);
			cContext.lineTo(625,187.5-combatY);
			cContext.lineTo(625,312.5-combatY);
			cContext.lineTo(750,375-combatY);
			cContext.lineTo(750,125-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			break;
		case 2:
			cContext.beginPath();
			cContext.fillStyle = "#71878e";
			cContext.moveTo(750,125-combatY);
			cContext.lineTo(625,187.5-combatY);
			cContext.lineTo(625,312.5-combatY);
			cContext.lineTo(750,375-combatY);
			cContext.lineTo(750,125-combatY);
			cContext.fill();
			cContext.moveTo(750,187.5-combatY);
			cContext.lineTo(625,187.5-combatY);
			cContext.lineTo(625,312.5-combatY);
			cContext.lineTo(750,312.5-combatY);
			cContext.stroke();
			cContext.closePath();
			break;
	}
	
	/* Left Wall 3 */
	switch(wallConfig[5])
	{
		case 1:
			cContext.beginPath();
			cContext.fillStyle = "#5a6c72";
			cContext.moveTo(375,187.5-combatY);
			cContext.lineTo(437.5,218.75-combatY);
			cContext.lineTo(437.5,281.25-combatY);
			cContext.lineTo(375,312.5-combatY);
			cContext.lineTo(375,187.5-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			break;
		case 2:
			cContext.beginPath();
			cContext.fillStyle = "#5a6c72";
			cContext.moveTo(375,187.5-combatY);
			cContext.lineTo(437.5,218.75-combatY);
			cContext.lineTo(437.5,281.25-combatY);
			cContext.lineTo(375,312.5-combatY);
			cContext.lineTo(375,187.5-combatY);
			cContext.fill();
			cContext.moveTo(375,218.75-combatY);
			cContext.lineTo(437.5,218.75-combatY);
			cContext.lineTo(437.5,281.25-combatY);
			cContext.lineTo(375,281.25-combatY);
			cContext.stroke();
			cContext.closePath();
			break;
	}
	
	/* Right Wall 3 */
	switch(wallConfig[6])
	{
		case 1:
			cContext.beginPath();
			cContext.fillStyle = "#5a6c72";
			cContext.moveTo(625,187.5-combatY);
			cContext.lineTo(562.5,218.75-combatY);
			cContext.lineTo(562.5,281.25-combatY);
			cContext.lineTo(625,312.5-combatY);
			cContext.lineTo(625,187.5-combatY);
			cContext.fill();
			cContext.stroke();
			cContext.closePath();
			break;
		case 2:
			cContext.beginPath();
			cContext.fillStyle = "#5a6c72";
			cContext.moveTo(625,187.5-combatY);
			cContext.lineTo(562.5,218.75-combatY);
			cContext.lineTo(562.5,281.25-combatY);
			cContext.lineTo(625,312.5-combatY);
			cContext.lineTo(625,187.5-combatY);
			cContext.fill();
			cContext.moveTo(625,218.75-combatY);
			cContext.lineTo(562.5,218.75-combatY);
			cContext.lineTo(562.5,281.25-combatY);
			cContext.lineTo(625,281.25-combatY);
			cContext.stroke();
			cContext.closePath();
			break;
	}
}

function buildMenuShell()
{
	/* Top Black Window */
	cContext.beginPath();
	cContext.fillStyle = "#000000";
	cContext.moveTo(0,0);
	cContext.lineTo(1000,0);
	cContext.lineTo(1000,75);
	cContext.lineTo(0,75);
	cContext.lineTo(0,0);
	cContext.fill();
	cContext.closePath();
	
	/* Bottom Black Window */
	cContext.beginPath();
	cContext.fillStyle = "#000000";
	cContext.moveTo(0,425);
	cContext.lineTo(1000,425);
	cContext.lineTo(1000,500);
	cContext.lineTo(0,500);
	cContext.lineTo(0,425);
	cContext.fill();
	cContext.closePath();
	
	for(var i = 0; i < 3; i++)
	{
		var tmpBGColor = '#0033CC';
		var xPlus = (i * 255) + 70;
		
		if(charArray[i][0][1] == 0)
		{
			tmpBGColor = '#FF0000';
		}
		
		buildMenuBox(4, 240+xPlus, 70, 90+xPlus, tmpBGColor);
		
		cContext.textAlign="left";
		cContext.font = "14px Arial";
		cContext.fillStyle = "#FFFFFF";
		cContext.fillText(charArray[i][0][0],100+xPlus,18);
		cContext.fillText("HP: " + charArray[i][0][1] + " / " + charArray[i][0][2],100+xPlus,33);
		cContext.fillText("MP: " + charArray[i][0][3] + " / " + charArray[i][0][4],100+xPlus,48);
		cContext.fillText("Status: ",100+xPlus,63);
	}
}

function buildCommandMenus()
{
	var selectionX = 0;
	
	/* Character Portrait */
	cContext.drawImage(charArray[attackOrderArray[0]][0][8], 175, 425, 75, 75);
	
	/* Bottom Text Menu */
	/* Base Menu */
	if(bPos[0] == 0)
	{
		switch(bPos[1])
		{
			case 0:
				selectionX = 0;
				break;
			case 1:
				selectionX = 100;
				break;
			case 2:
				selectionX = 187;
				break;
			case 3:
				selectionX = 277;
				break;
			case 4:
				selectionX = 375;
				break;
		}
		
		buildMenuBox(430, 727, 495, 260, '#0033CC');
		
		/* Text */
		cContext.fillStyle = "#FFFFFF";
		cContext.font = "18px Arial";
		cContext.textAlign="left";
		
		cContext.fillText("Attack",290,466.5);
		cContext.fillText("Skills",390,466.5);
		cContext.fillText("Items",475,466.5);
		cContext.fillText("Defend",565,466.5);
		cContext.fillText("Run",665,466.5);
		
		/* Selection Arrow */
		buildSelectionArrow(270+selectionX, 450, true);
	}
}

function buildMonster()
{
	var enemyImage = [];
	for(var i = 0; i < numOfEnemies.length; i++)
	{
		enemyImage.push(new Image());
	}
	
	switch(numOfEnemies.length)
	{
		case 1:
			cContext.drawImage(beArray[0][0][10], 450, 310, 100, 100);
			break;
		case 2:
			if(numOfEnemies[0] == 1)
			{
				cContext.drawImage(beArray[0][0][10], 283, 310, 100, 100);
			}
			
			if(numOfEnemies[1] == 1)
			{
				cContext.drawImage(beArray[1][0][10], 616, 310, 100, 100);
			}
			break;
		case 3:
			if(numOfEnemies[0] == 1)
			{
				cContext.drawImage(beArray[0][0][10], 200, 310, 100, 100);
			}
			
			if(numOfEnemies[1] == 1)
			{
				cContext.drawImage(beArray[1][0][10], 450, 310, 100, 100);
			}
			
			if(numOfEnemies[2] == 1)
			{
				cContext.drawImage(beArray[2][0][10], 700, 310, 100, 100);
			}
			break;
		case 4:
			if(numOfEnemies[1] == 1)
			{
				cContext.drawImage(beArray[1][0][10], 365, 260, 100, 100);
			}
			
			if(numOfEnemies[2] == 1)
			{
				cContext.drawImage(beArray[2][0][10], 535, 260, 100, 100);
			}
			
			if(numOfEnemies[0] == 1)
			{
				cContext.drawImage(beArray[0][0][10], 200, 310, 100, 100);
			}
			
			if(numOfEnemies[3] == 1)
			{
				cContext.drawImage(beArray[3][0][10], 700, 310, 100, 100);
			}
			break;
		case 5:
			if(numOfEnemies[1] == 1)
			{
				cContext.drawImage(beArray[1][0][10], 325, 260, 100, 100);
			}
			
			if(numOfEnemies[3] == 1)
			{
				cContext.drawImage(beArray[3][0][10], 575, 260, 100, 100);
			}
			
			if(numOfEnemies[0] == 1)
			{
				cContext.drawImage(beArray[0][0][10], 200, 310, 100, 100);
			}
			
			if(numOfEnemies[2] == 1)
			{
				cContext.drawImage(beArray[2][0][10], 450, 310, 100, 100);
			}
			
			if(numOfEnemies[4] == 1)
			{
				cContext.drawImage(beArray[4][0][10], 700, 310, 100, 100);
			}
			break;
	}
}

function buildEnemyTargetSelect()
{
	var xPos = 0;
	var yPos = 0;
	
	switch(numOfEnemies.length)
	{
		case 1:
			xPos = 485;
			yPos = 255;
			break;
		case 2:
			if(bPos[2] == 0)
			{
				xPos = 318;
				yPos = 255;
			}
			else
			{
				xPos = 651;
				yPos = 255;
			}
			break;
		case 3:
			if(bPos[2] == 0)
			{
				xPos = 235;
				yPos = 255;
			}
			else if(bPos[2] == 1)
			{
				xPos = 485;
				yPos = 255;
			}
			else
			{
				xPos = 735;
				yPos = 255;
			}
			break;
		case 4:
			if(bPos[2] == 0)
			{
				xPos = 235;
				yPos = 255;
			}
			else if(bPos[2] == 1)
			{
				xPos = 400;
				yPos = 205;
			}
			else if(bPos[2] == 2)
			{
				xPos = 570;
				yPos = 205;
			}
			else
			{
				xPos = 735;
				yPos = 255;
			}
			break;
		case 5:
			if(bPos[2] == 0)
			{
				xPos = 235;
				yPos = 255;
			}
			else if(bPos[2] == 1)
			{
				xPos = 360;
				yPos = 205;
			}
			else if(bPos[2] == 2)
			{
				xPos = 485;
				yPos = 255;
			}
			else if(bPos[2] == 3)
			{
				xPos = 610;
				yPos = 205;
			}
			else
			{
				xPos = 735;
				yPos = 255;
			}
			break;
	}
	
	cContext.beginPath();
	cContext.fillStyle = "#FF0000";
	cContext.moveTo(xPos,yPos);
	cContext.lineTo(xPos+30,yPos);
	cContext.lineTo(xPos+15,yPos+35);
	cContext.lineTo(xPos,yPos);
	cContext.fill();
	cContext.closePath();
}

function buildCharTargetSelect()
{
	/* Need to put in logic to show item selected in top right corner */
	var charXPlus = 0;
	if(inCombat == true)
	{
		charXPlus = bPos[2] * 256;
	}
	else
	{
		charXPlus = mPos[5] * 256;
	}
	
	buildSelectionArrow(142+charXPlus, 27, true);
}

function buildStartMenu()
{
	var selectionX = 0;
	
	switch(mPos[0])
	{
		case 1:
			selectionX = 85;
			break;
		case 2:
			selectionX = 170;
			break;
		case 3:
			selectionX = 295;
			break;
		case 4:
			selectionX = 378;
			break;
	}
	
	buildMenuBox(430, 727, 495, 260, '#0033CC');
	
	/* Text */
	cContext.fillStyle = "#FFFFFF";
	cContext.font = "18px Arial";
	
	cContext.fillText("Items",285,466.5);
	cContext.fillText("Skills",370,466.5);
	cContext.fillText("Equipment",455,466.5);
	cContext.fillText("Status",580,466.5);
	cContext.fillText("Save",662,466.5);
	
	buildSelectionArrow(270+selectionX, 450, true);
}

function buildItemMenu()
{
	var itemImages = [];
	var itemNames = [];
	var columnX = 0;
	var xPlus = 0;
	var yPlus = 0;
	var textPosX = 65;
	var textPosY = 124;
	var windPosX = 70;
	var windPosY = 110;
	var openMenu = 0;
	
	calcInventoryPosition();
	
	// Load images and names into a usable array.
	for(var i = 0; i < 3; i++)
	{
		itemImages.push([]);
		itemNames.push([]);
		for(var j = 0; j < 12; j++)
		{
			itemImages[i].push(itemArray[charArray[i][8][j]][8]);
			itemNames[i].push(itemArray[charArray[i][8][j]][0]);
		}
	}
	
	// Begin loading the visual aspects starting with the black background
	buildBlackBackground();
	
	// Drawing the menu boxes first then loading the images onto them. Loops once per character
	for(var i = 0; i < charArray.length; i++)
	{
		var loopXPlus = i * 255;
		
		buildMenuBox(75, 310+loopXPlus, 425, 160+loopXPlus, '#0033CC');
		
		cContext.drawImage(itemImages[i][0], 180+loopXPlus, 100, 40, 40);
		cContext.drawImage(itemImages[i][1], 247+loopXPlus, 100, 40, 40);
		cContext.drawImage(itemImages[i][2], 180+loopXPlus, 150, 40, 40);
		cContext.drawImage(itemImages[i][3], 247+loopXPlus, 150, 40, 40);
		cContext.drawImage(itemImages[i][4], 180+loopXPlus, 200, 40, 40);
		cContext.drawImage(itemImages[i][5], 247+loopXPlus, 200, 40, 40);
		cContext.drawImage(itemImages[i][6], 180+loopXPlus, 250, 40, 40);
		cContext.drawImage(itemImages[i][7], 247+loopXPlus, 250, 40, 40);
		cContext.drawImage(itemImages[i][8], 180+loopXPlus, 300, 40, 40);
		cContext.drawImage(itemImages[i][9], 247+loopXPlus, 300, 40, 40);
		cContext.drawImage(itemImages[i][10], 180+loopXPlus, 350, 40, 40);
		cContext.drawImage(itemImages[i][11], 247+loopXPlus, 350, 40, 40);
	}
	
	// Check to see which column the selection arrow is on
	if(mPos[2] == 2 || mPos[2] == 3)
	{
		columnX = 122;
	}
	else if (mPos[2] == 4 || mPos[2] == 5)
	{
		columnX = 244;
	}
	
	xPlus = (mPos[2] * 67) + columnX;
	yPlus = mPos[3] * 50;
	
	buildSelectionArrow(165+xPlus,110+yPlus, true);
	
	// Position of the floating window for item name
	switch(mPos[2])
	{
		case 0:
			break;
		case 1:
			windPosX += 255;
			textPosX += 255;
			break;
		case 2:
			windPosX += 255;
			textPosX += 255;
			break;
		case 3:
			windPosX += 510;
			textPosX += 510;
			break;
		case 4:
			windPosX += 510;
			textPosX += 510;
			break;
		case 5:
			windPosX += 765;
			textPosX += 765;
			break;
	}
	
	textPosY += mPos[3] * 50;
	windPosY += mPos[3] * 50;
	
	if(menuState >= 1)
	{
		openMenu = 48;
	}
	
	// Now that the position of the floating window is found, draw the window and then put the text in it
	buildMenuBox(windPosY, windPosX+82, windPosY+20+openMenu, windPosX-10, '#0033CC');
	
	cContext.fillStyle = "#FFFFFF";
	cContext.font = "14px Arial";
	cContext.textAlign="left";
	cContext.fillText(itemNames[charItemPos][inventoryPos],textPosX,textPosY);
	
	if(menuState >= 1)
	{
		// Line for splitting the item name from the actions
		cContext.strokeStyle = "#FFFFFF";
		cContext.beginPath();
		cContext.moveTo(windPosX - 5, windPosY + 18);
		cContext.lineTo(windPosX + 77, windPosY + 18);
		cContext.stroke();
		cContext.closePath();
		
		// Text highlighting to choose menu option
		if(mPos[4] == 0)
		{
			cContext.fillStyle = "#E3E600";
		}
		
		cContext.fillText('Use',textPosX, textPosY + 18);
		
		if(mPos[4] == 1)
		{
			cContext.fillStyle = "#E3E600";
		}
		else
		{
			cContext.fillStyle = "#FFFFFF";
		}
		cContext.fillText('Move',textPosX, textPosY + 32);
		
		if(mPos[4] == 2)
		{
			cContext.fillStyle = "#E3E600";
		}
		else
		{
			cContext.fillStyle = "#FFFFFF";
		}
		cContext.fillText('Description',textPosX, textPosY + 46);
	}
	
	if(menuState == 2)
	{
		buildCharTargetSelect();
	}
	// Move items in inventory
	else if(menuState == 3)
	{
		var columnX2 = 0;
	
		if(startMenuMovePos[0] == 2 || startMenuMovePos[0] == 3)
		{
			columnX2 = 122;
		}
		else if (startMenuMovePos[0] == 4 || startMenuMovePos[0] == 5)
		{
			columnX2 = 244;
		}
		
		var xPlus2 = (startMenuMovePos[0] * 67) + columnX2;
		var yPlus2 = startMenuMovePos[1] * 50;
		
		buildSelectionArrow(165+xPlus2, 110+yPlus2, true);
	}
}

function buildBattleItemSelect()
{
	var xPlus = (attackOrderArray[0] * 255);
	var itemImages = [];
	var itemNames = [];
	
	for(var i = 0; i < 12; i++)
	{
		itemImages.push(itemArray[charArray[attackOrderArray[0]][8][i]][8]);
		itemNames.push(itemArray[charArray[attackOrderArray[0]][8][i]][0]);
	}
	
	buildMenuBox(75, 310+xPlus, 425, 160+xPlus, '#0033CC');
	
	cContext.drawImage(itemImages[0], 180+xPlus, 100, 40, 40);
	cContext.drawImage(itemImages[1], 247+xPlus, 100, 40, 40);
	cContext.drawImage(itemImages[2], 180+xPlus, 150, 40, 40);
	cContext.drawImage(itemImages[3], 247+xPlus, 150, 40, 40);
	cContext.drawImage(itemImages[4], 180+xPlus, 200, 40, 40);
	cContext.drawImage(itemImages[5], 247+xPlus, 200, 40, 40);
	cContext.drawImage(itemImages[6], 180+xPlus, 250, 40, 40);
	cContext.drawImage(itemImages[7], 247+xPlus, 250, 40, 40);
	cContext.drawImage(itemImages[8], 180+xPlus, 300, 40, 40);
	cContext.drawImage(itemImages[9], 247+xPlus, 300, 40, 40);
	cContext.drawImage(itemImages[10], 180+xPlus, 350, 40, 40);
	cContext.drawImage(itemImages[11], 247+xPlus, 350, 40, 40);
	
	var columnX = 0;
	
	if(attackOrderArray[0] == 1)
	{
		columnX = 255;
	}
	else if(attackOrderArray[0] == 2)
	{
		columnX = 510;
	}
	
	var xPlus2 = (battleItemSelect[0] * 67) + columnX;
	var yPlus = battleItemSelect[1] * 50;
	
	buildSelectionArrow(165+xPlus2, 110+yPlus, true);
	
	var textPosX = 65;
	var textPosY = 124;
	var windPosX = 70;
	var windPosY = 110;
	
	/* Selection Item Name */
	if(battleItemSelect[0] == 0 && attackOrderArray[0] == 0)
	{
	
	}
	else if(battleItemSelect[0] == 1 && attackOrderArray[0] == 0)
	{
		windPosX += 255;
		textPosX += 255;
	}
	else if(battleItemSelect[0] == 0 && attackOrderArray[0] == 1)
	{
		windPosX += 255;
		textPosX += 255;
	}
	else if(battleItemSelect[0] == 1 && attackOrderArray[0] == 1)
	{
		windPosX += 510;
		textPosX += 510;
	}
	else if(battleItemSelect[0] == 0 && attackOrderArray[0] == 2)
	{
		windPosX += 510;
		textPosX += 510;
	}
	else if(battleItemSelect[0] == 1 && attackOrderArray[0] == 2)
	{
		windPosX += 765;
		textPosX += 765;
	}
	
	textPosY += battleItemSelect[1] * 50;
	windPosY += battleItemSelect[1] * 50;
	
	buildMenuBox(windPosY, windPosX+82, windPosY+20, windPosX-10, '#0033CC');
	
	cContext.fillStyle = "#FFFFFF";
	cContext.font = "14px Arial";
	cContext.alignText = 'left';
	
	calcInventoryPosition();
	
	cContext.fillText(itemNames[inventoryPos],textPosX,textPosY);
}

function buildStatusMenu()
{
	buildCharTargetSelect();
	
	if(menuState >= 1)
	{
		buildMenuBox(75, 820, 425, 160, '#0033CC');
	}
	
	if(menuState == 0)
	{
		blackBackground = false;
	}
	else if(menuState == 1)
	{
		blackBackground = true;
		cContext.fillStyle = "#FFFFFF";
		cContext.textAlign="center";
		
		cContext.font = "20px Arial";
		cContext.fillText('Blade',246,110);
		cContext.fillText('Blunt',402,110);
		cContext.fillText('Pierce',570,110);
		cContext.fillText('Focus',727,110);
		
		cContext.font = "16px Arial";
		cContext.fillText('Squire',246,135);
		cContext.fillText('Knight',246,205);
		cContext.fillText('Berserker',246,275);
		cContext.fillText('Blademaster',246,345);
		
		cContext.fillText('Cleric',402,135);
		cContext.fillText('Paladin',402,205);
		cContext.fillText('Crusader',402,275);
		cContext.fillText('Priest',402,345);
		
		cContext.fillText('Thief',570,135);
		cContext.fillText('Bard',570,205);
		cContext.fillText('Ninja',570,275);
		cContext.fillText('Dragoon',570,345);
		
		cContext.fillText('Mage',727,135);
		cContext.fillText('Warlock',727,205);
		cContext.fillText('Sorcerer',727,275);
		cContext.fillText('Enchanter',727,345);
		
		cContext.font = "12px Arial";
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][3],246,151);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][6],246,221);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][9],246,291);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][12],246,361);
		
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][15],402,151);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][18],402,221);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][21],402,291);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][24],402,361);
		
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][27],570,151);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][30],570,221);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][33],570,291);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][36],570,361);
		
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][39],727,151);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][42],727,221);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][45],727,291);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][48],727,361);
		
		var classXPlus = 0 + (mPos[2] * 163);
		var classYPlus = 0 + (mPos[3] * 70);
		
		buildSelectionArrow(188+classXPlus, 120+classYPlus, true);
	}
	else if(menuState == 2)
	{
		var classNumber = getClassNumber();
		
		cContext.fillStyle = "#FFFFFF";
		cContext.font = "22px Arial";
		cContext.textAlign="center";
		cContext.fillText(classNames[classNumber],490,105);
		
		/* Black background box for grid */
		cContext.fillStyle = '#000000';
		cContext.strokeStyle = '#000000';
		cContext.beginPath();
		cContext.moveTo(190,125);
		cContext.lineTo(790,125);
		cContext.lineTo(790,405);
		cContext.lineTo(190,405);
		cContext.lineTo(190,125);
		cContext.fill();
		cContext.closePath();
		
		/* Yellow background box for selection box */
		cContext.beginPath();
		cContext.fillStyle = '#E3E600';
		cContext.moveTo(480,255);
		cContext.lineTo(480,275);
		cContext.lineTo(500,275);
		cContext.lineTo(500,255);
		cContext.lineTo(480,255);
		cContext.fill();
		cContext.closePath();
		
		cContext.fillStyle = '#000000';
		
		/* Loops through whole grid row by row */
		for(var i = 0; i < 15; i++)
		{
			for(var j = 0; j < 31; j++)
			{
				var yCoord = (startMenuMovePos[1] + i) - 7;
				var xCoord = (startMenuMovePos[0] + j) - 15;
				var topAdj = 0;
				var botAdj = 0;
				var leftAdj = 0;
				var rightAdj = 0;
				
				/* This is for adjusting the border node sizes as they are only partially shown. */
				/* Top left */
				if(i == 0 && j == 0)
				{
					topAdj = 10;
					leftAdj = 10;
				}
				/* Top right */
				else if(i == 14 && j == 0)
				{
					botAdj = 10;
					leftAdj = 10;
				}
				/* Bottom left */
				else if(i == 0 && j == 30)
				{
					topAdj = 10;
					rightAdj = 10;
				}
				/* Bottom right */
				else if(i == 14 && j == 30)
				{
					botAdj = 10;
					rightAdj = 10;
				}
				else
				{
					/* Top Wall */
					if(i == 0 && j > 0 && j < 30)
					{
						topAdj = 10;
					}
					/* Left Wall */
					else if(i > 0 && i < 14 && j == 0)
					{
						leftAdj = 10;
					}
					/* Bottom wall */
					else if(i == 14 && j > 0 && j < 30)
					{
						botAdj = 10;
					}
					/* Right wall */
					else if(i > 0 && i < 14 && j == 30)
					{
						rightAdj = 10;
					}
				}
				
				/* If it is outside of the classGrid coordinates then make it black */
				if(xCoord < 0 || xCoord > 30 || yCoord < 0 || yCoord > 13 )
				{
					cContext.beginPath();
					cContext.moveTo((180+(20*j))+leftAdj,(115+(20*i))+topAdj);
					cContext.lineTo((200+(20*j))-rightAdj,(115+(20*i))+topAdj);
					cContext.lineTo((200+(20*j))-rightAdj,(135+(20*i))-botAdj);
					cContext.lineTo((180+(20*j))+leftAdj,(135+(20*i))-botAdj);
					cContext.lineTo((180+(20*j))+leftAdj,(115+(20*i))+topAdj);
					cContext.fill();
					cContext.closePath();
				}
				/* Else check to see what color it is and color the node to match */
				else
				{
					if(classArray[mPos[5]][classNumber][yCoord][xCoord] == 0)
					{
						cContext.fillStyle = '#000000';
					}
					else if(classArray[mPos[5]][classNumber][yCoord][xCoord][8] >= 0)
					{
						switch(classArray[mPos[5]][classNumber][yCoord][xCoord][8])
						{
							case 0:
								cContext.fillStyle = '#000000';
								break;
							case 1: 
								cContext.fillStyle = '#808080';
								break;
							case 2:
								cContext.fillStyle = '#FFFFFF';
								break;
							case 3:
								cContext.fillStyle = '#FF0000';
								break;
							case 4:
								cContext.fillStyle = '#0033CC';
								break;
						}
					}
					
					cContext.beginPath();
					cContext.moveTo((180+(20*j))+leftAdj+1,(115+(20*i))+topAdj+1);
					cContext.lineTo((200+(20*j))-rightAdj-1,(115+(20*i))+topAdj+1);
					cContext.lineTo((200+(20*j))-rightAdj-1,(135+(20*i))-botAdj-1);
					cContext.lineTo((180+(20*j))+leftAdj+1,(135+(20*i))-botAdj-1);
					cContext.lineTo((180+(20*j))+leftAdj+1,(115+(20*i))+topAdj+1);
					cContext.fill();
					cContext.closePath();
				}
			}
		}
		
		/* For displaying left wing menu for node stats */
		buildMenuBox(75, 170,425, 5, '#0033CC');
		
		if(classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][8] > 0)
		{
			tmpNodeName = classArray[mPos[5]][classNumber][startMenuMovePos[1]][startMenuMovePos[0]][0];
		}
		else
		{
			tmpNodeName = 'Undiscovered';
		}
		
		cContext.fillStyle = "#FFFFFF";
		cContext.font = "20px Arial";
		cContext.textAlign="center";
		cContext.fillText(tmpNodeName,86,110);
		
		if(tmpNodeName != 'Undiscovered' && tmpNodeName != 'Empty')
		{
			cContext.font = "14px Arial";
			cContext.textAlign="left";
			cContext.fillText('Strength: 2',15,150);
			cContext.fillText('Intelligence: 35',15,166);
			cContext.fillText('Vitality: 14',15,182);
			cContext.fillText('Agility: 1',15,198);
		}
	}
}

function buildEquipmentMenu()
{
	var slotYPlus = mPos[4] * 49;
	var invXPlus = mPos[2] * 67;
	var invYPlus = mPos[3] * 50;
	
	buildCharTargetSelect();
	
	if(menuState == 0)
	{
		blackBackground = false;
	}
	else if(menuState >= 1)
	{
		var itemImages = [];
		var itemNames = [];
		var equipmentImages = [];
		var equipmentNames = [];
		
		blackBackground = true;
		
		for(var i = 0; i < 12; i++)
		{
			itemImages.push(itemArray[charArray[mPos[5]][8][i]][8]);
			itemNames.push(itemArray[charArray[mPos[5]][8][i]][0]);
		}
		
		for(var i = 0; i < 6; i++)
		{
			equipmentImages.push(itemArray[charArray[mPos[5]][7][i]][8]);
			equipmentNames.push(itemArray[charArray[mPos[5]][7][i]][0]);
		}
		
		buildMenuBox(75, 437, 425, 287, '#0033CC');
		buildMenuBox(75, 692, 425, 542, '#0033CC');
		
		/* Equipment Text */
		cContext.fillStyle = "#FFFFFF";
		cContext.font = "16px Arial";
		cContext.textAlign="left";
		cContext.fillText("Main:",300,110);
		cContext.fillText("Off:",300,159);
		cContext.fillText("Head: ",300,208);
		cContext.fillText("Chest: ",300,257);
		cContext.fillText("Feet: ",300,306);
		cContext.fillText("Acc.:",300,355);
		
		/* Equipment Images */
		// Main Hand
		cContext.drawImage(equipmentImages[0],367, 84, 40, 40);
		// Off Hand
		cContext.drawImage(equipmentImages[1],367, 133, 40, 40);
		// Head
		cContext.drawImage(equipmentImages[2],367, 182, 40, 40);
		// Chest
		cContext.drawImage(equipmentImages[3],367, 231, 40, 40);
		// Legs
		cContext.drawImage(equipmentImages[4],367, 280, 40, 40);
		// Accessory
		cContext.drawImage(equipmentImages[5],367, 329, 40, 40);
		
		
		/* Inventory images */
		cContext.drawImage(itemImages[0], 562, 100, 40, 40);
		cContext.drawImage(itemImages[1], 629, 100, 40, 40);
		cContext.drawImage(itemImages[2], 562, 150, 40, 40);
		cContext.drawImage(itemImages[3], 629, 150, 40, 40);
		cContext.drawImage(itemImages[4], 562, 200, 40, 40);
		cContext.drawImage(itemImages[5], 629, 200, 40, 40);
		cContext.drawImage(itemImages[6], 562, 250, 40, 40);
		cContext.drawImage(itemImages[7], 629, 250, 40, 40);
		cContext.drawImage(itemImages[8], 562, 300, 40, 40);
		cContext.drawImage(itemImages[9], 629, 300, 40, 40);
		cContext.drawImage(itemImages[10], 562, 350, 40, 40);
		cContext.drawImage(itemImages[11], 629, 350, 40, 40);
		
		buildSelectionArrow(414,94+slotYPlus,false);
	}
	
	if(menuState >= 2)
	{
		buildSelectionArrow(547+invXPlus, 110+invYPlus, true);
	}
}

function buildMenuBox(c1, c2, c3, c4, bgColor)
{
	cContext.strokeStyle = '#FFFFFF';
	cContext.fillStyle = bgColor;
	cContext.beginPath();
	cContext.moveTo(c4+10, c1);
	cContext.lineTo(c2-10, c1);
	cContext.quadraticCurveTo(c2, c1, c2, c1+10);
	cContext.lineTo(c2, c3-10);
	cContext.quadraticCurveTo(c2, c3, c2-10, c3);
	cContext.lineTo(c4+10, c3);
	cContext.quadraticCurveTo(c4, c3, c4, c3-10);
	cContext.lineTo(c4, c1+10);
	cContext.quadraticCurveTo(c4, c1, c4+10, c1);
	cContext.fill();
	cContext.stroke();
	cContext.closePath();
}

function buildSelectionArrow (xPos, yPos, defaultDir)
{
	if(defaultDir == true)
	{
		cContext.beginPath();
		cContext.fillStyle = "#FFFFFF";
		cContext.moveTo(xPos,yPos);
		cContext.lineTo(xPos+10,yPos+10);
		cContext.lineTo(xPos,yPos+20);
		cContext.lineTo(xPos,yPos);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
	}
	else
	{
		cContext.beginPath();
		cContext.fillStyle = "#FFFFFF";
		cContext.moveTo(xPos+10,yPos);
		cContext.lineTo(xPos,yPos+10);
		cContext.lineTo(xPos+10,yPos+20);
		cContext.lineTo(xPos+10,yPos);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
	}
}

function buildBlackBackground()
{
	cContext.fillStyle = '#000000';
	cContext.beginPath();
	cContext.moveTo(0,75);
	cContext.lineTo(1000,75);
	cContext.lineTo(1000,425);
	cContext.lineTo(0,425);
	cContext.lineTo(0,75);
	cContext.fill();
	cContext.closePath();
}

function buildSkillMenu()
{
	buildCharTargetSelect();
	
	if(menuState == 0)
	{
		blackBackground = false;
	}
	else if(menuState >= 1)
	{
		blackBackground = true;
		
		buildMenuBox(75, 437, 425, 287, '#0033CC');
		buildMenuBox(75, 692, 425, 542, '#0033CC');
	}
}