import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-taxboard',
    templateUrl: './taxboard.component.html',
    styleUrls: ['./taxboard.component.css']
})
export class TaxboardComponent implements OnInit {

    private subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    tax: number = 16;
    result: number = 0;

    title: string = "Awesome tax calculator";
    subtitle: string = "Makes your life easier";

    ngOnInit(){

        this.subscription = this.route.params.subscribe((param: any) => {
            let id = param['id'];
            console.log(id);
        });

    }

    increase():any{
        this.tax++;
    }

    decrease():any{
        this.tax--;
    }

    onTotalChange(value):any {
        this.result = value;
    }

}
