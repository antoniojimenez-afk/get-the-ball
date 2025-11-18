controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f . . . f . . . . . . . 
        . . . . f . . . f . . . . . . . 
        . . . . f . . . f . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . . f . . . f . . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . . f . . . f . . . . 
        . . . . . . . f . . . f . . . . 
        . . . . . . . f . . . f . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . f . . . f . . . 
        . . . . . . . . f . . . f . . . 
        . . . . . . . . f . . . f . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fountain, 100)
    music.powerUp.play()
    info.changeScoreBy(1)
    if (SPAWNSPEED > 500) {
        SPAWNSPEED += -500
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        `],
    100,
    true
    )
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . 3 3 . . 
        . . . f f f f f f f f f 3 3 . . 
        . . . . . . . f . . . . 3 3 . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . 3 3 . . 
        . . . f f f f f f f f f 3 3 . . 
        . . . . . . . f . . . . 3 3 . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . 3 3 . . 
        . . . f f f f f f f f f 3 3 . . 
        . . . . . . . f . . . . 3 3 . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    music.buzzer.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let clover: Sprite = null
let SPAWNSPEED = 0
let hero: Sprite = null
scene.setBackgroundImage(assets.image`background`)
hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
SPAWNSPEED = 5000
game.onUpdate(function () {
    if (!(controller.left.isPressed()) && (!(controller.up.isPressed()) && (!(controller.down.isPressed()) && !(controller.right.isPressed())))) {
        animation.stopAnimation(animation.AnimationTypes.All, hero)
    }
})
forever(function () {
    pause(SPAWNSPEED)
    clover = sprites.createProjectileFromSide(img`
        ....................
        ......ffff1ffff.....
        .....fffff1fffff....
        ....fffff111fffff...
        ...fffff11111fffff..
        ..ffffff11f11ffffff.
        ..fffff11fff11fffff.
        ..ffff11fffff11ffff.
        ..fff11fffffff11fff.
        ..11111fffffff11111.
        ..fff11fffffff11fff.
        ..ffff11fffff11ffff.
        ..fffff11fff11fffff.
        ..ffffff11f11ffffff.
        ...fffff11111fffff..
        ....fffff111fffff...
        .....fffff1fffff....
        ......ffff1ffff.....
        ....................
        ....................
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        ....................
        ....................
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        ..2222222222222.....
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
