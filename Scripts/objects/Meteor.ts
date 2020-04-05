module objects
{
    export class Meteor extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?:number;
        private _horizontalSpeed?:number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("meteor"), new Vector2(), true);

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
            this.type = enums.GameObjectType.METEOR;
            this.alpha = 0.5; // 50% transparent
            this.Reset();
        }
        
        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }
        
        public Reset(): void 
        {
            this._verticalSpeed = util.Mathf.RandomRange(-2, 2);
            this._horizontalSpeed = util.Mathf.RandomRange(-5, -10);
            this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);
            let randomX = util.Mathf.RandomRange(this.width * 8 ,this.width *10);
            let randomY = util.Mathf.RandomRange(config.Game.SCREEN_HEIGHT - this.halfHeight,this.halfHeight);
            this.position = new Vector2(randomX, randomY);
        }

        
    }
}