import { $ } from '@wdio/globals'

class CommunityMarketPage {
//locators
    get communityTab() {
        return $$('//a[@data-tooltip-content=".submenu_Community"]');
    }

    marketOption(optionText) {
        return $(`//a[normalize-space()="${optionText}"]`);
    }

    get communityMarketPageTitle() {
        return $('//span[@class="market_title_text"]');
    }

    get showAdvancedOptions() {
        return $('#market_search_advanced_show');
    }

    get communityMarketModalTitle() {
        return $('//div[@class="title_text"]');
    }

    get gameDropdown() {
        return $('#market_advancedsearch_appselect_activeapp');
    }

    gameName(name) {
        return $(`//span[text()="${name}"]`);
    }

    get heroFilter(){
        return $('//select[contains(@name,"Hero")]');
    }

    heroName(name) {
        return $(`//option[text()="${name}"]`)
    }

    rarityName(name) {
        return $(`//span[text()="${name}"]`)
    }

    get searchButton() {
        return $('.market_advancedsearch_bottombuttons>div');
    }

    get resultMessage() {
        return $('//h2[@class="market_search_results_title"]');
    }

    get selectedFilterNames() {
        return $$('.market_searchedForTerm');
    }

    get resultTable() {
        return $('#searchResultsTable');
    }

    get firstResult() {
        return $('//span[@class="market_listing_item_name"]');
    }

    get itemTitle() {
        return $('//h1[@class="hover_item_name"]');
    }

    get heroNameTitle() {
        return $('//div[contains(text(),"Used By")]')
    }

    get gameNameTitle() {
        return $('#largeiteminfo_game_name');
    }

    get priceTab() {
        return $('//div[@data-sorttype="price"]');
    }

    get priceValues() {
        return $$('//span[@class="normal_price"]');
    }

//methods
    async selectCommunityMarket() {
        await this.communityTab[1].moveTo();
        for (let i = 0; i < 3; i++) {
            await browser.keys(['ArrowDown']);
            await browser.pause(200);
        }
        const marketOption = await $('=Market');
        await marketOption.click();
    }

    async openAdvancedOptions() {
        await this.showAdvancedOptions.click();
    }

    async selectGame(name) {
        await this.gameDropdown.click();
        await this.gameName(name).click();
    }

    async selectHero(name) {
        await this.heroFilter.click();
        await this.heroName(name).click();    
    }

    async selectRarity(name) {
        await this.rarityName(name).click();    
    }

    async clickOnSearchButton() {
        await this.searchButton.click();
    }

    async getSelectedFilterTexts() {
        const elements = await this.selectedFilterNames;
        return Promise.all(elements.map(async (el) => await el.getText()));
    }

    async getFirstResultText() {
        return await this.firstResult[0].getText();
    }
    async selectFirstResult() {
        await this.firstResult[0].click();
    }

    async getItemTitleText() {
        return await this.itemTitle.getText();
    }

    async clickOnPriceTab() {
        await this.priceTab[0].click();
    }

    async getAllPrices() {
        let prices = [];
        const priceElements = await this.priceValue;
        for (const num of priceElements) {
            const price = await num.getText();
            const number = parseFloat(price.replace(/[^\d.]/g, ''));
            if (!isNaN(number)) {
                prices = prices.concat(number);
            }
        }
        return prices;
    }
}

export default new CommunityMarketPage();