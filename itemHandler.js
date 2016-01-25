function loadItems()
{
	/* 
		Vertically is the itemID,
			Name, Power, PowerChance, StatusCure, StatusInflict, StatusChance, CritChance, CritPower, Image File, Usable
	*/
	
	itemArray = 
	[
		['Empty',0,100,0,0,0,0.5,1.2,'empty.jpg',0],
		['Dagger',5,90,0,0,0,.05,1.2,'dagger.jpg',0],
		['Cloth Tunic',1,100,0,0,0,0,0,'clothTunic.jpg',0],
		['Cloth Pants',1,100,0,0,0,0,0,'clothPants.jpg',0],
		['Potion',50,100,0,0,0,0,1,'potion.jpg',1]
	]
}

function getEquipmentNumber(equipNumber, statNumber, charNumber)
{
	var itemNumber = itemArray[charArray[charNumber][7][equipNumber]][statNumber];
		
	return itemNumber;
}

function calcInventoryPosition()
{
	if(inCombat == false)
	{
		switch(mPos[2])
		{
			case 2:
				charItemPos = 1;
				break;
			case 3:
				charItemPos = 1;
				break;
			case 4:
				charItemPos = 2;
				break;
			case 5:
				charItemPos = 2;
				break;
		}
		if(mPos[2] == 0 || mPos[2] == 1)
		{
			charItemPos = 0;
		}
		else if(mPos[2] == 2 || mPos[2] == 3)
		{
			charItemPos = 1;
		}
		else if(mPos[2] == 4 || mPos[2] == 5)
		{
			charItemPos = 2;
		}

		var remainder = mPos[2] % 2;
		switch(mPos[3])
		{
			case 0:
				if(remainder == 0)
				{
					inventoryPos = 0;
				}
				else
				{
					inventoryPos = 1;
				}
				break;
			case 1:
				if(remainder == 0)
				{
					inventoryPos = 2;
				}
				else
				{
					inventoryPos = 3;
				}
				break;
			case 2:
				if(remainder == 0)
				{
					inventoryPos = 4;
				}
				else
				{
					inventoryPos = 5;
				}
				break;
			case 3:
				if(remainder == 0)
				{
					inventoryPos = 6;
				}
				else
				{
					inventoryPos = 7;
				}
				break;
			case 4:
				if(remainder == 0)
				{
					inventoryPos = 8;
				}
				else
				{
					inventoryPos = 9;
				}
				break;
			case 5:
				if(remainder == 0)
				{
					inventoryPos = 10;
				}
				else
				{
					inventoryPos = 11;
				}
				break;
		}
	}
	else
	{
		switch(battleItemSelect[1])
		{
			case 0:
				if(battleItemSelect[0] == 0)
				{
					inventoryPos = 0;
				}
				else
				{
					inventoryPos = 1;
				}
				break;
			case 1:
				if(battleItemSelect[0] == 0)
				{
					inventoryPos = 2;
				}
				else
				{
					inventoryPos = 3;
				}
				break;
			case 2:
				if(battleItemSelect[0] == 0)
				{
					inventoryPos = 4;
				}
				else
				{
					inventoryPos = 5;
				}
				break;
			case 3:
				if(battleItemSelect[0] == 0)
				{
					inventoryPos = 6;
				}
				else
				{
					inventoryPos = 7;
				}
				break;
			case 4:
				if(battleItemSelect[0] == 0)
				{
					inventoryPos = 8;
				}
				else
				{
					inventoryPos = 9;
				}
				break;
			case 5:
				if(battleItemSelect[0] == 0)
				{
					inventoryPos = 10;
				}
				else
				{
					inventoryPos = 11;
				}
				break;
		}
	}
}

function swapInventoryPositions()
{
	var charItemPos1;
	var charItemPos2;
	var inventoryPos1;
	var inventoryPos2;
	var tempHold;
	
	if(mPos[2] == 0 || mPos[2] == 1)
	{
		charItemPos1 = 0;
	}
	else if(mPos[2] == 2 || mPos[2] == 3)
	{
		charItemPos1 = 1;
	}
	else if(mPos[2] == 4 || mPos[2] == 5)
	{
		charItemPos1 = 2;
	}
	
	
	if(startMenuMovePos[0] == 0 || startMenuMovePos[0] == 1)
	{
		charItemPos2 = 0;
	}
	else if(startMenuMovePos[0] == 2 || startMenuMovePos[0] == 3)
	{
		charItemPos2 = 1;
	}
	else if(startMenuMovePos[0] == 4 || startMenuMovePos[0] == 5)
	{
		charItemPos2 = 2;
	}

	var remainder = mPos[2] % 2;
	switch(mPos[3])
	{
		case 0:
			if(remainder == 0)
			{
				inventoryPos1 = 0;
			}
			else
			{
				inventoryPos1 = 1;
			}
			break;
		case 1:
			if(remainder == 0)
			{
				inventoryPos1 = 2;
			}
			else
			{
				inventoryPos1 = 3;
			}
			break;
		case 2:
			if(remainder == 0)
			{
				inventoryPos1 = 4;
			}
			else
			{
				inventoryPos1 = 5;
			}
			break;
		case 3:
			if(remainder == 0)
			{
				inventoryPos1 = 6;
			}
			else
			{
				inventoryPos1 = 7;
			}
			break;
		case 4:
			if(remainder == 0)
			{
				inventoryPos1 = 8;
			}
			else
			{
				inventoryPos1 = 9;
			}
			break;
		case 5:
			if(remainder == 0)
			{
				inventoryPos1 = 10;
			}
			else
			{
				inventoryPos1 = 11;
			}
			break;
	}
	
	remainder = startMenuMovePos[0] % 2;
	switch(startMenuMovePos[1])
	{
		case 0:
			if(remainder == 0)
			{
				inventoryPos2 = 0;
			}
			else
			{
				inventoryPos2 = 1;
			}
			break;
		case 1:
			if(remainder == 0)
			{
				inventoryPos2 = 2;
			}
			else
			{
				inventoryPos2 = 3;
			}
			break;
		case 2:
			if(remainder == 0)
			{
				inventoryPos2 = 4;
			}
			else
			{
				inventoryPos2 = 5;
			}
			break;
		case 3:
			if(remainder == 0)
			{
				inventoryPos2 = 6;
			}
			else
			{
				inventoryPos2 = 7;
			}
			break;
		case 4:
			if(remainder == 0)
			{
				inventoryPos2 = 8;
			}
			else
			{
				inventoryPos2 = 9;
			}
			break;
		case 5:
			if(remainder == 0)
			{
				inventoryPos2 = 10;
			}
			else
			{
				inventoryPos2 = 11;
			}
			break;
	}
	
	tempHold = charArray[charItemPos1][8][inventoryPos1];
	charArray[charItemPos1][8][inventoryPos1] = charArray[charItemPos2][8][inventoryPos2];
	charArray[charItemPos2][8][inventoryPos2] = tempHold;
	
	mPos[2] = startMenuMovePos[0];
	mPos[3] = startMenuMovePos[1];
	mPos[4] = 0;
	startMenuMovePos = [0,0];
	startMenuMoveTarget = 0;
	usingItem = 0;
}