function buildCanvas()
{
	buildWalls();
	if(inCombat == true)
	{
		buildMonster();
		buildMenuBackgrounds();
		buildTopMenus();
		
		/* Wait for the monster images to load */
		setTimeout
		(
			function()
			{
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
		, 10);
	}
	else if(menuOpen == true)
	{
		buildMenuBackgrounds();
		buildTopMenus();
		buildStartMenu();
		/* Items Menu */
		if(mPos[1] == 1)
		{
			buildSubMenus();
			buildItemMenu();
		}
		/* Skills Menu */
		else if(mPos[1] == 2)
		{
			buildSubMenus();
		}
		/* Equipment Menu */
		else if(mPos[1] == 3)
		{
			buildSubMenus();
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

function buildMenuBackgrounds()
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
	cContext.stroke();
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
	cContext.stroke();
	cContext.closePath();
}

function buildTopMenus()
{
	for(var i = 0; i < 3; i++)
	{
		var xPlus = (i * 255) + 70;
		
		if(charArray[i][0][1] == 0)
		{
			cContext.fillStyle = "#FF0000";
		}
		else
		{
			cContext.fillStyle = "#0033CC";
		}
		
		cContext.strokeStyle = "#FFFFFF";
		
		cContext.beginPath();
		cContext.moveTo(100+xPlus, 4);
		cContext.lineTo(230+xPlus, 4);
		cContext.quadraticCurveTo(240+xPlus, 4, 240+xPlus, 14);
		cContext.lineTo(240+xPlus, 60);
		cContext.quadraticCurveTo(240+xPlus, 70, 230+xPlus, 70);
		cContext.lineTo(100+xPlus, 70);
		cContext.quadraticCurveTo(90+xPlus, 70, 90+xPlus, 60);
		cContext.lineTo(90+xPlus, 14);
		cContext.quadraticCurveTo(90+xPlus, 4, 100+xPlus, 4);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
		
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
	var charImage = new Image();
	charImage.src = charArray[attackOrderArray[0]][0][8];
	charImage.onload = function()
	{
		cContext.drawImage(charImage, 175, 425, 75, 75);
	};
	
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
		
		/* Background and Border */
		cContext.fillStyle = "#0033CC";
		cContext.beginPath();
		cContext.moveTo(270, 430);
		cContext.lineTo(717, 430);
		cContext.quadraticCurveTo(727, 430, 727, 440);
		cContext.lineTo(727, 485);
		cContext.quadraticCurveTo(727, 495, 717, 495);
		cContext.lineTo(270, 495);
		cContext.quadraticCurveTo(260, 495, 260, 485);
		cContext.lineTo(260, 440);
		cContext.quadraticCurveTo(260, 430, 270, 430);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
		
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
		cContext.beginPath();
		cContext.fillStyle = "#FFFFFF";
		cContext.moveTo(270+selectionX,450);
		cContext.lineTo(280+selectionX,460);
		cContext.lineTo(270+selectionX,470);
		cContext.lineTo(270+selectionX,450);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
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
			enemyImage[0].src = beArray[0][0][10];
			enemyImage[0].onload = function()
			{
				cContext.drawImage(enemyImage[0], 450, 310, 100, 100);
			};
			break;
		case 2:
			if(numOfEnemies[0] == 1)
			{
				enemyImage[0].src = beArray[0][0][10];
				enemyImage[0].onload = function()
				{
					cContext.drawImage(enemyImage[0], 283, 310, 100, 100);
				};
			}
			
			if(numOfEnemies[1] == 1)
			{
				enemyImage[1].src = beArray[1][0][10];
				enemyImage[1].onload = function()
				{
					cContext.drawImage(enemyImage[1], 616, 310, 100, 100);
				};
			}
			break;
		case 3:
			if(numOfEnemies[0] == 1)
			{
				enemyImage[0].src = beArray[0][0][10];
				enemyImage[0].onload = function()
				{
					cContext.drawImage(enemyImage[0], 200, 310, 100, 100);
				};
			}
			
			if(numOfEnemies[1] == 1)
			{
				enemyImage[1].src = beArray[1][0][10];
				enemyImage[1].onload = function()
				{
					cContext.drawImage(enemyImage[1], 450, 310, 100, 100);
				};
			}
			
			if(numOfEnemies[2] == 1)
			{
				enemyImage[2].src = beArray[2][0][10];
				enemyImage[2].onload = function()
				{
					cContext.drawImage(enemyImage[2], 700, 310, 100, 100);
				};
			}
			break;
		case 4:
			if(numOfEnemies[1] == 1)
			{
				enemyImage[1].src = beArray[1][0][10];
				enemyImage[1].onload = function()
				{
					cContext.drawImage(enemyImage[1], 365, 260, 100, 100);
				};
			}
			
			if(numOfEnemies[2] == 1)
			{
				enemyImage[2].src = beArray[2][0][10];
				enemyImage[2].onload = function()
				{
					cContext.drawImage(enemyImage[2], 535, 260, 100, 100);
				};
			}
			
			if(numOfEnemies[0] == 1)
			{
				enemyImage[0].src = beArray[0][0][10];
				enemyImage[0].onload = function()
				{
					cContext.drawImage(enemyImage[0], 200, 310, 100, 100);
				};
			}
			
			if(numOfEnemies[3] == 1)
			{
				enemyImage[3].src = beArray[3][0][10];
				enemyImage[3].onload = function()
				{
					cContext.drawImage(enemyImage[3], 700, 310, 100, 100);
				};
			}
			break;
		case 5:
			if(numOfEnemies[1] == 1)
			{
				enemyImage[1].src = beArray[1][0][10];
				enemyImage[1].onload = function()
				{
					cContext.drawImage(enemyImage[1], 325, 260, 100, 100);
				};
			}
			
			if(numOfEnemies[3] == 1)
			{
				enemyImage[3].src = beArray[3][0][10];
				enemyImage[3].onload = function()
				{
					cContext.drawImage(enemyImage[3], 575, 260, 100, 100);
				};
			}
			
			if(numOfEnemies[0] == 1)
			{
				enemyImage[0].src = beArray[0][0][10];
				enemyImage[0].onload = function()
				{
					cContext.drawImage(enemyImage[0], 200, 310, 100, 100);
				};
			}
			
			if(numOfEnemies[2] == 1)
			{
				enemyImage[2].src = beArray[2][0][10];
				enemyImage[2].onload = function()
				{
					cContext.drawImage(enemyImage[2], 450, 310, 100, 100);
				};
			}
			
			if(numOfEnemies[4] == 1)
			{
				enemyImage[4].src = beArray[4][0][10];
				enemyImage[4].onload = function()
				{
					cContext.drawImage(enemyImage[4], 700, 310, 100, 100);
				};
			}
			break;
	}
}

function buildEnemyTargetSelect()
{
	switch(numOfEnemies.length)
	{
		case 1:
			cContext.beginPath();
			cContext.fillStyle = "#FF0000";
			cContext.moveTo(485,255);
			cContext.lineTo(515,255);
			cContext.lineTo(500,290);
			cContext.lineTo(485,255);
			cContext.fill();
			cContext.closePath();
			break;
		case 2:
			if(bPos[2] == 0)
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(318,255);
				cContext.lineTo(348,255);
				cContext.lineTo(333,290);
				cContext.lineTo(318,255);
				cContext.fill();
				cContext.closePath();
			}
			else
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(651,255);
				cContext.lineTo(681,255);
				cContext.lineTo(666,290);
				cContext.lineTo(651,255);
				cContext.fill();
				cContext.closePath();
			}
			break;
		case 3:
			if(bPos[2] == 0)
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(235,255);
				cContext.lineTo(265,255);
				cContext.lineTo(250,290);
				cContext.lineTo(235,255);
				cContext.fill();
				cContext.closePath();
			}
			else if(bPos[2] == 1)
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(485,255);
				cContext.lineTo(515,255);
				cContext.lineTo(500,290);
				cContext.lineTo(485,255);
				cContext.fill();
				cContext.closePath();
			}
			else
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(735,255);
				cContext.lineTo(765,255);
				cContext.lineTo(750,290);
				cContext.lineTo(735,255);
				cContext.fill();
				cContext.closePath();
			}
			break;
		case 4:
			if(bPos[2] == 0)
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(235,255);
				cContext.lineTo(265,255);
				cContext.lineTo(250,290);
				cContext.lineTo(235,255);
				cContext.fill();
				cContext.closePath();
			}
			else if(bPos[2] == 1)
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(400,205);
				cContext.lineTo(430,205);
				cContext.lineTo(415,240);
				cContext.lineTo(400,205);
				cContext.fill();
				cContext.closePath();
			}
			else if(bPos[2] == 2)
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(570,205);
				cContext.lineTo(600,205);
				cContext.lineTo(585,240);
				cContext.lineTo(570,205);
				cContext.fill();
				cContext.closePath();
			}
			else
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(735,255);
				cContext.lineTo(765,255);
				cContext.lineTo(750,290);
				cContext.lineTo(735,255);
				cContext.fill();
				cContext.closePath();
			}
			break;
		case 5:
			if(bPos[2] == 0)
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(235,255);
				cContext.lineTo(265,255);
				cContext.lineTo(250,290);
				cContext.lineTo(235,255);
				cContext.fill();
				cContext.closePath();
			}
			else if(bPos[2] == 1)
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(360,205);
				cContext.lineTo(390,205);
				cContext.lineTo(375,240);
				cContext.lineTo(360,205);
				cContext.fill();
				cContext.closePath();
			}
			else if(bPos[2] == 2)
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(485,255);
				cContext.lineTo(515,255);
				cContext.lineTo(500,290);
				cContext.lineTo(485,255);
				cContext.fill();
				cContext.closePath();
			}
			else if(bPos[2] == 3)
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(610,205);
				cContext.lineTo(640,205);
				cContext.lineTo(625,240);
				cContext.lineTo(610,205);
				cContext.fill();
				cContext.closePath();
			}
			else
			{
				cContext.beginPath();
				cContext.fillStyle = "#FF0000";
				cContext.moveTo(735,255);
				cContext.lineTo(765,255);
				cContext.lineTo(750,290);
				cContext.lineTo(735,255);
				cContext.fill();
				cContext.closePath();
			}
			break;
	}
}

function buildCharTargetSelect()
{
	/* Need to put in logic to show item selected in top right corner */
	var charXPlus = bPos[2] * 250;
		
	cContext.beginPath();
	cContext.fillStyle = "#FFFFFF";
	cContext.moveTo(142+charXPlus,27);
	cContext.lineTo(152+charXPlus,37);
	cContext.lineTo(142+charXPlus,47);
	cContext.lineTo(142+charXPlus,27);
	cContext.fill();
	cContext.stroke();
	cContext.closePath();
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
	
	/* Background and Border */
	cContext.strokeStyle = "#FFFFFF";
	cContext.fillStyle = "#0033CC";
	cContext.beginPath();
	cContext.moveTo(270, 430);
	cContext.lineTo(717, 430);
	cContext.quadraticCurveTo(727, 430, 727, 440);
	cContext.lineTo(727, 485);
	cContext.quadraticCurveTo(727, 495, 717, 495);
	cContext.lineTo(270, 495);
	cContext.quadraticCurveTo(260, 495, 260, 485);
	cContext.lineTo(260, 440);
	cContext.quadraticCurveTo(260, 430, 270, 430);
	cContext.fill();
	cContext.stroke();
	cContext.closePath();
	
	/* Text */
	cContext.fillStyle = "#FFFFFF";
	cContext.font = "18px Arial";
	
	cContext.fillText("Items",285,466.5);
	cContext.fillText("Skills",370,466.5);
	cContext.fillText("Equipment",455,466.5);
	cContext.fillText("Status",580,466.5);
	cContext.fillText("Class",662,466.5);
	
	/* Selection Arrow */
	if(mPos[1] == 0)
	{
		cContext.beginPath();
		cContext.fillStyle = "#FFFFFF";
		cContext.moveTo(270+selectionX,450);
		cContext.lineTo(280+selectionX,460);
		cContext.lineTo(270+selectionX,470);
		cContext.lineTo(270+selectionX,450);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
	}
}

function buildSubMenus()
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
	
	for(var i = 0; i < charArray.length; i++)
	{
		var xPlus = (i * 255) + 70;
		
		/* Background and Border */
		cContext.strokeStyle = "#FFFFFF";
		cContext.fillStyle = "#0033CC";
		cContext.beginPath();
		cContext.moveTo(100+xPlus, 75);
		cContext.lineTo(230+xPlus, 75);
		cContext.quadraticCurveTo(240+xPlus, 75, 240+xPlus, 85);
		cContext.lineTo(240+xPlus, 415);
		cContext.quadraticCurveTo(240+xPlus, 425, 230+xPlus, 425);
		cContext.lineTo(100+xPlus, 425);
		cContext.quadraticCurveTo(90+xPlus, 425, 90+xPlus, 415);
		cContext.lineTo(90+xPlus, 85);
		cContext.quadraticCurveTo(90+xPlus, 75, 100+xPlus, 75);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
	}
}

function buildItemMenu()
{
	var itemImages = [];
	var loadImages = [];
	var itemNames = [];
	for(var i = 0; i < 3; i++)
	{
		itemImages.push([]);
		loadImages.push([]);
		itemNames.push([]);
		for(var j = 0; j < 12; j++)
		{
			itemImages[i].push(itemArray[charArray[i][8][j]][8]);
			loadImages[i].push(new Image());
			itemNames[i].push(itemArray[charArray[i][8][j]][0]);
		}
	}
	
	/* Character 1 */
	loadImages[0][0].src = itemImages[0][0];
	loadImages[0][0].onload = function()
	{
		cContext.drawImage(loadImages[0][0], 180, 100, 40, 40);
	};
	
	loadImages[0][1].src = itemImages[0][1];
	loadImages[0][1].onload = function()
	{
		cContext.drawImage(loadImages[0][1], 247, 100, 40, 40);
	};
	
	loadImages[0][2].src = itemImages[0][2];
	loadImages[0][2].onload = function()
	{
		cContext.drawImage(loadImages[0][2], 180, 150, 40, 40);
	};
	
	loadImages[0][3].src = itemImages[0][3];
	loadImages[0][3].onload = function()
	{
		cContext.drawImage(loadImages[0][3], 247, 150, 40, 40);
	};
	
	loadImages[0][4].src = itemImages[0][4];
	loadImages[0][4].onload = function()
	{
		cContext.drawImage(loadImages[0][4], 180, 200, 40, 40);
	};
	
	loadImages[0][5].src = itemImages[0][5];
	loadImages[0][5].onload = function()
	{
		cContext.drawImage(loadImages[0][5], 247, 200, 40, 40);
	};
	
	loadImages[0][6].src = itemImages[0][6];
	loadImages[0][6].onload = function()
	{
		cContext.drawImage(loadImages[0][6], 180, 250, 40, 40);
	};
	
	loadImages[0][7].src = itemImages[0][7];
	loadImages[0][7].onload = function()
	{
		cContext.drawImage(loadImages[0][7], 247, 250, 40, 40);
	};
	
	loadImages[0][8].src = itemImages[0][8];
	loadImages[0][8].onload = function()
	{
		cContext.drawImage(loadImages[0][8], 180, 300, 40, 40);
	};
	
	loadImages[0][9].src = itemImages[0][9];
	loadImages[0][9].onload = function()
	{
		cContext.drawImage(loadImages[0][9], 247, 300, 40, 40);
	};
	
	loadImages[0][10].src = itemImages[0][10];
	loadImages[0][10].onload = function()
	{
		cContext.drawImage(loadImages[0][10], 180, 350, 40, 40);
	};
	
	loadImages[0][11].src = itemImages[0][11];
	loadImages[0][11].onload = function()
	{
		cContext.drawImage(loadImages[0][11], 247, 350, 40, 40);
	};
	
	/* Character 2 */
	loadImages[1][0].src = itemImages[1][0];
	loadImages[1][0].onload = function()
	{
		cContext.drawImage(loadImages[1][0], 435, 100, 40, 40);
	};
	
	loadImages[1][1].src = itemImages[1][1];
	loadImages[1][1].onload = function()
	{
		cContext.drawImage(loadImages[1][1], 502, 100, 40, 40);
	};
	
	loadImages[1][2].src = itemImages[1][2];
	loadImages[1][2].onload = function()
	{
		cContext.drawImage(loadImages[1][2], 435, 150, 40, 40);
	};
	
	loadImages[1][3].src = itemImages[1][3];
	loadImages[1][3].onload = function()
	{
		cContext.drawImage(loadImages[1][3], 502, 150, 40, 40);
	};
	
	loadImages[1][4].src = itemImages[1][4];
	loadImages[1][4].onload = function()
	{
		cContext.drawImage(loadImages[1][4], 435, 200, 40, 40);
	};
	
	loadImages[1][5].src = itemImages[1][5];
	loadImages[1][5].onload = function()
	{
		cContext.drawImage(loadImages[1][5], 502, 200, 40, 40);
	};
	
	loadImages[1][6].src = itemImages[1][6];
	loadImages[1][6].onload = function()
	{
		cContext.drawImage(loadImages[1][6], 435, 250, 40, 40);
	};
	
	loadImages[1][7].src = itemImages[1][7];
	loadImages[1][7].onload = function()
	{
		cContext.drawImage(loadImages[1][7], 502, 250, 40, 40);
	};
	
	loadImages[1][8].src = itemImages[1][8];
	loadImages[1][8].onload = function()
	{
		cContext.drawImage(loadImages[1][8], 435, 300, 40, 40);
	};
	
	loadImages[1][9].src = itemImages[1][9];
	loadImages[1][9].onload = function()
	{
		cContext.drawImage(loadImages[1][9], 502, 300, 40, 40);
	};
	
	loadImages[1][10].src = itemImages[1][10];
	loadImages[1][10].onload = function()
	{
		cContext.drawImage(loadImages[1][10], 435, 350, 40, 40);
	};
	
	loadImages[1][11].src = itemImages[1][11];
	loadImages[1][11].onload = function()
	{
		cContext.drawImage(loadImages[1][11], 502, 350, 40, 40);
	};
	
	/* Character 3 */
	loadImages[2][0].src = itemImages[2][0];
	loadImages[2][0].onload = function()
	{
		cContext.drawImage(loadImages[2][0], 690, 100, 40, 40);
	};
	
	loadImages[2][1].src = itemImages[2][1];
	loadImages[2][1].onload = function()
	{
		cContext.drawImage(loadImages[2][1], 757, 100, 40, 40);
	};
	
	loadImages[2][2].src = itemImages[2][2];
	loadImages[2][2].onload = function()
	{
		cContext.drawImage(loadImages[2][2], 690, 150, 40, 40);
	};
	
	loadImages[2][3].src = itemImages[2][3];
	loadImages[2][3].onload = function()
	{
		cContext.drawImage(loadImages[2][3], 757, 150, 40, 40);
	};
	
	loadImages[2][4].src = itemImages[2][4];
	loadImages[2][4].onload = function()
	{
		cContext.drawImage(loadImages[2][4], 690, 200, 40, 40);
	};
	
	loadImages[2][5].src = itemImages[2][5];
	loadImages[2][5].onload = function()
	{
		cContext.drawImage(loadImages[2][5], 757, 200, 40, 40);
	};
	
	loadImages[2][6].src = itemImages[2][6];
	loadImages[2][6].onload = function()
	{
		cContext.drawImage(loadImages[2][6], 690, 250, 40, 40);
	};
	
	loadImages[2][7].src = itemImages[2][7];
	loadImages[2][7].onload = function()
	{
		cContext.drawImage(loadImages[2][7], 757, 250, 40, 40);
	};
	
	loadImages[2][8].src = itemImages[2][8];
	loadImages[2][8].onload = function()
	{
		cContext.drawImage(loadImages[2][8], 690, 300, 40, 40);
	};
	
	loadImages[2][9].src = itemImages[2][9];
	loadImages[2][9].onload = function()
	{
		cContext.drawImage(loadImages[2][9], 757, 300, 40, 40);
	};
	
	loadImages[2][10].src = itemImages[2][10];
	loadImages[2][10].onload = function()
	{
		cContext.drawImage(loadImages[2][10], 690, 350, 40, 40);
	};
	
	loadImages[2][11].src = itemImages[2][11];
	loadImages[2][11].onload = function()
	{
		cContext.drawImage(loadImages[2][11], 757, 350, 40, 40);
	};
	
	var columnX = 0;
	
	if(mPos[2] == 2 || mPos[2] == 3)
	{
		columnX = 122;
	}
	else if (mPos[2] == 4 || mPos[2] == 5)
	{
		columnX = 244;
	}
	
	var xPlus = (mPos[2] * 67) + columnX;
	var yPlus = mPos[3] * 50;
	
	/* Selection Arrow */
	cContext.beginPath();
	cContext.fillStyle = "#FFFFFF";
	cContext.moveTo(165+xPlus,110+yPlus);
	cContext.lineTo(175+xPlus,120+yPlus);
	cContext.lineTo(165+xPlus,130+yPlus);
	cContext.lineTo(165+xPlus,110+yPlus);
	cContext.fill();
	cContext.stroke();
	cContext.closePath();
	
	var textPosX = 65;
	var textPosY = 124;
	var windPosX = 70;
	var windPosY = 110;
	var openMenu = 0;
	
	/* Selection Item Name */
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
	
	/* Background and Border */
	cContext.fillStyle = "#0033CC";
	cContext.beginPath();
	cContext.moveTo(windPosX, windPosY);
	cContext.lineTo(windPosX+72, windPosY);
	cContext.quadraticCurveTo(windPosX+82, windPosY, windPosX+82, windPosY+10);
	cContext.lineTo(windPosX+82, windPosY+5+openMenu);
	cContext.quadraticCurveTo(windPosX+82, windPosY+20+openMenu, windPosX+72, windPosY+20+openMenu);
	cContext.lineTo(windPosX, windPosY+20+openMenu);
	cContext.quadraticCurveTo(windPosX-10, windPosY+20+openMenu, windPosX-10, windPosY+10+openMenu);
	cContext.lineTo(windPosX-10, windPosY+10);
	cContext.quadraticCurveTo(windPosX-10, windPosY, windPosX, windPosY);
	cContext.fill();
	cContext.stroke();
	cContext.closePath();
	
	cContext.fillStyle = "#FFFFFF";
	cContext.font = "14px Arial";
	
	calcInventoryPosition();
	
	cContext.fillText(itemNames[charItemPos][inventoryPos],textPosX,textPosY);
	if(menuState >= 1)
	{
		cContext.strokeStyle = "#FFFFFF";
		cContext.beginPath();
		cContext.moveTo(windPosX - 5, windPosY + 18);
		cContext.lineTo(windPosX + 77, windPosY + 18);
		cContext.stroke();
		cContext.closePath();
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
		var charXPlus = mPos[5] * 250;
		
		cContext.beginPath();
		cContext.fillStyle = "#FFFFFF";
		cContext.moveTo(142+charXPlus,27);
		cContext.lineTo(152+charXPlus,37);
		cContext.lineTo(142+charXPlus,47);
		cContext.lineTo(142+charXPlus,27);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
	}
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
		
		/* Selection Arrow */
		cContext.beginPath();
		cContext.fillStyle = "#E3E600";
		cContext.moveTo(165+xPlus2,110+yPlus2);
		cContext.lineTo(175+xPlus2,120+yPlus2);
		cContext.lineTo(165+xPlus2,130+yPlus2);
		cContext.lineTo(165+xPlus2,110+yPlus2);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
	}
}

function buildBattleItemSelect()
{
	var xPlus = (attackOrderArray[0] * 255);
	var itemImages = [];
	var loadImages = [];
	var itemNames = [];
	
	for(var i = 0; i < 12; i++)
	{
		itemImages.push(itemArray[charArray[attackOrderArray[0]][8][i]][8]);
		loadImages.push(new Image());
		itemNames.push(itemArray[charArray[attackOrderArray[0]][8][i]][0]);
	}
	
	/* Character 1 */
	loadImages[0].src = itemImages[0];
	loadImages[0].onload = function()
	{
		cContext.drawImage(loadImages[0], 180+xPlus, 100, 40, 40);
	};
	
	loadImages[1].src = itemImages[1];
	loadImages[1].onload = function()
	{
		cContext.drawImage(loadImages[1], 247+xPlus, 100, 40, 40);
	};
	
	loadImages[2].src = itemImages[2];
	loadImages[2].onload = function()
	{
		cContext.drawImage(loadImages[2], 180+xPlus, 150, 40, 40);
	};
	
	loadImages[3].src = itemImages[3];
	loadImages[3].onload = function()
	{
		cContext.drawImage(loadImages[3], 247+xPlus, 150, 40, 40);
	};
	
	loadImages[4].src = itemImages[4];
	loadImages[4].onload = function()
	{
		cContext.drawImage(loadImages[4], 180+xPlus, 200, 40, 40);
	};
	
	loadImages[5].src = itemImages[5];
	loadImages[5].onload = function()
	{
		cContext.drawImage(loadImages[5], 247+xPlus, 200, 40, 40);
	};
	
	loadImages[6].src = itemImages[6];
	loadImages[6].onload = function()
	{
		cContext.drawImage(loadImages[6], 180+xPlus, 250, 40, 40);
	};
	
	loadImages[7].src = itemImages[7];
	loadImages[7].onload = function()
	{
		cContext.drawImage(loadImages[7], 247+xPlus, 250, 40, 40);
	};
	
	loadImages[8].src = itemImages[8];
	loadImages[8].onload = function()
	{
		cContext.drawImage(loadImages[8], 180+xPlus, 300, 40, 40);
	};
	
	loadImages[9].src = itemImages[9];
	loadImages[9].onload = function()
	{
		cContext.drawImage(loadImages[9], 247+xPlus, 300, 40, 40);
	};
	
	loadImages[10].src = itemImages[10];
	loadImages[10].onload = function()
	{
		cContext.drawImage(loadImages[10], 180+xPlus, 350, 40, 40);
	};
	
	loadImages[11].src = itemImages[11];
	loadImages[11].onload = function()
	{
		cContext.drawImage(loadImages[11], 247+xPlus, 350, 40, 40);
	};
	
	/* Background and Border */
	cContext.strokeStyle = "#FFFFFF";
	cContext.fillStyle = "#0033CC";
	cContext.beginPath();
	cContext.moveTo(170+xPlus, 75);
	cContext.lineTo(300+xPlus, 75);
	cContext.quadraticCurveTo(310+xPlus, 75, 310+xPlus, 85);
	cContext.lineTo(310+xPlus, 415);
	cContext.quadraticCurveTo(310+xPlus, 425, 300+xPlus, 425);
	cContext.lineTo(170+xPlus, 425);
	cContext.quadraticCurveTo(160+xPlus, 425, 160+xPlus, 415);
	cContext.lineTo(160+xPlus, 85);
	cContext.quadraticCurveTo(160+xPlus, 75, 170+xPlus, 75);
	cContext.fill();
	cContext.stroke();
	cContext.closePath();
	
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
	
	/* Selection Arrow */
	cContext.beginPath();
	cContext.fillStyle = "#FFFFFF";
	cContext.moveTo(165+xPlus2,110+yPlus);
	cContext.lineTo(175+xPlus2,120+yPlus);
	cContext.lineTo(165+xPlus2,130+yPlus);
	cContext.lineTo(165+xPlus2,110+yPlus);
	cContext.fill();
	cContext.stroke();
	cContext.closePath();
	
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
	
	/* Background and Border */
	cContext.fillStyle = "#0033CC";
	cContext.beginPath();
	cContext.moveTo(windPosX, windPosY);
	cContext.lineTo(windPosX+72, windPosY);
	cContext.quadraticCurveTo(windPosX+82, windPosY, windPosX+82, windPosY+10);
	cContext.lineTo(windPosX+82, windPosY+5);
	cContext.quadraticCurveTo(windPosX+82, windPosY+20, windPosX+72, windPosY+20);
	cContext.lineTo(windPosX, windPosY+20);
	cContext.quadraticCurveTo(windPosX-10, windPosY+20, windPosX-10, windPosY+10);
	cContext.lineTo(windPosX-10, windPosY+10);
	cContext.quadraticCurveTo(windPosX-10, windPosY, windPosX, windPosY);
	cContext.fill();
	cContext.stroke();
	cContext.closePath();
	
	cContext.fillStyle = "#FFFFFF";
	cContext.font = "14px Arial";
	
	calcInventoryPosition();
	
	cContext.fillText(itemNames[inventoryPos],textPosX,textPosY);
}

function buildStatusMenu()
{
	var charXPlus = mPos[5] * 250;
			
	cContext.beginPath();
	cContext.fillStyle = "#FFFFFF";
	cContext.moveTo(142+charXPlus,27);
	cContext.lineTo(152+charXPlus,37);
	cContext.lineTo(142+charXPlus,47);
	cContext.lineTo(142+charXPlus,27);
	cContext.fill();
	cContext.stroke();
	cContext.closePath();
	
	if(menuState >= 1)
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
		
		/* Background and Border */
		cContext.strokeStyle = "#FFFFFF";
		cContext.fillStyle = "#0033CC";
		cContext.beginPath();
		cContext.moveTo(170, 75);
		cContext.lineTo(810, 75);
		cContext.quadraticCurveTo(820, 75, 820, 85);
		cContext.lineTo(820, 415);
		cContext.quadraticCurveTo(820, 425, 810, 425);
		cContext.lineTo(170, 425);
		cContext.quadraticCurveTo(160, 425, 160, 415);
		cContext.lineTo(160, 85);
		cContext.quadraticCurveTo(160, 75, 170, 75);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
	}
	
	if(menuState == 1)
	{
		cContext.fillStyle = "#FFFFFF";
		cContext.font = "20px Arial";
		
		cContext.fillText('Blade',220,110);
		cContext.fillText('Blunt',380,110);
		cContext.fillText('Pierce',540,110);
		cContext.fillText('Focus',700,110);
		
		cContext.font = "16px Arial";
		cContext.fillText('Squire',222,135);
		cContext.fillText('Knight',221,205);
		cContext.fillText('Berserker',214,275);
		cContext.fillText('Blademaster',207,345);
		
		cContext.fillText('Cleric',382,135);
		cContext.fillText('Paladin',378,205);
		cContext.fillText('Crusader',373,275);
		cContext.fillText('Priest',382,345);
		
		cContext.fillText('Thief',550,135);
		cContext.fillText('Bard',551,205);
		cContext.fillText('Ninja',550,275);
		cContext.fillText('Dragoon',540,345);
		
		cContext.fillText('Mage',708,135);
		cContext.fillText('Warlock',701,205);
		cContext.fillText('Sorcerer',700,275);
		cContext.fillText('Enchanter',698,345);
		
		cContext.font = "12px Arial";
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][3],224,151);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][6],224,221);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][9],224,291);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][12],224,361);
		
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][15],384,151);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][18],384,221);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][21],384,291);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][24],384,361);
		
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][27],548,151);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][30],548,221);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][33],548,291);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][36],548,361);
		
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][39],707,151);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][42],707,221);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][45],707,291);
		cContext.fillText('cLvls: ' + charArray[mPos[5]][9][48],707,361);
		
		var classXPlus = 0 + (mPos[2] * 163);
		var classYPlus = 0 + (mPos[3] * 70);
		
		cContext.beginPath();
		cContext.fillStyle = "#FFFFFF";
		cContext.moveTo(188+classXPlus,120+classYPlus);
		cContext.lineTo(198+classXPlus,130+classYPlus);
		cContext.lineTo(188+classXPlus,140+classYPlus);
		cContext.lineTo(188+classXPlus,120+classYPlus);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
	}
	else if(menuState == 2)
	{
		cContext.fillStyle = "#FFFFFF";
		cContext.font = "22px Arial";
		cContext.textAlign="center";
		cContext.fillText('Squire',490,105);
		
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
		
		var classNumber = getClassNumber();
		
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
				/* Else check to se what color it is and color the node to match */
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
								cContext.fillStyle = '#808080';
								break;
							case 1:
								cContext.fillStyle = '#FFFFFF';
								break;
							case 2:
								cContext.fillStyle = '#FF0000';
								break;
							case 3:
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
		/* Background and Border */
		cContext.strokeStyle = "#FFFFFF";
		cContext.fillStyle = "#0033CC";
		cContext.beginPath();
		cContext.moveTo(15, 75);
		cContext.lineTo(160, 75);
		cContext.quadraticCurveTo(170, 75, 170, 85);
		cContext.lineTo(170, 415);
		cContext.quadraticCurveTo(170, 425, 160, 425);
		cContext.lineTo(15, 425);
		cContext.quadraticCurveTo(5, 425, 5, 415);
		cContext.lineTo(5, 85);
		cContext.quadraticCurveTo(5, 75, 15, 75);
		cContext.fill();
		cContext.stroke();
		cContext.closePath();
		
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