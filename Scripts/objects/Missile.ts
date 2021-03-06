module objects
{
    export class Missile extends objects.GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _horizontalSpeed?:number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("missile"), new Vector2(), true);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void 
        {
            // check upper bounds
            if(this.position.x <= -this.width)
            {
                this.Reset();
            }

            // check lower bounds
            if(this.position.x >= config.Game.SCREEN_WIDTH + this.width)
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
            this.type = enums.GameObjectType.MISSILE;
            this._horizontalSpeed = 10; // 5 px per frame
            this.velocity = new Vector2(this._horizontalSpeed,0 );
            this.Reset();
        }

        public Update(): void 
        {
            if(this.isActive)
            {
                this._move();
                this._checkBounds();
            }
        }

        public Reset(): void 
        {
           this.position = new objects.Vector2(-1000, -1000);
           this.isActive = false;
        }
    }
}