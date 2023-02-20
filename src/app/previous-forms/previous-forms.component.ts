import { Component, OnInit} from '@angular/core';
import previousFormsData from '../previousForms.json'
import { ApicallService } from '../services/apicall.service';
interface previousForm {
  id :Number;
  name: String;
  email:String;
  gender: String;
}
@Component({
  selector: 'app-previous-forms',
  templateUrl: './previous-forms.component.html',
  styleUrls: ['./previous-forms.component.scss']
})
export class PreviousFormsComponent implements OnInit{
  responseList : any;
  constructor(private appService :ApicallService) {}
  
  // previousForms:previousForm[]=previousFormsData;

  ngOnInit(): void {
    this.responseList =this.appService.getResponse();
    // throw new Error('Method not implemented.');
  }
}

  

