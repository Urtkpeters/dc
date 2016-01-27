function encounter()
{
	if(randomNumberGenerator() >= 0)
	{
		var rng = randomNumberGenerator();
		
		inCombat = true;
		appendOutput("Battle start!");
		if(charArray.length > 1)
		{
			if(rng >= 1 && rng <= 15){ numOfEnemies = [1]; }
			else if(rng >= 16 && rng <= 60){ numOfEnemies = [1,1]; }
			else if(rng >= 61 && rng <= 85){ numOfEnemies = [1,1,1]; }
			else if(rng >= 86 && rng <= 95){ numOfEnemies = [1,1,1,1]; }
			else if(rng >= 96 && rng <= 100){ numOfEnemies = [1,1,1,1,1]; }
		}
		else
		{
			if(rng >= 1 && rng <= 49){ numOfEnemies = [1]; }
			else if(rng >= 50 && rng <= 79){ numOfEnemies = [1,1]; }
			else if(rng >= 80 && rng <= 100){ numOfEnemies = [1,1,1]; }
		}
		
		getBattleEnemies();
		buildAttackOrder();
		buildCanvas();
		battlePause();
	}
}

function attack(attackerNumber, targetNumber)
{
	var attackerArray;
	var targetIsChar;
	var targetArray;
	
	if(attackerNumber == 0 || attackerNumber == 1 || attackerNumber == 2)
	{
		attackerArray = charArray;
	}
	else
	{
		attackerArray = beArray;
		attackerNumber -= 3;
	}
	
	if(targetNumber == 0 || targetNumber == 1 || targetNumber == 2)
	{
		targetIsChar = true;
		targetArray = charArray;
	}
	else
	{
		targetIsChar = false;
		targetArray = beArray;
		targetNumber -= 3;
	}
	
	var tempDamage = Math.floor((Math.random() * ((attackerArray[attackerNumber][1][1]+1)-attackerArray[attackerNumber][1][0])) + attackerArray[attackerNumber][1][0]);

	if(targetArray[targetNumber][0][1] - tempDamage < 0)
	{
		targetArray[targetNumber][0][1] = 0;
	}
	else
	{
		targetArray[targetNumber][0][1] -= tempDamage;
	}
	
	appendOutput(attackerArray[attackerNumber][0][0] + " has attacked " + targetArray[targetNumber][0][0] + " for " + tempDamage + " points of damage!");
	appendOutput(targetArray[targetNumber][0][0] + " has " + targetArray[targetNumber][0][1] + " hit points left!");
	
	attackOrderArray.splice(0,1);
	
	if(targetArray[targetNumber][0][1] < 1)
	{
		appendOutput(targetArray[targetNumber][0][0] + " has died!");
		
		if(targetIsChar == false)
		{
			numOfEnemies[targetNumber] = 0;
			
			var tmpBattle = false;
			
			for(var i = 0; i < numOfEnemies.length; i++)
			{
				if(numOfEnemies[i] == 1)
				{
					tmpBattle = true;
					break;
				}
			}
			
			if(tmpBattle == false)
			{
				inCombat = false;
				battleEnd(false);
			}
			else
			{
				for(var i = 0; i < attackOrderArray.length; i++)
				{
					if(attackOrderArray[i] == targetNumber + 3)
					{
						attackOrderArray.splice([i],1);
					}
				}
				
				/* Cycle bPos for so you are not selected on the dead enemy */
				for(var i = 0; i < 5; i++)
				{
					if(numOfEnemies[i] == 1)
					{
						bPos[2] = i;
						break;
					}
				}
				buildAttackOrder();
				battlePause();
			}
		}
	}
	else
	{
		buildAttackOrder();
		battlePause();
	}
	buildCanvas();
}

function buildAttackOrder()
{
	var charSpeed = [];
	var enemySpeed = [];
	
	for(var i = 0; i < 3; i++)
	{
		if(charArray[i][0][1] >= 1)
		{
			charSpeed.push(charArray[i][1][5]);
		}
		else
		{
			charSpeed.push(0);
		}
	}
	
	for(var i = 0; i < numOfEnemies.length; i++)
	{
		if(numOfEnemies[i] == 1)
		{
			enemySpeed.push(beArray[i][1][5]);
		}
		else
		{
			enemySpeed.push(0);
		}
	}
	
	if(eATP.length == 0)
	{
		for(var i = 0; i < numOfEnemies.length; i++)
		{
			eATP.push(0);
		}
	}
	
	while(attackOrderArray.length < 20)
	{
		while(cATP[0] < 100 && cATP[1] < 100 && cATP[2] < 100 && eATP[0] < 100 && ( eATP[1] < 100 || typeof eATP[1] === 'undefined') && ( eATP[2] < 100 || typeof eATP[2] === 'undefined') && ( eATP[3] < 100 || typeof eATP[3] === 'undefined') && ( eATP[4] < 100 || typeof eATP[4] === 'undefined'))
		{
			cATP[0] += charSpeed[0];
			cATP[1] += charSpeed[1];
			cATP[2] += charSpeed[2];
			
			for(var i = 0; i < numOfEnemies.length; i++)
			{
				eATP[i] += enemySpeed[i];
			}
		}
		
		for(var i = 0; i < 3; i++)
		{
			if(cATP[i] >= 100)
			{
				attackOrderArray.push(i);
				cATP[i] = 0;
			}
		}
		
		for(var i = 0; i < numOfEnemies.length; i++)
		{
			if(eATP[i] >= 100)
			{
				attackOrderArray.push(i + 3);
				eATP[i] = 0;
			}
		}
	}
}

function partyRun()
{
	if(randomNumberGenerator() >= 50)
	{
		battleEnd(true);
	}
	else
	{
		appendOutput("Couldn't get away!");
		
		attackOrderArray.splice(0,1);
		buildAttackOrder();
		battlePause();
	}
}

function battleEnd(run)
{
	var xpEarned = 0;
	
	if(run == false)
	{
		appendOutput("You have vanquished your enemies!");
		for(var i = 0; i < numOfEnemies.length; i++)
		{
			xpEarned += beArray[i][0][5];
		}
		appendOutput("Your party has earned " + xpEarned + " experience points!");
		applyXP(xpEarned);
		applyCP(beArray.length);
	}
	else
	{
		appendOutput("Got away safely!");
	}
	
	bPos = [0,0,0,0];
	cATP = [0,0,0];
	eATP = [];
	attackOrderArray = [];
	beArray = [];
	numOfEnemies = [];
	inCombat = false;
	buildCanvas();
}

function battlePause()
{
	if(attackOrderArray[0] == 0 || attackOrderArray[0] == 1 || attackOrderArray[0] == 2)
	{
		actionPause = false;
	}
	else
	{
		setTimeout
		(
			function()
			{
				randomEnemyAttack();
			}
		, 750);
	}
}

function randomEnemyAttack()
{
	var rng = randomNumberGenerator();
	if(rng >= 1 && rng <= 33) { attack(attackOrderArray[0],0); }
	else if(rng >= 34 && rng <= 66) { attack(attackOrderArray[0],1); }
	else { attack(attackOrderArray[0],2); }
}

function useItem()
{
	if(bPos[3] == 0)
	{
		charUseItem(true);
	}
	else
	{
		charUseItem(false);
	}
}