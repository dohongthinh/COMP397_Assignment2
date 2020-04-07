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
    var Instruction = /** @class */ (function (_super) {
        __extends(Instruction, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Instruction() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Instruction.prototype.Start = function () {
            //instantiate a new Text object
            this._firstLabel = new objects.Label("The player will control a spaceship, shot the missiles ", "20px", "Consolas", "#FFFF00", 320, 100, true);
            this._secondLabel = new objects.Label("to kill the enemy ships and control to avoid meteors.", "20px", "Consolas", "#FFFF00", 320, 130, true);
            this._thirdLabel = new objects.Label("Player will have 5 lifes. If the spaceship hit the meteor,", "20px", "Consolas", "#FFFF00", 320, 160, true);
            this._fourthLabel = new objects.Label("player will lose 1 life.  If the space ship hit the ", "20px", "Consolas", "#FFFF00", 320, 190, true);
            this._fifthLabel = new objects.Label("enemy ship, play will lose immediately. Player can ", "20px", "Consolas", "#FFFF00", 320, 220, true);
            this._sixthLabel = new objects.Label("score when shoot the enemy.", "20px", "Consolas", "#FFFF00", 320, 250, true);
            // buttons
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 430, true);
            this._background = new objects.Background();
            this.Main();
        };
        Instruction.prototype.Update = function () {
            this._background.Update();
        };
        Instruction.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._firstLabel);
            this.addChild(this._secondLabel);
            this.addChild(this._thirdLabel);
            this.addChild(this._fourthLabel);
            this.addChild(this._fifthLabel);
            this.addChild(this._sixthLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                config.Game.SCENE = scenes.State.START;
            });
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=Instruction.js.map