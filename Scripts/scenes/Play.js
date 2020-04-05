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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this._background = new objects.Background();
            this._spaceship = new objects.Spaceship();
            this._enemy = new objects.Enemy();
            this._meteors = new Array();
            for (var index = 0; index < config.Game.METEOR_NUM; index++) {
                this._meteors.push(new objects.Meteor());
            }
            this._scoreBoard = new managers.ScoreBoard();
            config.Game.SCORE_BOARD = this._scoreBoard;
            this._missileManager = new managers.Missile();
            config.Game.MISSILE_MANAGER = this._missileManager;
            this._keyboardManager = new managers.Keyboard();
            config.Game.KEYBOARD_MANAGER = this._keyboardManager;
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._background.Update();
            this._spaceship.Update();
            this._missileManager.Update();
            this._enemy.Update();
            managers.Collision.AABBCheck(this._spaceship, this._enemy);
            this._meteors.forEach(function (meteor) {
                meteor.Update();
                managers.Collision.squaredRadiusCheck(_this._spaceship, meteor);
            });
        };
        Play.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._spaceship);
            this._missileManager.AddMissilesToScene(this);
            this.addChild(this._enemy);
            for (var _i = 0, _a = this._meteors; _i < _a.length; _i++) {
                var meteor = _a[_i];
                this.addChild(meteor);
            }
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map