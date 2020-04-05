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
    var Spaceship = /** @class */ (function (_super) {
        __extends(Spaceship, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Spaceship() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("spaceShip"), 0, 0, true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Spaceship.prototype._checkBounds = function () {
            // left boundary
            if (this.position.y <= this.halfHeight) {
                this.position = new objects.Vector2(this.position.x, this.halfHeight);
            }
            // right boundary
            if (this.position.y >= config.Game.SCREEN_HEIGHT - this.halfHeight) {
                this.position = new objects.Vector2(this.position.x, config.Game.SCREEN_HEIGHT - this.halfHeight);
            }
        };
        Spaceship.prototype._move = function () {
            var newPositionY = util.Mathf.Lerp(this.stage.mouseY, this.position.y, 0.05);
            this.position = new objects.Vector2(this._horizontalPosition, newPositionY);
        };
        // PUBLIC METHODS
        Spaceship.prototype.Start = function () {
            this._horizontalPosition = 30; // locked to the bottom of the screen
        };
        Spaceship.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Spaceship.prototype.Reset = function () {
        };
        return Spaceship;
    }(objects.GameObject));
    objects.Spaceship = Spaceship;
})(objects || (objects = {}));
//# sourceMappingURL=Spaceship.js.map