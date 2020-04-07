module scenes
{
    export class Instruction extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _firstLabel: objects.Label;
        private _secondLabel: objects.Label;
        private _thirdLabel: objects.Label;
        private _fourthLabel: objects.Label;
        private _fifthLabel: objects.Label;
        private _sixthLabel: objects.Label;
        private _backButton: objects.Button;
        private _background: objects.Background;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
             //instantiate a new Text object
            this._firstLabel = new objects.Label("The player will control a spaceship, shot the missiles ", "20px", "Consolas", "#FFFF00", 320, 100, true);
            this._secondLabel = new objects.Label("to kill the enemy ships and control to avoid meteors.", "20px", "Consolas", "#FFFF00", 320, 130, true);
            this._thirdLabel = new objects.Label("Player will have 5 lifes. If the spaceship hit the meteor,", "20px", "Consolas", "#FFFF00", 320, 160, true);
            this._fourthLabel = new objects.Label("player will lose 1 life.  If the space ship hit the ", "20px", "Consolas", "#FFFF00", 320, 190, true);
            this._fifthLabel = new objects.Label("enemy ship, play will lose immediately. Player can ", "20px", "Consolas", "#FFFF00", 320, 220, true);
            this._sixthLabel = new objects.Label("score when shoot the enemy.", "20px", "Consolas", "#FFFF00", 320, 250, true);
            
            // buttons
             this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 430, true);

             this._background = new objects.Background();
            this.Main();
        }        
        
        public Update(): void 
        {
           this._background.Update();
        }
        
        public Main(): void 
        {
            this.addChild(this._background);
       
            this.addChild(this._firstLabel);
            this.addChild(this._secondLabel);
            this.addChild(this._thirdLabel);
            this.addChild(this._fourthLabel);
            this.addChild(this._fifthLabel);
            this.addChild(this._sixthLabel);
            this.addChild(this._backButton);

            this._backButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.START;
            });

        }

        
    }
}