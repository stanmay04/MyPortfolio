import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  name: string ="";
  email: string ="";
  message: string ="";
  phone: string="";

  constructor(private http: HttpClient )
  {
   
  }


  register()
  {
  
    let bodyData = {
      "name" : this.name,
      "email" : this.email,
      "phone" : this.phone,
      "message" : this.message

    };
    this.http.post("http://localhost:8086/user/create",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registered Successfully");
      
 
        this.name = '';
      this.email = '';
      this.message = '';
        this.phone  = '';
    });
  }

}
