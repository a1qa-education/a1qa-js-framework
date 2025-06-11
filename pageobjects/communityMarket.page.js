import { $ } from '@wdio/globals'

class CommunityMarketPage {
//locators
    get communityMarketPageTitle() {
        return $('//span[@class="market_title_text"]');
    }

    get showAdvancedOptions() {
        return $('#market_search_advanced_show');
    }

    get communityMarketModalTitle() {
        return $('//div[@class="title_text"]');
    }

    get closeIcon() {
        return $('//div[@class="newmodal_close"]');
    }

    get gameDropdown() {
        return $('#market_advancedsearch_appselect_activeapp');
    }

    gameName(name) {
        return $(`//span[text()="${name}"]`);
    }

    get heroFilter(){
        return $('(//div[@class="econ_tag_filter_category"]//select)[1]');
    }

    heroName(name) {
        return $(`//option[text()="${name}"]`)
    }

    rarityName(name) {
        return $(`//span[text()="${name}"]`)
    }

    get searchButton() {
        return $('//div[@class="btn_medium btn_green_white_innerfade"]');
    }

    get resultMessage() {
        return $('//h2[@class="market_search_results_title"]');
    }

    get resultTable() {
        return $('#searchResultsTable');
    }

    get firstResult() {
        return $('(//span[@class="market_listing_item_name"])[1]');
    }

    get itemTitle() {
        return $('//h1[@class="hover_item_name"]');
    }

    get heroNameTitle() {
        return $('(//div[@class="descriptor"])[1]');
    }

    get gameNameTitle() {
        return $('#largeiteminfo_game_name');
    }

    get priceTab() {
        return $('//div[contains(@class,"price market_sortable_column")]');
    }

    get priceValue() {
        return $$('//span[@class="normal_price"]');
    }

//methods
    async openAdvancedOptions() {
        await expect(this.showAdvancedOptions).toBeDisplayed();
        await this.showAdvancedOptions.click();
    }

    async selectGame(name) {
        await expect(this.communityMarketModalTitle).toHaveText('Search Community Market');
        await expect(this.searchButton).toBeDisplayed();
        await expect(this.gameDropdown).toBeDisplayed();
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

    async validateResults() {
        await expect(this.resultMessage).toHaveText('Showing results for:');
        await expect(this.resultTable).toBeDisplayed();
    }

    async selectFirstResult() {
        await this.firstResult.click();
    }

    async clickOnPriceTab() {
        await expect(this.priceTab).toBeDisplayed();
        await this.priceTab.click();
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
