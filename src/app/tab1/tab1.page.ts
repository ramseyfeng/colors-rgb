import {Component} from '@angular/core';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    redVal = 0;
    greenVal = 0;
    blueVal = 0;

    constructor() {
    }

    calculate(): any {
        return {
            'background-color': `rgb(${this.redVal}, ${this.greenVal}, ${this.blueVal})`
        };
    }
}
