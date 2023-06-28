var config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: '#bfcc00',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var playerPoke;
var wildPoke;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('playerPokeSprite', '/img/이상해꽃.png');
    this.load.image('wildPokeSprite', '/img/리자드.png');
}

function create () {
    var WildPoke = new Phaser.Class({
        Extends: Phaser.GameObjects.Image,
        initialize:
        function WildPoke (scene) {
            Phaser.GameObjects.Image.call(this, scene)

            this.setTexture('wildPokeSprite');
            this.setPosition(16,16);
            this.setOrigin(0);

            scene.children.add(this);
        },
    });

    var PlayerPoke = new Phaser.Class({
        initialize:

        function PlayerPoke(scene) {
        }
    })
}

function update () {

}