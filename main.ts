namespace SpriteKind {
    export const NPC1 = SpriteKind.create()
    export const MiniMenu = SpriteKind.create()
    export const Noise = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile0, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    mySprite.setPosition(45, 64)
    controller.moveSprite(mySprite)
    NPC = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f 1 f 9 f 9 f . . 
        . f f f f f f f f 1 9 1 f f . . 
        . f f 1 1 1 f f 1 9 1 9 1 f . . 
        . f 1 f f f f f f 1 9 1 f f . . 
        . 1 1 f f f f f 9 f 9 f 1 f . . 
        . 1 f f f f f f f f f f f 9 . . 
        . f f f f f f f f f f f 9 9 . . 
        . f f f f f f f f f f 9 9 f . . 
        . f f f 1 1 1 1 9 9 9 9 f f . . 
        . f f 1 f f f f f f f f f f . . 
        `, SpriteKind.NPC1)
    NPC.setPosition(5, 64)
    NPC.follow(mySprite, 87)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile2, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC1)
    tiles.setCurrentTilemap(tilemap`level9`)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    mySprite.setPosition(54, 97)
    story.spriteMoveToLocation(mySprite, 150, 14, 60)
    story.startCutscene(function () {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "*Huff, Puff*", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "I Finally Lost Him... *Huff, Puff*", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Well, I'd Better Keep Moving Before He Finds Me Again...", 15, 1, story.TextSpeed.Normal)
        story.spriteMoveToLocation(sprite, 151, 13, 90)
    })
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile1, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC1)
    tiles.setCurrentTilemap(tilemap`level8`)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    mySprite.setPosition(78, 95)
    controller.moveSprite(mySprite)
    NPC = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f 1 f 9 f 9 f . . 
        . f f f f f f f f 1 9 1 f f . . 
        . f f 1 1 1 f f 1 9 1 9 1 f . . 
        . f 1 f f f f f f 1 9 1 f f . . 
        . 1 1 f f f f f 9 f 9 f 1 f . . 
        . 1 f f f f f f f f f f f 9 . . 
        . f f f f f f f f f f f 9 9 . . 
        . f f f f f f f f f f 9 9 f . . 
        . f f f 1 1 1 1 9 9 9 9 f f . . 
        . f f 1 f f f f f f f f f f . . 
        `, SpriteKind.NPC1)
    NPC.setPosition(50, 108)
    NPC.follow(mySprite, 87)
})
sprites.onOverlap(SpriteKind.NPC1, SpriteKind.Player, function (sprite, otherSprite) {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level7`)
    mySprite = null
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    mySprite.setPosition(82, 99)
    NPC = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
        . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
        . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
        . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
        . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
        . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
        . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
        . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
        . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.NPC1)
    NPC.setPosition(82, 60)
    story.startCutscene(function () {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f e e e e 1 1 1 e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f e e e e 1 1 1 e e e e f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f e e e e 1 1 1 e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Hey Bro Am Here!", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(NPC, "Oh, Hey! Glad You Remembered To Come!", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Yeah, I Remembered This Time", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(NPC, "Well I Thought We Could Maybe Go To The Park", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteMoveToLocation(NPC, 60, 60, 90)
        story.spriteSayText(mySprite, "Sure, We Can Go To The Park I Don't Mind", 15, 1, story.TextSpeed.Normal)
        story.spriteMoveToLocation(mySprite, 75, 7, 90)
    })
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(true, "THANKS SOOOO MUCH FOR PLAYINGG!!! (Took Me So Long To Make😭)")
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass3, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC1)
    tiles.setCurrentTilemap(tilemap`level6`)
    mySprite = null
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    mySprite.setPosition(82, 99)
    NPC = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
        . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
        . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
        . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
        . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
        . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
        . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
        . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
        . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.NPC1)
    NPC.setPosition(82, 60)
    story.startCutscene(function () {
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "Ok Were Here", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Ok So, Now What Do Ya Want To Do?", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "Lets Go On The Bench And Just Chill, But Also Talk", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Ok!", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteMoveToLocation(mySprite, 119, 15, 90)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteMoveToLocation(NPC, 103, 15, 90)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "So, How Have You Been Holding Up Lately?", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "I've Been Good How About You?", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "I Don't Know I Just Feel Like I Am Being Watched Lately And I Don't Know Why...", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Hmmm, Thats Weird... Well Am Sure It's Nothing You Should Be Worried About.")
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "I Guarantee That Your Just Paranoid ", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "... Well...", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "Yeah I Know It Could Just Be Paranoia", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "But I Don't Think Paranoia Would Last THIS Long Bro...", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Well I'm Sure It Should Pass Away Soon And Everything Will Be Fine", 15, 1, story.TextSpeed.Normal)
        story.spriteMoveToLocation(NPC, 103, 35, 90)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "Ok Bro, I Gotta Start Heading Home", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "And Also, Meet Me At The Back Here At The Park Again Tommorow", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Ok I Will Be Here Tomorrow I Promise", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "Alright, Thanks Cya", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Cya!", 15, 1, story.TextSpeed.Normal)
        story.spriteMoveToLocation(NPC, 151, 35, 90)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        game.showLongText("The Next Day", DialogLayout.Full)
        mySprite = null
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `, SpriteKind.Player)
        mySprite.setPosition(78, 109)
        story.spriteMoveToLocation(mySprite, 78, 97, 90)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Huh...", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "That's Weird...", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "I Thought He'd Be Here By Now...", 15, 1, story.TextSpeed.Normal)
        NPC = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `, SpriteKind.NPC1)
        NPC.setPosition(151, 35)
        story.spriteMoveToLocation(NPC, 79, 35, 90)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "So Sorry I'm Late Hope I Didn't Keep You Waiting Too Long...", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "No, Your Good It's Fine I Understand People Can Be Late Sometimes", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "Heh... Thanks For Undertanding Bro", 15, 1, story.TextSpeed.Normal)
        Noise1 = null
        Noise1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Noise)
        Noise1.setPosition(2, 60)
        story.spriteSayText(Noise1, "*Rustling Noises*", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "Did You Hear That?", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Hear What?", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "N..Never Mind. It Was Probabaly Me Just Hearing Things...", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Ok Then?...", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(Noise1, "*Rustling Noises*", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "There It Is Again!", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "You Had To Have Heard It That Time!", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "Ok That Time... I Did", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "I'm Gonna Go Check It Out Stay Here Ok", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "WHAT?! DUDE, ARE YOU CRAZY?!", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        NPC,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 1 1 1 1 1 1 1 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 1 9 9 9 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 1 9 9 9 9 9 9 9 1 9 f . . 
            . f 9 9 1 9 9 9 9 9 1 9 9 f . . 
            . f 9 9 9 1 1 1 1 1 9 9 9 f . . 
            . f 9 9 9 9 9 9 9 9 9 9 9 f . . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
        story.spriteSayText(NPC, "Bro Calm Down, It's Just A Little Noise That Probably Is Just A Squirl", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "*Sigh* Fine,... But If Something Pops Out At Ya, Don't Say I Didn't Warn You...", 15, 1, story.TextSpeed.Normal)
        story.spriteMoveToLocation(NPC, 2, 60, 90)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC1)
        NPC = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.NPC1)
        story.spriteSayText(NPC, "AAAAAAAAAAAAAAAAHHHHHH!", 15, 1, story.TextSpeed.Fast)
        story.spriteMoveToLocation(mySprite, 28, 60, 90)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "ARE YOU OK?!", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(NPC, "*but nobody answered*", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "ANSWER ME!!", 15, 1, story.TextSpeed.Normal)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC1)
        NPC = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f f f f f f f 1 f 9 f 9 f . . 
            . f f f f f f f f 1 9 1 f f . . 
            . f f 1 1 1 f f 1 9 1 9 1 f . . 
            . f 1 f f f f f f 1 9 1 f f . . 
            . 1 1 f f f f f 9 f 9 f 1 f . . 
            . 1 f f f f f f f f f f f 9 . . 
            . f f f f f f f f f f f 9 9 . . 
            . f f f f f f f f f f 9 9 f . . 
            . f f f 1 1 1 1 9 9 9 9 f f . . 
            . f f 1 f f f f f f f f f f . . 
            `, SpriteKind.NPC1)
        NPC.setPosition(2, 60)
        story.spriteMoveToLocation(NPC, 12, 60, 87)
        story.spriteMoveToLocation(mySprite, 35, 60, 90)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "WHAT HAPPENED TO YOU?!", 15, 1, story.TextSpeed.Normal)
        myEnemy = null
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f . . . . . 
            . 1 f f f f f f f f 1 . . . . . 
            . f 1 f f f f f f 1 f . . . . . 
            . f f 1 1 f f 1 1 f f . . . . . 
            . f f 1 1 f f 1 1 f f . . . . . 
            . f f 1 1 f f 1 1 f f . . . . . 
            . f f f f f f f f f f . . . . . 
            . f f f f f f f f f f . . . . . 
            . f f f 1 1 1 1 f f f . . . . . 
            . f f 1 f f f f 1 f f . . . . . 
            `, SpriteKind.Player)
        myEnemy.setPosition(2, 40)
        story.spriteMoveToLocation(myEnemy, 10, 40, 87)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "WHAT?!", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "I THOUGHT YOU WERE DEAD! HOW ARE YOU EVEN ALIVE RIGHT NOW?!", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(myEnemy, "*but there was no response*", 15, 1, story.TextSpeed.Normal)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 1 1 1 1 1 1 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e 1 1 1 1 1 e e e f . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e 1 e e e 1 e e e f . . 
            . f e e e e e e e e e e e f . . 
            . f e 1 e e e e e e e 1 e f . . 
            . f e 1 1 e e e e e 1 1 e f . . 
            . f e e 1 1 1 1 1 1 1 e e f . . 
            . f e e e e e e e e e e e f . . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        false
        )
        story.spriteSayText(mySprite, "WHAT DID YOU DO TO HIM?!", 15, 1, story.TextSpeed.Normal)
        Noise2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Noise)
        Noise2.setPosition(76, 26)
        story.spriteSayText(Noise2, "*the thing tries speaking, but it all comes out sounding like slime getting swished around violently*", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(myEnemy, "RUN", 15, 1, story.TextSpeed.VerySlow)
        NPC.follow(mySprite, 87)
        controller.moveSprite(mySprite)
        light.showAnimation(light.runningLightsAnimation, 500)
    })
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "I Believe In You!")
    game.gameOver(false)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark5, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level10`)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    mySprite.setPosition(7, 6)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    NPC = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f 1 f 9 f 9 f . . 
        . f f f f f f f f 1 9 1 f f . . 
        . f f 1 1 1 f f 1 9 1 9 1 f . . 
        . f 1 f f f f f f 1 9 1 f f . . 
        . 1 1 f f f f f 9 f 9 f 1 f . . 
        . 1 f f f f f f f f f f f 9 . . 
        . f f f f f f f f f f f 9 9 . . 
        . f f f f f f f f f f 9 9 f . . 
        . f f f 1 1 1 1 9 9 9 9 f f . . 
        . f f 1 f f f f f f f f f f . . 
        `, SpriteKind.NPC1)
    NPC.setPosition(0, 6)
})
let Noise2: Sprite = null
let myEnemy: Sprite = null
let Noise1: Sprite = null
let NPC: Sprite = null
let mySprite: Sprite = null
music.play(music.createSong(hex`0078000408030105001c000f0a006400f4010a00000400000000000000000000000000000000024e0000000200012504000600012408000a0001250c000e0001241400160001201c001e00011e2400260001192c002e00012034003600011d38003a00011e4400460001204c004e00011d50005200011e`), music.PlaybackMode.LoopingInBackground)
game.showLongText("Bob The Chocolate Bar And The Corruption Of Bad Emotions 2", DialogLayout.Center)
music.stopAllSounds()
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f . . 
    . f e e e e e e e e e e e f . . 
    . f e e e e e e e e e e e f . . 
    . f e e e 1 e e e 1 e e e f . . 
    . f e e e 1 e e e 1 e e e f . . 
    . f e e e e e e e e e e e f . . 
    . f e 1 e e e e e e e 1 e f . . 
    . f e 1 1 e e e e e 1 1 e f . . 
    . f e e 1 1 1 1 1 1 1 e e f . . 
    . f e e e e e e e e e e e f . . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
mySprite.setPosition(75, 50)
info.setLife(1)
story.startCutscene(function () {
    story.spriteSayText(mySprite, "Oh, I Almost Forgot That I Have To Play With My Friend Today!", 15, 1, story.TextSpeed.Normal)
    story.spriteMoveToLocation(mySprite, 153, 60, 90)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
