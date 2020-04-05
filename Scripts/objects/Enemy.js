"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Enemy() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("enemy"), new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Enemy.prototype._checkBounds = function () {
            if (this.x <= 0 - this.width) {
                this.Reset();
            }
        };
        Enemy.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Enemy.prototype.Start = function () {
            this.type = enums.GameObjectType.ENEMY;
            this._horizontalSpeed = -5; // 5 px per frame
            this.velocity = new objects.Vector2(this._horizontalSpeed, 0);
            this.Reset();
        };
        Enemy.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Enemy.prototype.Reset = function () {
            var randomY = util.Mathf.RandomRange(config.Game.SCREEN_HEIGHT - this.halfHeight, this.halfHeight);
            this.position = new objects.Vector2(config.Game.SCREEN_WIDTH, randomY);
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=Enemy.js.map