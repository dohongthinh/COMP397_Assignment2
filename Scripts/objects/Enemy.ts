module objects
{
    export class Enemy extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _horizontalSpeed?:number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("enemy"), new Vector2(), true);

            this.Start();
        }

        // PRIVATE METHODS

        protected _checkBounds(): void 
        {
            if(this.x <= 0 - this.width)
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
            this.type = enums.GameObjectType.ENEMY;
            this._horizontalSpeed = -5; // 5 px per frame
            this.velocity = new Vector2( this._horizontalSpeed,0);
            this.Reset();
        }
        
        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }
        
        public Reset(): void 
        {
            let randomY = util.Mathf.RandomRange(config.Game.SCREEN_HEIGHT - this.halfHeight,this.halfHeight);
            this.position = new Vector2( config.Game.SCREEN_WIDTH+this.width, randomY);
        }

        
    }
}