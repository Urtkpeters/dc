function loadChar()
{
	/*
		0.  General   - Name, Current HP, Max HP, Current MP, Max MP, Current XP, Max XP, Level, Image Name
		1.  Offence   - Damage Min, Damage Max, Hit Chance, Crit Chance, Crit Power, Speed, Status Effect, Status Effect Chance
		2.  Defence   - Dodge Chance, Block Chance, Block Reduction, Defence Reduction, Spell Dodge Chance, Resistance Reduction, Status damage resistance
		3.  Magic     - Power Factor, Heal Factor, Magic Hit Chance
		4.  Buffs     - List of buff IDs
		5.  Debuffs   - List of debuff IDs
		6.  Stats     - Strength, Agility, Vitality, Intelligence
		7.  Equipment - Main Hand, Off-Hand, Head, Chest, Hands, Shoes, Accessory
		8.  Inventory - List of item IDs
		9.  Classes   - Current Class, Squire Current, Squire Max, Squire Level
		10. Skills
		
			Strength = Damage of attack, Amount of damage blocked
			Agility = Speed in attack order, dodge chance
			Vitality = Max life, Status damage resistance, block chance
			Intelligence = Magic damage, Magic resistance
	*/
	var tempName = '';
	
	for(var i = 0; i < 3; i++)
	{
		charArray.push([]);
		switch(i)
		{
			case 0:
				tempName = 'Frank';
				break;
			case 1:
				tempName = 'Ann';
				break;
			case 2:
				tempName = 'Bertrand';
				break;
		}
		
		/* General */
		charArray[i][0] = [tempName,40,50,10,10,0,100,1,"images/" + tempName+".jpg"];
		var charImage = new Image();
		charImage.src = charArray[i][0][8];
		charArray[i][0][8] = charImage;
		
		/* Buffs */
		charArray[i][4] = [];
		
		/* Debuffs */
		charArray[i][5] = [];
		
		/* Stats */
		charArray[i][6] = [5,5,5,5];
		
		/* Equipment */
		charArray[i][7] = [1,0,0,2,3,0,0];
		
		/* Items */
		charArray[i][8] = [4,4,4,0,0,0,0,0,0,0,0,1];
		
		/* Classes */
		/* Squire, Knight, Berserker, Blademaster, Cleric, Paladin, Crusader, Priest, Thief, Bard, Ninja, Dragoon, Mage, Warlock, Sorcerer, Enchanter */
		charArray[i][9] = [0,0,100,20,0,20,1,0,20,1,0,20,1,0,20,1,0,20,1,0,20,1,0,20,1,0,20,1,0,20,1,0,20,1,0,20,1,0,20,1,0,20,1,0,20,1,0,20,1];
		
		calcCharStats(i);
	}
}

function applyXP(earnedXP)
{
	for(var i = 0; i < charArray.length; i++)
	{
		if(charArray[i][0][1] > 0)
		{
			charArray[i][0][5] += earnedXP;
			
			if(charArray[i][0][5] > charArray[i][0][6])
			{
				levelUp(i);
			}
		}
	}
}

function levelUp(charNumber)
{
	/* Removing the XP and adding the level */
	charArray[charNumber][0][5] -= charArray[charNumber][0][6];
	charArray[charNumber][0][6] = charArray[charNumber][0][6] * 1.2;
	charArray[charNumber][0][7] += 1;
	
	/* Adding stats */
	charArray[charNumber][4][0] += 1;
	charArray[charNumber][4][1] += 1;
	charArray[charNumber][4][2] += 1;
	charArray[charNumber][4][3] += 1;
	
	appendOutput(charArray[charNumber][0][0] + ' has achieved level ' + charArray[charNumber][0][7] + '!');
}


function applyCP(earnedCP)
{
	for(var i = 0; i < charArray.length; i++)
	{
		if(charArray[i][0][1] > 0)
		{
			charArray[i][9][1*(charArray[i][9][0]+1)] += earnedCP;
			
			if(charArray[i][9][1*(charArray[i][9][0]+1)] > charArray[i][0][(1*(charArray[i][9][0]+1))+1])
			{
				classUP(i);
			}
		}
	}
}

function classUP(charNumber)
{
	var className = '';
	
	switch(charArray[charNumber][9][0])
	{
		case 0:
			className = 'Squire';
			break;
	}
	
	charArray[charNumber][9][(1*(charArray[charNumber][9][0]+1))+2] += 1;
	appendOutput(charArray[charNumber][0][0] + ' has achieved ' + className + ' level ' + charArray[charNumber][9][(1*(charArray[charNumber][9][0]+1))+2] + '!');
}

function charUseItem(charTarget)
{
	var critPower = 1;
	var tempNumber = 0;
	var tempCrit = 1;
	var tempCIP = 1;
	var tempTarget = 1;
	var targetArray;
	
	if(charTarget == true)
	{
		targetArray = charArray;
	}
	else
	{
		targetArray = beArray;
	}
	
	calcInventoryPosition();
	
	if(inCombat == true)
	{
		tempCIP = attackOrderArray[0];
		tempTarget = bPos[2];
	}
	else
	{
		tempCIP = charItemPos;
		tempTarget = mPos[5];
	}
	
	var tempItemId = charArray[tempCIP][8][inventoryPos];
	
	/* Use Item Power (Heal or Hurt) */
	if(itemArray[tempItemId][2] >= randomNumberGenerator())
	{
		if(itemArray[tempItemId][6] >= randomNumberGenerator())
		{
			critPower = itemArray[tempItemId][7];
			tempCrit = true;
		}
		
		if(targetArray[tempTarget][0][1] + (itemArray[tempItemId][1] * critPower) < 0)
		{
			tempNumber = targetArray[tempTarget][0][2] - targetArray[tempTarget][0][1];
			targetArray[tempTarget][0][1] = 0;
		}
		else if(targetArray[tempTarget][0][1] + (itemArray[tempItemId][1] * critPower) > targetArray[tempTarget][0][2])
		{
			tempNumber = Math.abs(targetArray[tempTarget][0][1] - targetArray[tempTarget][0][2]);
			targetArray[tempTarget][0][1] = targetArray[tempTarget][0][2];
		}
		else
		{
			tempNumber = itemArray[tempItemId][1] * critPower;
			targetArray[tempTarget][0][1] += (itemArray[tempItemId][1] * critPower);
		}
		
		if(tempCrit == true)
		{
			appendOutput(charArray[tempCIP][0][0] + " has used a " + itemArray[tempItemId][0] + " to great effect!");
		}
		else
		{
			appendOutput(charArray[tempCIP][0][0] + " has used a " + itemArray[tempItemId][0] + "!");
		}
		
		if(tempNumber >= 0)
		{
			appendOutput(targetArray[tempTarget][0][0] + " has been healed for " + tempNumber + " HP!");
		}
		else
		{
			appendOutput(targetArray[tempTarget][0][0] + " has been damaged for " + tempNumber + " HP!");
		}
	}
	else
	{
		appendOutput(targetArray[tempTarget][0][0] + " has failed to use the " + itemArray[tempItemId][0] + " properly and missed!");
	}
	
	charArray[tempCIP][8][inventoryPos] = 0;
	
	/* If using item out of combat */
	if(menuState != 0)
	{
		startMenuSelectTarget = 0;
		usingItem = 0;
		inventoryPos = 0;
		charItemPos = 0;
		mPos[4] = 0;
		mPos[5] = 0;
	}
	else
	{
		attackOrderArray.splice(0,1);
		bPos[2] = 0;
		bPos[3] = 0;
		buildAttackOrder();
		battlePause();
	}
}

function equipItem()
{
	var tmpItemHold = 0;
	var canEquip = false;
	var swapToMain = false;
	
	calcInventoryPosition();
	
	/* Is the item equipable? */
	if(itemArray[charArray[mPos[5]][8][inventoryPos]][10] > 0)
	{
		tmpItemHold = charArray[mPos[5]][7][mPos[4]];
		/* Is it equipable in this slot? */
		// Any Slot (Empty)
		if(itemArray[charArray[mPos[5]][8][inventoryPos]][10] == 1)
		{
			if(mPos[4] == 0 && itemArray[charArray[mPos[5]][7][1]][11] != 1 && itemArray[charArray[mPos[5]][7][1]][11] != 10)
			{
				swapToMain = true;
			}
			
			canEquip = true;
		}
		else if(itemArray[charArray[mPos[5]][8][inventoryPos]][10] - 2 == mPos[4])
		{
			canEquip = true;
		}
		else if(mPos[4] == 1)
		{
			if(itemArray[charArray[mPos[5]][8][inventoryPos]][11] == itemArray[charArray[mPos[5]][7][0]][11])
			{
				canEquip = true;
			}
		}
		
		if(canEquip == true)
		{
			charArray[mPos[5]][7][mPos[4]] = charArray[mPos[5]][8][inventoryPos];
			charArray[mPos[5]][8][inventoryPos] = tmpItemHold;
			
			if(swapToMain == true)
			{
				charArray[mPos[5]][7][mPos[4]] = charArray[mPos[5]][7][1];
				charArray[mPos[5]][7][1] = 0;
			}
			
			if(mPos[4] == 0 || mPos[4] == 1)
			{
				calcClass();
			}
			
			calcCharStats(mPos[5]);
			menuState = 1;
		}
		else
		{
			appendOutput("Can't equip that!");
		}
		
		
	}
}

function calcClass()
{
	var tmpOff = 0;
	
	if(itemArray[charArray[mPos[5]][7][1]][11] > 0)
	{
		
		if(itemArray[charArray[mPos[5]][7][1]][11] == 1)
		{
			tmpOff = 0;
		}
		else if(itemArray[charArray[mPos[5]][7][1]][11] == 10)
		{
			tmpOff = 1;
		}
		else
		{
			tmpOff = 2;
		}
	}
	
	switch(itemArray[charArray[mPos[5]][7][0]][11])
	{
		case 1:
			
			break;
		case 2:
			switch(tmpOff)
			{
				case 0:
					charArray[mPos[5]][9][0] = 0;
					break;
				case 1:
					charArray[mPos[5]][9][0] = 1;
					break;
				case 2:
					charArray[mPos[5]][9][0] = 2;
					break;
			}
			break;
		case 3:
			charArray[mPos[5]][9][0] = 3;
			break;
		case 4:
			switch(tmpOff)
			{
				case 0:
					charArray[mPos[5]][9][0] = 4;
					break;
				case 1:
					charArray[mPos[5]][9][0] = 5;
					break;
				case 2:
					charArray[mPos[5]][9][0] = 6;
					break;
			}
			break;
		case 5:
			charArray[mPos[5]][9][0] = 7;
			break;
		case 6:
			switch(tmpOff)
			{
				case 0:
					charArray[mPos[5]][9][0] = 8;
					break;
				case 1:
					charArray[mPos[5]][9][0] = 9;
					break;
				case 2:
					charArray[mPos[5]][9][0] = 10;
					break;
			}
			break;
		case 7:
			charArray[mPos[5]][9][0] = 11;
			break;
		case 8:
			switch(tmpOff)
			{
				case 0:
					charArray[mPos[5]][9][0] = 12;
					break;
				case 1:
					charArray[mPos[5]][9][0] = 13;
					break;
				case 2:
					charArray[mPos[5]][9][0] = 14;
					break;
			}
			break;
		case 9:
			charArray[mPos[5]][9][0] = 15;
			break;
	}
}

function calcCharStats(charNumber)
{
	var tmpAgi = charArray[charNumber][6][1];
	var tmpSpeed = 1;
	
	if(tmpAgi == 0){tmpSpeed = 1;}
	else if(tmpAgi == 1){tmpSpeed = 2;}
	else if(tmpAgi == 2){tmpSpeed = 3;}
	else if(tmpAgi == 3 || tmpAgi == 4){tmpSpeed = 4;}
	else if(tmpAgi >= 5 && tmpAgi <= 10){tmpSpeed = 5;}
	else if(tmpAgi >= 11 && tmpAgi <= 14){tmpSpeed = 6;}
	else if(tmpAgi >= 15 && tmpAgi <= 19){tmpSpeed = 7;}
	else if(tmpAgi >= 20 && tmpAgi <= 24){tmpSpeed = 8;}
	else if(tmpAgi >= 25 && tmpAgi <= 29){tmpSpeed = 9;}
	else if(tmpAgi >= 30 && tmpAgi <= 39){tmpSpeed = 10;}
	else if(tmpAgi >= 40 && tmpAgi <= 49){tmpSpeed = 11;}
	else if(tmpAgi >= 50 && tmpAgi <= 59){tmpSpeed = 12;}
	else if(tmpAgi >= 60 && tmpAgi <= 69){tmpSpeed = 13;}
	else if(tmpAgi >= 70 && tmpAgi <= 79){tmpSpeed = 14;}
	else if(tmpAgi >= 80 && tmpAgi <= 99){tmpSpeed = 15;}
	else if(tmpAgi >= 100 && tmpAgi <= 124){tmpSpeed = 16;}
	else if(tmpAgi >= 125 && tmpAgi <= 149){tmpSpeed = 17;}
	else if(tmpAgi >= 150 && tmpAgi <= 199){tmpSpeed = 18;}
	else if(tmpAgi >= 200 && tmpAgi <= 254){tmpSpeed = 19;}
	else if(tmpAgi == 255){tmpSpeed = 20;}
	
	/* Skills */
	/* First array is for available skills, second array is for mastered skills */
	charArray[charNumber][10] = [[],[]];
	
	/* Offense */
	charArray[charNumber][1] = 
	/* Item status effects not yet implemented, thats why the last two numbers are just zeroes */
	[
		(charArray[charNumber][6][0] + getEquipmentNumber(0, 1, charNumber)) * 0.9,
		(charArray[charNumber][6][0] + getEquipmentNumber(0, 1, charNumber)) * 1.1,
		getEquipmentNumber(0, 2, charNumber),
		getEquipmentNumber(0, 6, charNumber),
		getEquipmentNumber(0, 7, charNumber),
		tmpSpeed,
		0,
		0
	];
	
	/* Magic */
	/* Not yet implemented */
	charArray[charNumber][3] = [1,1,1];
	
	/* Defence */
	charArray[charNumber][2] = 
	/* Dodge and block are fixed, need to make dynamic. Defence is just a straight reduction, need to make percentage based. */
	[
		0.05,
		0.05,
		0.8,
		getEquipmentNumber(1, 1, charNumber) + getEquipmentNumber(2, 1, charNumber) + getEquipmentNumber(3, 1, charNumber) +
			getEquipmentNumber(4, 1, charNumber) + getEquipmentNumber(5, 1, charNumber) + getEquipmentNumber(6, 1, charNumber),
		0.05,
		1,
		1
	];
}