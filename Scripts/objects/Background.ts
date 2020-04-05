module objects
{
    export class Background extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _horizontalSpeed?:number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("background"));

            this.Start();
        }

        // PRIVATE METHODS

        protected _checkBounds(): void 
        {
            if(this.x <= -1280)
            {
                this.Reset();
            }
        }       
        
        private _move():void
        {
            this.position = Vector2.add(this.position, this.velocity);
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
            this._horizontalSpeed = -5; // 5 px per frame
            this.velocity = new Vector2(this._horizontalSpeed, 0);
            this.Reset();
        }
        
        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }
        
        public Reset(): void 
        {
            this.position = new Vector2(1, 0);
        }

        
    }
}