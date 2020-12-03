import { Component, OnInit } from '@angular/core';

import { QformService } from '../shared/qform.service';

@Component({
  selector: 'qform',
  templateUrl: './qform.component.html',
  styleUrls: ['./qform.component.css']
})
export class QformComponent implements OnInit {
  minDate=new Date();
  list:any;
  questions:[];
  logo:string;
  company:string;
selectedValue:string;
i:string;
fullName:string;
appointmentTime:string;
name:string;
email:string;


  constructor(public service:QformService) { }
items:boolean=true;
  ngOnInit(): void {
    this.service.getDetails().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as {})
        } ;

      })
      this.questions=this.list[9].appointmentQuestionnaire;
      this.logo=this.list[9].StoreLogo;
      this.company=this.list[9].StoreName;
    });
  
  }

  test(){
    console.log(this.list[9].appointmentQuestionnaire);
  }
}
