import { Label, Table } from '../../framework/elements/index.js'
import BasePage from '../../framework/page/BasePage.js'
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js'

class DataTablesPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Data Tables')), 'Data Tables Page');

        this.firstExampleTable = new Table('//*[@id="table1"]', 'First Table Example');
    }

    async getColumnValues() {
        const table = await this.firstExampleTable.parseTableContent();
        return table.map(elem => elem.Due);
    }
}

export default new DataTablesPage();