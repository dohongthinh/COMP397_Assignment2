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
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Background() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("background")) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Background.prototype._checkBounds = function () {
            if (this.x <= -1280) {
                this.Reset();
            }
        };
        Background.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Background.prototype.Start = function () {
            this._horizontalSpeed = -5; // 5 px per frame
            this.velocity = new objects.Vector2(this._horizontalSpeed, 0);
            this.Reset();
        };
        Background.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Background.prototype.Reset = function () {
            this.position = new objects.Vector2(1, 0);
        };
        return Background;
    }(objects.GameObject));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=Background.js.map