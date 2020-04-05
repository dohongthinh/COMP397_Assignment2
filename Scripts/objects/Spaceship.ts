module objects
{
    export class Spaceship extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _horizontalPosition:number;
        private _missileSpawn: objects.Vector2;
        private _verticalSpeed: number;

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
            //let newPositionY = util.Mathf.Lerp(this.stage.mouseY, this.position.y, 0.05);
            //this.position = new Vector2(this._horizontalPosition , newPositionY);

            //let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            if((config.Game.KEYBOARD_MANAGER.MoveUp) || (config.Game.KEYBOARD_MANAGER.MoveDown))
            {
                let newPositionY = (config.Game.KEYBOARD_MANAGER.MoveUp) ? 
                this.position.y - this._verticalSpeed : this.position.y + this._verticalSpeed;

                // TODO: make movement smoother with a velocity function

                this.position = new Vector2(this._horizontalPosition ,newPositionY);
            }
            
            this._missileSpawn = new Vector2(this.position.x+this.halfWidth, this.position.y);
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
            this.type = enums.GameObjectType.SPACESHIP;
            this._horizontalPosition = 30; 
            this._verticalSpeed = 10;
            this.position = new objects.Vector2(this._horizontalPosition,config.Game.SCREEN_HEIGHT * 0.5);
        }

        public Update(): void 
        {
            this._move();
            this._checkBounds();
            // fire bullets every 10 frames
            if(createjs.Ticker.getTicks() % 10 == 0)
            {
                if(config.Game.KEYBOARD_MANAGER.Fire)
                {
                    this.FireMissiles();
                }
            }
        }

        public Reset(): void 
        {

        }
        public FireMissiles(): void
        {
            let missle = config.Game.MISSILE_MANAGER.GetMissile();
            missle.position = this._missileSpawn;
        }
        
    }

}