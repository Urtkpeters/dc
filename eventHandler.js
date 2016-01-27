function mapKeyPress()
{
	var moved = false;
	
	switch(key)
	{
		/* W Key */
		case 87:
			if(checkPos() == true)
			{
				moved = true;
				switch(cPos[2])
				{
					case 0:
						cPos[1] -= 1;
						break;
					case 1:
						cPos[0] += 1;
						break;
					case 2:
						cPos[1] += 1;
						break;
					case 3:
						cPos[0] -= 1;
						break;
				}
			}
			buildCanvas();
			break;
		/* A Key */
		case 65:
			if(cPos[2] == 0)
			{
				cPos[2] = 3;
			}
			else
			{
				cPos[2] -= 1;
			}
			buildCanvas();
			break;
		/* S Key */
		case 83:
			if(checkPos(cPos, map, 'S') == true)
			{
				moved = true;
				switch(cPos[2])
				{
					case 0:
						cPos[1] += 1;
						break;
					case 1:
						cPos[0] -= 1;
						break;
					case 2:
						cPos[1] -= 1;
						break;
					case 3:
						cPos[0] += 1;
						break;
				}
			}
			buildCanvas();
			break;
		/* D Key */
		case 68:
			if(cPos[2] == 3)
			{
				cPos[2] = 0;
			}
			else
			{
				cPos[2] += 1;
			}
			buildCanvas();
			break;
		/* J Key */
		case 74:
			break;
		/* H Key */
		case 72:
			menuOpen = true;
			buildCanvas();
			break;
	}
	
	if(moved == true)
	{
		encounter();
	}
}

function battleKeyPress()
{
	switch(key)
	{
		/* W Key */
		case 87:
			if(choosingItem == true)
			{
				if(battleItemSelect[1] == 0)
				{
					battleItemSelect[1] = 5;
				}
				else
				{
					battleItemSelect[1] -= 1;
				}
			}
			else if(choosingTarget == true)
			{
				if(bPos[3] == 0)
				{
					bPos[3] = 1;
					bPos[2] = 0;
					
					if(numOfEnemies[0] == 0)
					{
						var posTest;
						
						for(var i = 1; i < 6; i++)
						{
							if(bPos[2]+i > 4)
							{
								posTest = 0;
							}
							else
							{
								posTest = bPos[2]+i;
							}
							
							if(numOfEnemies[posTest] == 1)
							{
								bPos[2] = posTest;
								break;
							}
						}
					}
				}
				else
				{
					bPos[3] = 0;
					bPos[2] = 0;
				}
			}
			buildCanvas();
			break;
		/* A Key */
		case 65:
			/* Main Menu */
			if(choosingTarget == false && choosingItem == false)
			{
				if(bPos[1] == 0)
				{
					bPos[1] = 4;
				}
				else
				{
					bPos[1] -= 1;
				}
			}
			/* Choosing attack target */
			else if(bPos[1] == 0)
			{
				if(bPos[3] == 1)
				{
					var posTest;
					
					for(var i = 1; i < 6; i++)
					{
						if(bPos[2]-i < 0)
						{
							posTest = 5 + (bPos[2]-i);
						}
						else
						{
							posTest = bPos[2]-i;
						}
						
						if(numOfEnemies[posTest] == 1)
						{
							bPos[2] = posTest;
							break;
						}
					}
				}
				else
				{
					if(bPos[3] == 0)
					{
						if(bPos[2] == 0)
						{
							bPos[2] = 2;
						}
						else
						{
							bPos[2] -= 1;
						}
					}
				}
			}
			/* Choosing item target */
			else if(bPos[1] == 2 && choosingItem == false)
			{
				if(bPos[3] == 0)
				{
					if(bPos[2] == 0)
					{
						bPos[2] = 2;
					}
					else
					{
						bPos[2] -= 1;
					}
				}
				else
				{
					var posTest;
					
					for(var i = 1; i < 6; i++)
					{
						if(bPos[2]-i < 0)
						{
							posTest = 5 + (bPos[2]-i);
						}
						else
						{
							posTest = bPos[2]-i;
						}
						
						if(numOfEnemies[posTest] == 1)
						{
							bPos[2] = posTest;
							break;
						}
					}
				}
			}
			/* Choosing item */
			else if(bPos[1] == 2 && choosingItem == true)
			{
				if(battleItemSelect[0] == 0)
				{
					battleItemSelect[0] = 1;
				}
				else
				{
					battleItemSelect[0] = 0;
				}
			}
			buildCanvas();
			break;
		/* S Key */
		case 83:
			if(choosingItem == true)
			{
				if(battleItemSelect[1] == 5)
				{
					battleItemSelect[1] = 0;
				}
				else
				{
					battleItemSelect[1] += 1;
				}
			}
			else if(choosingTarget == true)
			{
				if(bPos[3] == 1)
				{
					bPos[3] = 0;
					bPos[2] = 0;
				}
				else
				{
					bPos[3] = 1;
					bPos[2] = 0;
					
					if(numOfEnemies[0] == 0)
					{
						var posTest;
						
						for(var i = 1; i < 6; i++)
						{
							if(bPos[2]+i > 4)
							{
								posTest = 0;
							}
							else
							{
								posTest = bPos[2]+i;
							}
							
							if(numOfEnemies[posTest] == 1)
							{
								bPos[2] = posTest;
								break;
							}
						}
					}
				}
			}
			buildCanvas();
			break;
		/* D Key */
		case 68:
			if(choosingTarget == false && choosingItem == false)
			{
				if(bPos[1] == 4)
				{
					bPos[1] = 0;
				}
				else
				{
					bPos[1] += 1;
				}
				
			}
			else if(bPos[1] == 0)
			{
				if(bPos[3] == 1)
				{
					var posTest;
					
					for(var i = 1; i < 6; i++)
					{
						if(bPos[2]+i > 4)
						{
							posTest = 0;
						}
						else
						{
							posTest = bPos[2]+i;
						}
						
						if(numOfEnemies[posTest] == 1)
						{
							bPos[2] = posTest;
							break;
						}
					}
				}
				else
				{
					if(bPos[2] == 2)
					{
						bPos[2] = 0;
					}
					else
					{
						bPos[2] += 1;
					}
				}
			}
			else if(bPos[1] == 2 && choosingItem == false)
			{
				if(bPos[3] == 0)
				{
					if(bPos[2] == 2)
					{
						bPos[2] = 0;
					}
					else
					{
						bPos[2] += 1;
					}
				}
				else
				{
					var posTest;
					
					for(var i = 1; i < 6; i++)
					{
						if(bPos[2]+i > 4)
						{
							posTest = 0;
						}
						else
						{
							posTest = bPos[2]+i;
						}
						
						if(numOfEnemies[posTest] == 1)
						{
							bPos[2] = posTest;
							break;
						}
					}
				}
			}
			else if(bPos[1] == 2 && choosingItem == true)
			{
				if(battleItemSelect[0] == 1)
				{
					battleItemSelect[0] = 0;
				}
				else
				{
					battleItemSelect[0] = 1;
				}
			}
			buildCanvas();
			break;
		/* H Key */
		case 72:
			break;
		/* J Key */
		case 74:
			if(actionPause == false)
			{
				battleActionKey();
			}
			break;
		/* K Key */
		case 75:
			if(choosingItem == true)
			{
				choosingItem = false;
				battleItemSelect = [0,0];
			}
			else if(choosingTarget == true)
			{
				choosingTarget = false;
				if(bPos[1] == 2)
				{
					choosingItem = true;
				}
			}
			buildCanvas();
			break;
	}
}

function randomNumberGenerator()
{
	return Math.floor((Math.random() * 100) + 1);
}

function battleActionKey()
{
	switch(bPos[0])
	{
		/* Main Menu */
		case 0:
			switch(bPos[1])
			{
				/* Attack */
				case 0:
					if(choosingTarget == true)
					{
						choosingTarget = false;
						actionPause = true;
						var tempTarget = 3;
						if(bPos[3] == 0)
						{
							tempTarget = 0;
						}
						attack(attackOrderArray[0],bPos[2]+tempTarget);
					}
					else
					{
						bPos[3] = 1;
						choosingTarget = true;
						buildCanvas();
					}
					break;
				/* Magic */
				case 1:
					break;
				/* Items */
				case 2:
					if(choosingItem == true)
					{
						calcInventoryPosition();
						if(charArray[attackOrderArray[0]][8][inventoryPos] != 0)
						{
							bPos[3] = 0;
							choosingTarget = true;
							choosingItem = false;
							buildCanvas();
						}
					}
					else if(choosingTarget == true)
					{
						choosingTarget = false;
						actionPause = true;
						useItem();
					}
					else
					{
						choosingItem = true;
						buildCanvas();
					}
					break;
				/* Defend */
				case 3:
					break;
				/* Run */
				case 4:
					partyRun();
			}
			break;
	}
}

function startMenuKeyPress()
{
	switch(key)
	{
		/* W Key */
		case 87:
			switch(mPos[1])
			{
				/* No logic needed for the W key at the main menu */
				/* Item Menu */
				case 1:
					/* Base Item Menu */
					if(menuState == 0)
					{
						if(mPos[3] == 0)
						{
							mPos[3] = 5;
						}
						else
						{
							mPos[3] -= 1;
						}
					}
					/* Item context menu open */
					else if(menuState == 1)
					{
						if(mPos[4] == 0)
						{
							mPos[4] = 2;
						}
						else
						{
							mPos[4] -= 1;
						}
					}
					/* No logic needed for target select for W key */
					/* Moving item from one place to another */
					else if(menuState == 3)
					{
						if(startMenuMovePos[1] == 0)
						{
							startMenuMovePos[1] = 5;
						}
						else
						{
							startMenuMovePos[1] -= 1;
						}
					}
					break;
				/* Skills Menu */
				case 2:
					break;
				/* Equipment Menu */
				case 3:
					break;
				/* Status Menu */
				case 4:
					/* No logic needed for W key on char select */
					if(menuState == 1)
					{
						if(mPos[3] == 0)
						{
							mPos[3] = 3;
						}
						else
						{
							mPos[3] -= 1;
						}
					}
					else if(menuState == 2)
					{
						if(classMoveCheck(0) == true)
						{
							startMenuMovePos[1] -= 1;
						}
					}
					break;
				/* Save Menu */
				case 5:
					break;
			}
			break;
		/* A Key */
		case 65:
			switch(mPos[1])
			{
				/* Main Menu */
				case 0:
					if(mPos[0] == 0)
					{
						mPos[0] = 4;
					}
					else
					{
						mPos[0] -= 1;
					}
					break;
				/* Items Menu */
				case 1:
					/* Base Item menu */
					if(menuState == 0)
					{
						if(mPos[2] == 0)
						{
							mPos[2] = 5;
						}
						else
						{
							mPos[2] -= 1;
						}
					}
					/* No logic needed for A Key on Context Menu */
					/* Select item target */
					else if(menuState == 2)
					{
						if(mPos[5] == 0)
						{
							mPos[5] = 2;
						}
						else
						{
							mPos[5] -= 1;
						}
					}
					/* Move item target */
					else if(menuState == 3)
					{
						if(startMenuMovePos[0] == 0)
						{
							startMenuMovePos[0] = 5;
						}
						else
						{
							startMenuMovePos[0] -= 1;
						}
					}
					break;
				/* Skills Menu */
				case 2:
					break;
				/* Equipment Menu */
				case 3:
					break;
				/* Status Menu */
				case 4:
					if(menuState == 0)
					{
						if(mPos[5] == 0)
						{
							mPos[5] = 2;
						}
						else
						{
							mPos[5] -= 1;
						}
					}
					else if(menuState == 1)
					{
						if(mPos[2] == 0)
						{
							mPos[2] = 3;
						}
						else
						{
							mPos[2] -= 1;
						}
					}
					else if(menuState == 2)
					{
						if(classMoveCheck(1) == true)
						{
							startMenuMovePos[0] -= 1;
						}
					}
					break;
				/* Save Menu */
				case 5:
					break;
			}
			break;
		/* S Key */
		case 83:
			switch(mPos[1])
			{
				/* No logic needed for the S key at the main menu */
				/* Item Menu */
				case 1:
					
					/* Base Item menu */
					if(menuState == 0)
					{
						if(mPos[3] == 5)
						{
							mPos[3] = 0;
						}
						else
						{
							mPos[3] += 1;
						}
					}
					/* Item context menu */
					else if(menuState == 1)
					{
						if(mPos[4] == 2)
						{
							mPos[4] = 0;
						}
						else
						{
							mPos[4] += 1;
						}
					}
					/* No logic needed for S key for item target select */
					/* Move item */
					else if(menuState == 3)
					{
						if(startMenuMovePos[1] == 5)
						{
							startMenuMovePos[1] = 0;
						}
						else
						{
							startMenuMovePos[1] += 1;
						}
					}
					break;
				/* Skills Menu */
				case 2:
					break;
				/* Equipment Menu */
				case 3:
					break;
				/* Status Menu */
				case 4:
					/* No logic needed for W key on char select */
					if(menuState == 1)
					{
						if(mPos[3] == 3)
						{
							mPos[3] = 0;
						}
						else
						{
							mPos[3] += 1;
						}
					}
					else if(menuState == 2)
					{
						if(classMoveCheck(2) == true)
						{
							startMenuMovePos[1] += 1;
						}
					}
					break;
				/* Save Menu */
				case 5:
					break;
			}
			break;
		/* D Key */
		case 68:
			switch(mPos[1])
			{
				/* Main Menu */
				case 0:
					if(mPos[0] == 4)
					{
						mPos[0] = 0;
					}
					else
					{
						mPos[0] += 1;
					}
					break;
				/* Item Menu */
				case 1:
					if(menuState == 0)
					{
						if(mPos[2] == 5)
						{
							mPos[2] = 0;
						}
						else
						{
							mPos[2] += 1;
						}
					}
					/* No logic needed for D key in item context menu */
					/* Item target select */
					else if(menuState == 2)
					{
						if(mPos[5] == 2)
						{
							mPos[5] = 0;
						}
						else
						{
							mPos[5] += 1;
						}
					}
					/* Move item select */
					else if(menuState == 3)
					{
						if(startMenuMovePos[0] == 5)
						{
							startMenuMovePos[0] = 0;
						}
						else
						{
							startMenuMovePos[0] += 1;
						}
					}
					break;
				/* Skills Menu */
				case 2:
					break;
				/* Equipment Menu */
				case 3:
					break;
				/* Status Menu */
				case 4:
					if(menuState == 0)
					{
						if(mPos[5] == 2)
						{
							mPos[5] = 0;
						}
						else
						{
							mPos[5] += 1;
						}
					}
					else if(menuState == 1)
					{
						if(mPos[2] == 3)
						{
							mPos[2] = 0;
						}
						else
						{
							mPos[2] += 1;
						}
					}
					else if(menuState == 2)
					{
						if(classMoveCheck(3) == true)
						{
							startMenuMovePos[0] += 1;
						}
					}
					break;
				/* Save Menu */
				case 5:
					break;
			}
			break;
		/* J Key */
		case 74:
			switch(mPos[1])
			{
				/* Main Menu */
				case 0:
					mPos[1] = mPos[0] + 1;
					break;
				/* Item Menu */
				case 1:
					/* Base Item menu */
					if(menuState == 0)
					{
						if(charArray[charItemPos][8][inventoryPos] != 0)
						{
							menuState = 1;
						}
					}
					/* Item context menu */
					else if(menuState == 1)
					{
						/* Use Item */
						if(mPos[4] == 0)
						{
							if(itemArray[charArray[charItemPos][8][inventoryPos]][9] == 1)
							{
								menuState = 2;
							}
						}
						/* Move Item */
						else if(mPos[4] == 1)
						{
							menuState = 3;
							startMenuMovePos[0] = mPos[2];
							startMenuMovePos[1] = mPos[3];
						}
						/* Show Description */
						else
						{
							menuState = 4;
						}
					}
					/* Select item target */
					else if(menuState == 2)
					{
						charUseItem(true);
						menuState = 0;
					}
					/* Select move item target */
					else if(menuState == 3)
					{
						swapInventoryPositions();
						menuState = 0;
					}
					break;
				/* Skills Menu */
				case 2:
					break;
				/* Equipment Menu */
				case 3:
					break;
				/* Status Menu */
				case 4:
					if(menuState == 0)
					{
						menuState = 1;
					}
					else if(menuState == 1)
					{
						setClassPos();
						menuState = 2;
					}
					else if(menuState == 2)
					{
						activateNode();
					}
					break;
				/* Save Menu */
				case 5:
					break;
			}
			break;
		/* K Key */
		case 75:
			switch(mPos[1])
			{
				/* Main Menu */
				case 0:
					menuOpen = false;
					break;
				/* Item Menu */
				case 1:
					/* Base Item menu */
					if(menuState == 0)
					{
						mPos[1] = 0;
					}
					/* Item context menu */
					else if(menuState == 1)
					{
						menuState = 0;
					}
					/* Select item target, select item move target or show item description */
					else
					{
						menuState = 1;
					}
					break;
				/* Skills Menu */
				case 2:
					break;
				/* Equipment Menu */
				case 3:
					break;
				/* Status Menu */
				case 4:
					if(menuState == 0)
					{
						mPos[1] = 0;
					}
					else if(menuState == 1)
					{
						menuState = 0;
					}
					else if(menuState == 2)
					{
						menuState = 1;
					}
					break;
				/* Save Menu */
				case 5:
					break;
			}
			break;
	}
	buildCanvas();
}

function appendOutput(outputText)
{
	var node = document.createElement('br');
	var textNode = document.createTextNode(outputText);
	
	document.getElementById('outputDiv').appendChild(textNode);
	document.getElementById('outputDiv').appendChild(node);
	document.getElementById('outputDiv').scrollTop = document.getElementById('outputDiv').scrollHeight;
}