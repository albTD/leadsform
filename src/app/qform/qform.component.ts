import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { QformService } from '../shared/qform.service';
import { NgForm } from '@angular/forms';
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
matDatepicker:string;
name:string;
email:string;
time:string;
dateselection:string;
branch:string;
date:string;
place:string;
mobno:string;
drop:any;
  constructor(public service:QformService,private firestore:AngularFirestore) { }
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

  onSubmit(form:NgForm){
    let data =Object.assign({},form.value);
console.log(data);
this.firestore.collection('leads').add(data);
  }

  abc(){
  
  console.log(this.drop);
}

}
