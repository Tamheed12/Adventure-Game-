// This code is made by Tamheed Tariq
/*
I make the Adbancture game
.some enemy
.with random damage and random health

.player
.with random health and random atatck
.also get 3 potion of health
.also get it killing enemy with random

*/
//these all done with player input so import inquirer
import inquirer from "inquirer";
//write the name of game Game on the top
console.log(`
    -------------------Welcome to-------------------
    
    -------------------Code Game-------------------
    `);
//ask from player to continue the game or exit
let userInput = await inquirer.prompt({
    name: 'do',
    type: 'list',
    message: 'Whould you play the game or exit ?       ',
    choices: ['1. Play', '2. Exit']
});
//-------------------If statment-------------------
//make if for player input
if (userInput.do == '1. Play') {
    console.log(``);
    //-------------------Enemy-------------------
    // i make some variable about enemy information
    //first name of enemy array
    let enemies = ['Zombie', 'Skeleton', 'Dr.James', 'Spider'];
    //make enemy health varaible with defealt is 500
    let enemyHp = 500;
    //make enemy attack damage to player with defealt is 30
    let EnemyAttackDamage = 100;
    //-------------------Player-------------------
    //Now make some variable about player information
    //first player name
    let playername = await inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'Write your Name :      '
    });
    //store inquirer name in name variable
    let name = playername.name;
    //make player health defealt is 400
    let playerHp = 400;
    //make player attack damage defealt is 75
    let playerAttack = 100;
    //-------------------Health potion-------------------
    //make some variable about health potion 
    //health potion quantity
    let quantityHp = 3;
    //bost the health
    let potionheal = 100;
    //potion drop when player is 50
    let healpotiondrop = 200;
    //-------------------Game run-------------------
    //make variable that value is true
    let gameRun = true;
    //I use while loop and also assigin the name to wile loop
    CodeGame: while (gameRun) {
        //-------------------Random Enemy-------------------
        //make random enemy come
        let enemyName = Math.floor(Math.random() * enemies.length);
        let enemy = enemies[enemyName];
        //Now make enemy random Health
        let enemyHeath = Math.floor(Math.random() * enemyHp + 2);
        //Print enemy Name
        console.log(`
    ${enemy} is appear with ${enemyHeath} health
    `);
        //-------------------Loop-------------------
        //beacuse if enemy die then
        while (enemyHeath > 0) {
            //player health tell
            console.log(`   ${name} health is : ${playerHp}
            `);
            //ask from player what to do 
            let option = await inquirer.prompt({
                name: 'do',
                type: 'list',
                message: 'What would you like to do?     ',
                choices: ['1. Attack', '2. Take Health poition', '3. Run']
            });
            //-------------------If statment-------------------    
            //make if condition with option choices
            //1. condition 
            if (option.do === '1. Attack') {
                //player damage to enemy random
                let damagetoenemy = Math.floor(Math.random() * playerAttack + 10);
                //remaing health enemy
                enemyHeath -= damagetoenemy;
                //enemy damage to player random
                let damagetohero = Math.floor(Math.random() * EnemyAttackDamage + 10);
                //remaing health player
                playerHp -= damagetohero;
                console.log(`
    You give '${damagetoenemy}' damage to enemy.
    Enemy loss '${enemyHeath}' of his Hp`);
                console.log(`
    ${enemy} attack ${name}
    ${enemy} give ${damagetohero} damage

    ${name} loss ${playerHp} health`);
                //make if player die
                if (playerHp < 1) {
                    console.log(`
                        ____________${enemy} kill you____________`);
                    break;
                }
                ;
            }
            else if (option.do == '2. Take Health poition') {
                //make if hp potion is greather then 0
                if (quantityHp > 0) {
                    playerHp += potionheal;
                    quantityHp--;
                    console.log(`
    Health potion heal ${potionheal} health
                        `);
                    console.log(`
    Now your health is ${playerHp}
                        `);
                    console.log(`
    You have ${quantityHp} health potion`);
                }
                else {
                    console.log(`
    You have NO health potion.
    Defeat enemy to chance for get health potion`);
                }
                ;
            }
            else if (option.do === '3. Run') {
                console.log(`
    You run away from ${enemy}`);
                continue CodeGame;
            }
            ;
        }
        ;
        //make if you kill the enemy
        console.log(`
        -------------You kill ${enemy}-------------
        `);
        //tell player remaning health after fight
        console.log(`${name} Health is ${playerHp}`);
        //make random number to give health potion
        let randomnumber = Math.floor(Math.random() * 200 + 1);
        if (randomnumber < healpotiondrop) {
            quantityHp++;
            console.log(`${enemy} drop Health potion
        `);
            console.log(`${name} have ${quantityHp} health potion
         `);
        }
        //make to ask continus the game or exit
        let userInput = await inquirer.prompt({
            name: 'do',
            type: 'list',
            message: 'What whould you like to do ?       ',
            choices: ['1. Continue', '2. Exit']
        });
        if (userInput.do == '1. Continue') {
            console.log(`You are continue the game`);
        }
        else {
            console.log(`
            You sussessfully exit from game`);
            console.log(`
            _________________Thank you for playing this game_________________
            _________________ made by Tamheed Tariq_________________
            `);
            break;
        }
    }
}
else {
    console.log(`
        _________________ made by Tamheed Tariq_________________
        `);
    console.log(`You are Exiting...............`);
}
