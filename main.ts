namespace SpriteKind {
    export const NPC1 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    let list: string[] = []
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
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
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e 1 1 1 e e e e f . . 
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
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e 1 1 1 e e e e f . . 
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
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e 1 1 1 e e e e f . . 
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
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e 1 1 1 e e e e f . . 
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
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e 1 1 1 e e e e f . . 
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
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e 1 1 1 e e e e f . . 
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
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `],
    500,
    false
    )
    mySprite.sayText("Hey Bro Am Here!", 8500, true)
    text_list = ["Hey Bro Am Here!", "1"]
    text_list = ["Oh, Hey! Glad You Remembered To Come!", "2"]
    if (list.unshift("Hey Bro Am Here!") == 1) {
        pause(8500)
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
        NPC.sayText("Oh, Hey! Glad You Remembered To Come!", 8500, true)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "I Believe In You!")
    game.gameOver(false)
    game.reset()
})
let text_list: string[] = []
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
mySprite.sayText("Oh, I Almost Forgot That I Was Suppost To Play With My Friend Today!", 5000, true)
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
    . f e 1 e e e e e e e 1 e f . . 
    . f e 1 1 e e e e e 1 1 e f . . 
    . f e e 1 1 1 1 1 1 1 e e f . . 
    . f e e e e e e e e e e e f . . 
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
pause(3000)
controller.moveSprite(mySprite)
