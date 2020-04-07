module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;
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
            this._welcomeLabel = new objects.Label("The Game", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
             this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 350, true);
             this._instructionButton=new objects.Button(config.Game.ASSETS.getResult("instructionButton"), 320, 450, true);

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
       
            this.addChild(this._welcomeLabel);

        
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);

            this._startButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });

            this._instructionButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.INSTRUCTION;
            });

        }

        
    }
}