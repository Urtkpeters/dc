/* Declaration of Global Variables */
var canvas = document.getElementById("canvas");
var cContext = canvas.getContext("2d");
/* 
	cPos = [X,Y,F]
	x = horizontal location
	y = vertical location
	f = facing
*/
var cPos = [2,4,0];
/*
	bPos = [0,1,2]
	0 = Which menu you are currently at.
	1 = Position in menu
	2 = Target horizontal selection position
	3 = Target vertical selection position
*/
var bPos = [0,0,0,0];
/*
	mPos = [0,1,2,3]
	0 = Position in start menu
	1 = Which submenu you are currently in.
	2 = Position you are in horizontally.
	3 = Position you are in vertically.
	4 = Sub-Sub menu position you are in (Item Selection)
	5 = Sub-Sub menu item use character selection
*/
var mPos = [0,0,0,0,0,0];
var charArray = [];
var itemArray = [];
var enemyArray = [];
var classArray = [];
var classNames = ['Squire','Knight','Berserker','Blademaster','Cleric','Paladin','Crusader','Priest','Thief','Bard','Ninja','Dragoon','Mage','Warlock','Sorcerer','Enchanter'];
var nodeArray = [];
var skillArray = [];
var beArray = [];
var inCombat = false;
var choosingTarget = false;
var choosingItem = false;
var numOfEnemies = [];
var map = [];
var key = 0;
var rng = 0;
var eATP = [];
var cATP = [0,0,0];
var attackOrderArray = [];
var actionPause = false;
var menuOpen = false;
var inventoryPos;
var charItemPos = 0;
var skillPos = 0;
var menuState = 0;
var startMenuMovePos = [0,0];
var classGridPos = [0,0];
var battleItemSelect = [0,0];
var battleSkillSelect = [0,0];
var showDescription = 0;
var blackBackground = false;

/* For testing image placement */
var empty_black = new Image();
empty_black.src = 'images/empty_black.jpg';