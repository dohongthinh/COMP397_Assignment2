module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _background?: objects.Background;
        private _spaceship?: objects.Spaceship;        
        private _enemy?: objects.Enemy;

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
            
             this.Main();
        }        
        
        public Update(): void 
        {
           this._background.Update();

           this._spaceship.Update();

           this._enemy.Update();
        }
        
        public Main(): void 
        {
            this.addChild(this._background);

            this.addChild(this._spaceship);

            this.addChild(this._enemy);

        }

        
    }
}