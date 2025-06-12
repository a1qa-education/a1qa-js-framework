import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import CommunityMarketPage from '../pageobjects/communityMarket.page.js';

let firstResultText;
Given(/^User opens the Steam main page$/, async () => {
    await browser.url('https://store.steampowered.com');
});

When(/^User navigates to the Community Market$/, async () => {
    await CommunityMarketPage.selectCommunityMarket()
    await expect(CommunityMarketPage.communityMarketPageTitle).toHaveText('Community Market');
});

When(/^User opens the advanced search options$/, async () => {
    await expect(CommunityMarketPage.showAdvancedOptions).toBeDisplayed();
    await CommunityMarketPage.openAdvancedOptions()
});

When(/^User selects the game "([^"]+)"$/, async (gameName) => {
    await expect(CommunityMarketPage.communityMarketModalTitle).toHaveText('Search Community Market');
    await expect(CommunityMarketPage.searchButton).toBeDisplayed();
    await expect(CommunityMarketPage.gameDropdown).toBeDisplayed();
    await CommunityMarketPage.selectGame(gameName);
});

When(/^User selects the hero "([^"]+)"$/, async (heroName) => {
    await CommunityMarketPage.selectHero(heroName);
});

When(/^User selects the rarity "([^"]+)"$/, async (rarityName) => {
    await CommunityMarketPage.selectRarity(rarityName);
});

When(/^User clicks the search button$/, async () => {
    await CommunityMarketPage.clickOnSearchButton();
});

Then(/^Results are displayed with the correct message and tags$/, async (dataTable) => {
    const expectedTags = dataTable.raw().flat();
    const actualTags = await CommunityMarketPage.getSelectedFilterTexts();
    await expect(CommunityMarketPage.resultMessage).toHaveText('Showing results for:');
    await expect(CommunityMarketPage.resultTable).toBeDisplayed();
    expect(actualTags).toEqual(expect.arrayContaining(expectedTags));
});

When(/^User selects the first item from the results$/, async () => {
    firstResultText=await CommunityMarketPage.getFirstResultText();
    await CommunityMarketPage.selectFirstResult();
});

Then(/^User should see item with game "([^"]*)" and hero "([^"]*)"$/, async (game, hero) => {
    const itemTitleText = await CommunityMarketPage.getItemTitleText();
    const currentUrl = await browser.getUrl();
    await expect(currentUrl).toContain('/market/listings');
    await expect(itemTitleText).toEqual(firstResultText);
    await expect(CommunityMarketPage.gameNameTitle).toHaveText(game);
    await expect(CommunityMarketPage.heroNameTitle).toHaveText(hero);
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