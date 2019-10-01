import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class SettingsService {


    public api: any;


    constructor() {

       
        // Api Settings
        // -----------------------------------
        this.api = {
            urlHomo: 'http://localhost:51435/api'
            
        };
       
    }

  
    setApiSetting(name, value) {
        if (typeof this.api[name] !== 'undefined') {
            return this.api[name] = value;
        }
    }
    
    getApi() {
        return this.api;
    }

    getApiSetting(name) {
        return name ? this.api[name] : this.api;
    }

}
