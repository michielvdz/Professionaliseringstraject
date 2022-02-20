function getRandomValue(min, max){
    return Math.floor(Math.random() * (max-min)) + min
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages:[]
        }
    },
    computed:{
        monsterBarStyles(){
            if (this.monsterHealth < 0){
                return {width: '0%'}
            }
            else{
                return {width: this.monsterHealth +'%'}
            }
        },
        playerBarStyles(){
            if (this.playerHealth < 0){
                return {width: '0%'}
            }
            else{
                return {width: this.playerHealth +'%'}
            }
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0
        }
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw'
            }
            else if(value <= 0){
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw'
            }
            else if(value <= 0){
                this.winner = 'player'
            }
        }
    },
    methods: {
        startGame(){
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            this.winner = null
            this.logMessages = []
        },
        attackMonster(){
            const damage = getRandomValue(5,12);
            this.monsterHealth -= damage;
            this.addLogMessage('player', 'attack', damage)
            this.attackPlayer();
            this.currentRound ++
            
        },
        specialAttackMonster(){
            const damage = getRandomValue(10,25);
            this.monsterHealth -= damage;
            this.addLogMessage('player', 'special attack', damage)
            this.attackPlayer();
            this.currentRound ++
        },
        attackPlayer(){
            const damage = getRandomValue(8,15)
            this.playerHealth -= damage;
            this.addLogMessage('monster', 'attack', damage)
        },
        healPlayer(){
            const heal = getRandomValue(8,20)
            if(this.playerHealth +  heal> 100){
                this.playerHealth = 100;
            }
            else{
                this.playerHealth += heal;
            }
            this.addLogMessage('player', 'heal', heal)
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster'
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
        
    }
})

app.mount('#game')