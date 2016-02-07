function loadSkills()
{
	/*
	 * 
	 * Vertically is the skill id
	 * 		Skill Name, Skill Class, Mastery Req, Power, Crit Chance, Crit Power, Status, Status Chance, Buff, Buff Chance,  
	 * 
	 * 
	 */
	skillArray = [
	              	['Empty', 0, 0, 0, 0, 0, 0, 0, 0, 0],
	              	['Throw Stone', 8, 50, 25, 1, 1, 0, 0, 0, 0],
	              	['Dance', 8, 50, 25, 1, 1, 0, 0, 0, 0]
	             ];
}

function calcSkillPosition()
{
	if(inCombat == false)
	{
		switch(mPos[3])
		{
			case 0:
				if(mPos[2] == 0)
				{
					skillPos = 0;
				}
				else
				{
					skillPos = 1;
				}
				break;
			case 1:
				if(mPos[2] == 0)
				{
					skillPos = 2;
				}
				else
				{
					skillPos = 3;
				}
				break;
			case 2:
				if(mPos[2] == 0)
				{
					skillPos = 4;
				}
				else
				{
					skillPos = 5;
				}
				break;
			case 3:
				if(mPos[2] == 0)
				{
					skillPos = 6;
				}
				else
				{
					skillPos = 7;
				}
				break;
			case 4:
				if(mPos[2] == 0)
				{
					skillPos = 8;
				}
				else
				{
					skillPos = 9;
				}
				break;
			case 5:
				if(mPos[2] == 0)
				{
					skillPos = 10;
				}
				else
				{
					skillPos = 11;
				}
				break;
		}
	}
	else
	{
		switch(battleSkillSelect[1])
		{
			case 0:
				if(battleSkillSelect[0] == 0)
				{
					skillPos = 0;
				}
				else
				{
					skillPos = 1;
				}
				break;
			case 1:
				if(battleSkillSelect[0] == 0)
				{
					skillPos = 2;
				}
				else
				{
					skillPos = 3;
				}
				break;
			case 2:
				if(battleSkillSelect[0] == 0)
				{
					skillPos = 4;
				}
				else
				{
					skillPos = 5;
				}
				break;
			case 3:
				if(battleSkillSelect[0] == 0)
				{
					skillPos = 6;
				}
				else
				{
					skillPos = 7;
				}
				break;
			case 4:
				if(battleSkillSelect[0] == 0)
				{
					skillPos = 8;
				}
				else
				{
					skillPos = 9;
				}
				break;
			case 5:
				if(battleSkillSelect[0] == 0)
				{
					skillPos = 10;
				}
				else
				{
					skillPos = 11;
				}
				break;
		}
	}
}