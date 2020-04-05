module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _background?: objects.Background;
        private _spaceship?: objects.Spaceship;        
        private _enemy?: objects.Enemy;
        private _meteors: Array<objects.Meteor>;
        private _scoreBoard: managers.ScoreBoard;
        private _keyboardManager: managers.Keyboard;
        
        private _missileManager: managers.Missile;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            
            this._background = new objects.Background();
            this._spaceship = new objects.Spaceship();
            this._enemy = new objects.Enemy();
            this._meteors = new Array<objects.Meteor>(); 

            for (let index = 0; index < config.Game.METEOR_NUM; index++) {
                this._meteors.push(new objects.Meteor());
            }
            this._scoreBoard = new managers.ScoreBoard();
            config.Game.SCORE_BOARD = this._scoreBoard;

            this._missileManager = new managers.Missile();
            config.Game.MISSILE_MANAGER = this._missileManager;
            
            this._keyboardManager = new managers.Keyboard();
            config.Game.KEYBOARD_MANAGER = this._keyboardManager;

             this.Main();
        }        
        
        public Update(): void 
        {
           this._background.Update();

           this._spaceship.Update();
         
           this._missileManager.Update();

           this._missileManager.CheckCollision(this._enemy);

           this._enemy.Update();

           managers.Collision.AABBCheck(this._spaceship, this._enemy);

           this._meteors.forEach(meteor => {
            meteor.Update();
            managers.Collision.squaredRadiusCheck(this._spaceship, meteor);
        });
        }
        
        public Main(): void 
        {
            this.addChild(this._background);

            this.addChild(this._spaceship);
            this._missileManager.AddMissilesToScene(this);
            this.addChild(this._enemy);

            for (const meteor of this._meteors) {
                this.addChild(meteor);
            }

            this.addChild(this._scoreBoard.LivesLabel);

            this.addChild(this._scoreBoard.ScoreLabel);

        }
    }
}