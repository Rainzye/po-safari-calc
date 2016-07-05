/**
  * A safari script which determines prices
  * Copywrite (C) to Exilebeast for Pokemon World / Safari Zone.
**/
console.log("===============================================================");
console.log("Safari Zone - 2.26.253.136:5080 || Pass: 1ba9 ");
console.log("<------------->");
console.log("Copywrite (C) to Exilebeast for Pokemon World / Safari Zone");
console.log("================================================================");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

// Since we've started, Assume economy is 1000
var eco = 1000; // Test: Is really 1000

// Prices

// Safari ball.
var sBall = eco/90;

// Rock
var rock = sBall/1.5;

// Bait
var bait = sBall*2;

// Great Ball
var gBall = bait*1.5;

// Ultra Ball
var uBall = gBall*1.5;

// Master Ball - NEW!
var mBall = uBall*7*2*2;

// Golden Bait
var gBait = uBall*1.35;

// Ampere Gem - NEW!
var aGem = gBait*0.5;

// Egg
var egg = aGem*1.1;

// Devolution Spray - NEW!
var dSpray = egg*0.65;

// Raffle Entry
var raffle = dSpray*2;

// Prize Pack - NEW!
var pPack = eco/2.5;

// Gachapon Ticket
var gacha = raffle*1.35;

// Rare Candy
var rCandy = gacha*1.20;

// Mega Stone
var mStone = rCandy*2;

console.log(">> Table Complete! <<");
console.log("SHOP:");
console.log("=================================");
console.log("ECONOMY: " + eco);
console.log("Safari Ball: " + sBall);
console.log("Great Ball: " + gBall);
console.log("Ultra Ball: " + uBall);
console.log("Master Ball: " + mBall);
console.log("Ampere Gem: " + aGem);
console.log("Devolution Spray: " + dSpray);
console.log("Rock: " + rock);
console.log("Bait: " + bait);
console.log("Golden Bait: " + gBait);
console.log("Egg: " + egg);
console.log("Raffle Entry: " + raffle);
console.log("Prize Pack: " + pPack);
console.log("Gachapon Ticket: " + gacha);
console.log("Rare Candy: " + rCandy);
console.log("Mega Stone: " + mStone);
console.log("=================================");
