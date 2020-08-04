// Battleback Fix

/*:
 * @plugindesc Fixes battleback anchoring bugs caused by using YEP_GridFreeDoodads in RPG Maker MV v1.5.
 * @author JGreene
 *
 * @help Plug and play. Place below all of Yanfly's Doodad plugins.
 *
 * If you use a custom resolution, you will need to adjust the size of your images
 * to match, or use the parameter option to scale battlebacks
 * (found in YEP_CoreEngine).
 */
(function() {

Spriteset_Battle_initialize = Spriteset_Battle.prototype.initialize;
Spriteset_Battle.prototype.initialize = function() {
	this.anchorfix();
	Spriteset_Battle_initialize.call(this);
};

Spriteset_Battle.prototype.anchorfix = function() {
	this.back1 = this.battleback1Name();
	this.back2 = this.battleback2Name();
	this.fixpos = true;
};

Spriteset_Battle_createBattleback = Spriteset_Battle.prototype.createBattleback;
Spriteset_Battle.prototype.createBattleback = function() {
	Spriteset_Battle_createBattleback.call(this);
	this.Anchor();
};

Spriteset_Battle_locateBattleback = Spriteset_Battle.prototype.locateBattleback;
Spriteset_Battle.prototype.locateBattleback = function() {
    if (this.fixpos) return;
	Spriteset_Battle_locateBattleback.call(this);
};

Spriteset_Battle.prototype.Anchor = function() {
	this._back1Sprite.x = 0;
	this._back1Sprite.y = 0;
	this._back2Sprite.x = 0;
	this._back2Sprite.y = 0;
};
})();