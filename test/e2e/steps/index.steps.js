import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { IndexPage } from '../pages/index.page';
import { AST_Return } from 'terser';

Given(/^game is launched$/, function () {
    IndexPage.open();
});

When(/^game is ready$/, () => {
    IndexPage.cardDeck.waitForExist(2000);
});

Then(/^check game timer and moves information are present.$/, () => {
    const expectedTimerText = 'playing time: 0 minute 0 seconds';
    const expectedMovesText = 'Number of moves: (0).';
    IndexPage.timer.waitForExist(2000);
    IndexPage.moves.waitForExist(2000);
    const movesText = IndexPage.moves.getText();
    const timerText = IndexPage.timer.getText();
    assert.equal(expectedTimerText, timerText);
    assert.equal(expectedMovesText, movesText);
});

When(/^player click on card$/, () => {
    IndexPage.firstCard.waitForExist(2000);
    IndexPage.firstCard.click();
    browser.pause(1000);
});

Then(/^player should see the flipped card$/, () => {
    const classNames = IndexPage.firstCard.getAttribute("class");
    const pattern = /disabled/i;
    assert(pattern.test(classNames));
});