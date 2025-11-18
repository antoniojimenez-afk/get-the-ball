def on_up_pressed():
    animation.run_image_animation(hero,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        100,
        True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    animation.run_image_animation(hero,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        100,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    animation.run_image_animation(hero,
        [img("""
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
                """),
            img("""
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
                . . . . . . f f f f . . . . . .
                . . . . . . f . . . f . . . . .
                . . . . . . f . . . f . . . . .
                . . . . . . f . . . f . . . . .
                """),
            img("""
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
                . . . . . . . f f f f . . . . .
                . . . . . . . f . . . f . . . .
                . . . . . . . f . . . f . . . .
                . . . . . . . f . . . f . . . .
                """)],
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap(sprite, otherSprite):
    global SPAWNSPEED
    otherSprite.destroy(effects.fountain, 100)
    music.power_up.play()
    info.change_score_by(1)
    if SPAWNSPEED > 500:
        SPAWNSPEED += -500
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_down_pressed():
    animation.run_image_animation(hero,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        100,
        True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap2(sprite2, otherSprite2):
    otherSprite2.destroy(effects.ashes, 100)
    music.buzzer.play()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

bee: Sprite = None
clover: Sprite = None
SPAWNSPEED = 0
hero: Sprite = None
scene.set_background_image(assets.image("""
    background
    """))
hero = sprites.create(assets.image("""
    hero
    """), SpriteKind.player)
controller.move_sprite(hero)
hero.set_stay_in_screen(True)
SPAWNSPEED = 5000

def on_on_update():
    if not (controller.left.is_pressed()) and (not (controller.up.is_pressed()) and not (controller.down.is_pressed() and not (controller.right.is_pressed()))):
        animation.stop_animation(animation.AnimationTypes.ALL, hero)
game.on_update(on_on_update)

def on_forever():
    global clover, bee
    pause(SPAWNSPEED)
    clover = sprites.create_projectile_from_side(img("""
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
            """),
        randint(-50, 50),
        randint(-50, 50))
    bee = sprites.create_projectile_from_side(img("""
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
            """),
        randint(-50, 50),
        randint(-50, 50))
    bee.set_kind(SpriteKind.enemy)
forever(on_forever)
