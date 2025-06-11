import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import CommunityMarketPage from '../pageobjects/communityMarket.page.js';

let firstResultText;
Given(/^User opens the Steam main page$/, async () => {
    await browser.url('https://store.steampowered.com');
});

When(/^User navigates to the Community Market$/, async () => {
    await browser.url('https://steamcommunity.com/market/');
    await expect(CommunityMarketPage.communityMarketPageTitle).toHaveText('Community Market');
});

Then(/^User opens the advanced search options$/, async () => {
    await CommunityMarketPage.openAdvancedOptions()
});

Then(/^User selects the game "([^"]+)"$/, async (gameName) => {
    await CommunityMarketPage.selectGame(gameName);
});

Then(/^User selects the hero "([^"]+)"$/, async (heroName) => {
    await CommunityMarketPage.selectHero(heroName);
});

Then(/^User selects the rarity "([^"]+)"$/, async (rarityName) => {
    await CommunityMarketPage.selectRarity(rarityName);
});

Then(/^User clicks the search button$/, async () => {
    await CommunityMarketPage.clickOnSearchButton();
});

Then(/^Results are displayed with the correct message$/, async () => {
    await CommunityMarketPage.validateResults();
});

When(/^User selects the first item from the results$/, async () => {
    firstResultText=await CommunityMarketPage.firstResult.getText();
    await CommunityMarketPage.selectFirstResult();
});

Then(/^The item page displays correct information for selected filters$/, async () => {
    const itemTitleText = await CommunityMarketPage.itemTitle.getText();
    const currentUrl = await browser.getUrl();
    await expect(currentUrl).toContain('/market/listings');
    await expect(itemTitleText).toEqual(firstResultText);
    await expect(CommunityMarketPage.gameNameTitle).toHaveText('Dota 2');
    await expect(CommunityMarketPage.heroNameTitle).toHaveText('Used By: Phantom Assassin');
});

Then(/^Prices are shown in ascending order$/, async () => {
    const prices = await CommunityMarketPage.getAllPrices();
    const ascendingOrderPrice = [...prices].sort((a, b) => a - b);
    await expect(prices).toEqual(ascendingOrderPrice);
});

When(/^User clicks the Price header to sort in descending order$/, async () => {
    await CommunityMarketPage.clickOnPriceTab();
});

Then(/^Prices are shown in descending order$/, async () => {
    const prices = await CommunityMarketPage.getAllPrices();
    const descendingOrderPrice = [...prices].sort((a, b) => b - a);
    await expect(prices).toEqual(descendingOrderPrice);
});



