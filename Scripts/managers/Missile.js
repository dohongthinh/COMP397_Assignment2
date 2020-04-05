"use strict";
var managers;
(function (managers) {
    var Missile = /** @class */ (function () {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Missile() {
            this._buildMissilePool();
        }
        // PRIVATE METHODS
        Missile.prototype._buildMissilePool = function () {
            // initialize missile number
            this._missileNumber = 3;
            // create an empty container
            this._missilePool = new Array();
            for (var count = 0; count < this._missileNumber; count++) {
                var missile = new objects.Missile();
                this._missilePool.push(missile);
            }
        };
        // PUBLIC METHODS
        Missile.prototype.AddMissilesToScene = function (scene) {
            this._missilePool.forEach(function (missile) {
                scene.addChild(missile);
            });
        };
        Missile.prototype.GetMissile = function () {
            // remove the missile from the front of the pool
            var missile = this._missilePool.shift();
            missile.isActive = true;
            // push the missile to the back of the pool
            this._missilePool.push(missile);
            // return a reference to the active missile
            return missile;
        };
        Missile.prototype.Update = function () {
            this._missilePool.forEach(function (missile) {
                missile.Update();
            });
        };
        return Missile;
    }());
    managers.Missile = Missile;
})(managers || (managers = {}));
//# sourceMappingURL=Missile.js.map