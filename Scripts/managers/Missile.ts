module managers
{
    export class Missile 
    {
        // PRIVATE INSTANCE MEMBERS
        private _missileNumber: number;
        private _missilePool: Array<objects.Missile>;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {

            this._buildMissilePool();
        }

        // PRIVATE METHODS
        private _buildMissilePool():void
        {
            // initialize missile number
            this._missileNumber = 100;

            // create an empty container
            this._missilePool = new Array<objects.Missile>();

            for (let count = 0; count < this._missileNumber; count++) {
                let missile = new objects.Missile();
                this._missilePool.push(missile);
            }
        }

        // PUBLIC METHODS

        public AddMissilesToScene(scene:objects.Scene)
        {
            this._missilePool.forEach(missile => {
                scene.addChild(missile);
            });
        }


        public GetMissile():objects.Missile
        {
            // remove the missile from the front of the pool
            let missile = this._missilePool.shift();

            missile.isActive = true;

            // push the missile to the back of the pool
            this._missilePool.push(missile);

            // return a reference to the active missile
            return missile;
        }

        public Update()
        {
            this._missilePool.forEach(missile => {
                missile.Update();
            });
        }

        public CheckCollision(enemy:objects.Enemy,scene:objects.Scene)
        {
            this._missilePool.forEach(missile => {
                
                if(managers.Collision.AABBCheck(missile,enemy))
                {
                    scene.removeChild(missile);
                    enemy.position = new objects.Vector2(0 - enemy.width,-util.Mathf.RandomRange(config.Game.SCREEN_HEIGHT - enemy.halfHeight,enemy.halfHeight));                 
                }
                
            });
        }
    }
}