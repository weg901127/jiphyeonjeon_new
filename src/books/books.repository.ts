import {DataSource, Repository} from "typeorm";
import {BookInfo} from "./entity/bookInfo.entity";
import {Data} from '../data-source'

class BooksRepository extends Repository<BookInfo> {
    constructor() {
        super(BookInfo, Data.createEntityManager(), Data.createQueryRunner());
    }
}

module.exports = new BooksRepository();