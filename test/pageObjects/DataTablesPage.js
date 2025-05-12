import { Table } from '../../framework/elements/index.js'
import BasePage from '../../framework/page/BasePage.js'

class DataTablesPage extends BasePage {
    constructor() {
        //Change call of super() constructor to approriate one
        super();

        this.firstExampleTable = new Table('//*[@id="table1"]', 'First Table Example');
    }

    async getColumnValues() {
        const table = await this.firstExampleTable.parseTableContent();
        //Return array of Due values
    }
}

export default new DataTablesPage();