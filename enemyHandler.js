function loadEnemies()
{
	/* 
		Second Tier is areaID
			0. General   - Name, Current HP, Max HP, Current MP, Max MP, XP Reward, Regular Drop, Regular Chance, Rare Drop, Rare Chance, Image Name
			1. Offence   - Damage Min, Damage Max, Hit Chance, Crit Chance, Crit Power, Speed, Status Effect, Status Effect Chance
			2. Defence   - Dodge Chance, Block Chance, Block Reduction, Defence Reduction, Spell Dodge Chance, Resistance Reduction, Status damage resistance
			3. Magic     - Power Factor, Heal Factor, Magic Hit Chance
			4. Buffs     - List of buff IDs
			5. Debuffs   - List of debuff IDs
		
	*/
	enemyArray = 
	[
		/* Area 1 */
		[
			/* Slime */
			[
				['Slime',30,30,5,5,5,4,0.1,1,0.01,'images/Slime.jpg'],
				[1,2,0.9,0.05,1,4,0,0],
				[0.05,0,0,1,0,0,0],
				[1,1,1],
				[],
				[]
			]
		]
	];
}

function getBattleEnemies()
{
	for(var i = 0; i < numOfEnemies.length; i++)
	{
		/* Need to randomize battles based on area */
		beArray.push([]);
		beArray[i][0] = enemyArray[0][0][0].slice();
		beArray[i][1] = enemyArray[0][0][1].slice();
		beArray[i][2] = enemyArray[0][0][2].slice();
		beArray[i][3] = enemyArray[0][0][3].slice();
		beArray[i][4] = enemyArray[0][0][4].slice();
		beArray[i][5] = enemyArray[0][0][5].slice();
	}
}

function enemyUseItem()
{
	
}