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
    var Missile = /** @class */ (function (_super) {
        __extends(Missile, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Missile() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("missile"), new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Missile.prototype._checkBounds = function () {
            // check upper bounds
            if (this.position.x <= -this.width) {
                this.Reset();
            }
            // check lower bounds
            if (this.position.x >= config.Game.SCREEN_WIDTH + this.width) {
                this.Reset();
            }
        };
        Missile.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Missile.prototype.Start = function () {
            this.type = enums.GameObjectType.MISSILE;
            this._horizontalSpeed = 5; // 5 px per frame
            this.velocity = new objects.Vector2(this._horizontalSpeed, 0);
            this.Reset();
        };
        Missile.prototype.Update = function () {
            if (this.isActive) {
                this._move();
                this._checkBounds();
            }
        };
        Missile.prototype.Reset = function () {
            this.position = new objects.Vector2(-1000, -1000);
            this.isActive = false;
        };
        return Missile;
    }(objects.GameObject));
    objects.Missile = Missile;
})(objects || (objects = {}));
//# sourceMappingURL=Missile.js.map