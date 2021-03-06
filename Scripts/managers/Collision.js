"use strict";
var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.squaredRadiusCheck = function (object1, object2) {
            // squared radius check
            var radii = object1.halfWidth + object2.halfWidth;
            if (objects.Vector2.sqrDistance(object1.position, object2.position) < (radii * radii)) {
                if (!object2.isColliding) {
                    Collision._collisionResponse(object1, object2);
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
            }
            return false;
        };
        Collision.AABBCheck = function (object1, object2) {
            var object1Offset = (!object1.isCentered) ? new objects.Vector2(0, 0) : new objects.Vector2(object1.halfWidth, object1.halfHeight);
            var object2Offset = (!object2.isCentered) ? new objects.Vector2(0, 0) : new objects.Vector2(object2.halfWidth, object2.halfHeight);
            var object1TopLeft = new objects.Vector2(object1.position.x - object1Offset.x, object1.position.y - object1Offset.y);
            var object2TopLeft = new objects.Vector2(object2.position.x - object2Offset.x, object2.position.y - object2Offset.y);
            // AABB Collision Detection
            if (object1TopLeft.x < object2TopLeft.x + object2.width &&
                object1TopLeft.x + object1.width > object2TopLeft.x &&
                object1TopLeft.y < object2TopLeft.y + object2.height &&
                object1TopLeft.y + object1.height > object2TopLeft.y) {
                if (!object2.isColliding) {
                    Collision._collisionResponse(object1, object2);
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
            }
            return false;
        };
        Collision._collisionResponse = function (object1, object2) {
            /*switch (object2.type)
            {
                case enums.GameObjectType.ENEMY:
                    {
                        console.log("Collision with enemy!");
                        //let yaySound = createjs.Sound.play("yay");
                        //yaySound.volume = 0.2;
                        //config.Game.SCORE_BOARD.Score += 100;
                        config.Game.SCORE_BOARD.Lives -= 1;
    
                        // check if lives falls less than 1 and then switch to END scene
                        if(config.Game.LIVES < 1)
                        {
                            config.Game.SCENE = scenes.State.END;
                        }
                        
                    }
                    break;
                case enums.GameObjectType.METEOR:
                    {
                        console.log("Collision with meteor!");
                        //let thunderSound = createjs.Sound.play("thunder");
                        //thunderSound.volume = 0.2;
                        config.Game.SCORE_BOARD.Lives -= 1;
    
                        // check if lives falls less than 1 and then switch to END scene
                        if(config.Game.LIVES < 1)
                        {
                            config.Game.SCENE = scenes.State.END;
                        }
                    }
                    break;
            }*/
            if (object1.type == enums.GameObjectType.SPACESHIP && object2.type == enums.GameObjectType.ENEMY) {
                console.log("Collision between spaceship and enemy!");
                config.Game.SCORE_BOARD.Lives -= 1;
                // check if lives falls less than 1 and then switch to END scene
                if (config.Game.LIVES < 1) {
                    config.Game.SCENE = scenes.State.END;
                }
            }
            else if (object1.type == enums.GameObjectType.SPACESHIP && object2.type == enums.GameObjectType.METEOR) {
                console.log("Collision with meteor!");
                config.Game.SCORE_BOARD.Lives -= 1;
                // check if lives falls less than 1 and then switch to END scene
                if (config.Game.LIVES < 1) {
                    config.Game.SCENE = scenes.State.END;
                }
            }
            if (object1.type == enums.GameObjectType.MISSILE && object2.type == enums.GameObjectType.ENEMY) {
                console.log("hit the enemy!");
                config.Game.SCORE_BOARD.Score += 100;
                if (config.Game.SCORE > config.Game.HIGH_SCORE) {
                    config.Game.HIGH_SCORE = config.Game.SCORE;
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=Collision.js.map