Feature: load the game
    Background:
        Given game is launched

    Scenario: game ready
        When game is ready
        Then check game timer and moves information are present.

    Scenario: start playing
        When player click on card
        Then player should see the flipped card

