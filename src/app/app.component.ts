import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'webapp';


 customKeys:any = {
    bankAmount: 'Bank Amount',
    cashAmount: 'Cash Amount',
    expenses: 'Expenses',
    grnAmt: 'GRN Amount',
    grnQty: 'GRN Quantity',
    netProfit: 'Net Profit',
    petty: 'Petty Cash',
    salaries: 'Salaries',
    saleAmt: 'Sale Amount',
    saleQty: 'Sale Quantity'
  };
constructor(private service:SharedService) {
  
}
data:any;
ngOnInit(){
  this.service.getAnalaysis().subscribe(res=>{
    
    this.data = (res);
    res.forEach((e:any) => {
      
      Object.keys(e).map((el:any)=>
      
       this.customKeys[el.key] ,  // Use custom label or default to the original key
        //value: e[el.value]
      
      )
    });
  })
}
}
