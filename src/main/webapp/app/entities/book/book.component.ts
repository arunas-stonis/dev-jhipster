import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { StateService } from 'ui-router-ng2';
import { Book } from './book.model';
import { BookService } from './book.service';
import { EventManager, AlertService, ITEMS_PER_PAGE, ParseLinks, Principal, PaginationUtil } from '../../shared';
import { PaginationConfig } from "../../blocks/config/uib-pagination.config";

@Component({
    selector: 'book-mgmt',
    templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
        books: Book[];
    currentAccount: any;
    searchQuery: any;

    constructor(
        private bookService: BookService,
        private alertService: AlertService,
        private eventManager: EventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.bookService.query().subscribe(
            (res: Response) => {
                this.books = res.json();
                this.searchQuery = null;
            },
            (res: Response) => this.onError(res.json())
        );
    }
    
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInBooks();
    }

    trackId (index, item: Book) {
        return item.id;
    }

    registerChangeInBooks() {
        this.eventManager.subscribe('bookListModification', (response) => this.loadAll());
    }
    

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }

}
