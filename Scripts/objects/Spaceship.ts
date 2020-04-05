module objects
{
    export class Spaceship extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _horizontalPosition:number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("spaceShip"), 0, 0, true);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void 
        {
            // left boundary
            if(this.position.y <= this.halfHeight)
            {
                this.position = new Vector2(this.position.x,this.halfHeight);
            }

            // right boundary

            if(this.position.y >= config.Game.SCREEN_HEIGHT - this.halfHeight)
            {
                this.position = new Vector2( this.position.x,config.Game.SCREEN_HEIGHT - this.halfHeight);
            }
        }        

        private _move(): void
        {   
            let newPositionY = util.Mathf.Lerp(this.stage.mouseY, this.position.y, 0.05);
            this.position = new Vector2(this._horizontalPosition , newPositionY);
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
            this._horizontalPosition = 30; // locked to the bottom of the screen
        }

        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }

        public Reset(): void 
        {

        }

        
    }

}