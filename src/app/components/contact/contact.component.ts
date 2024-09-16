import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  }

  constructor(private http: HttpClient){}

  onSubmit(){
    if (this.contact.name && this.contact.email && this.contact.message) {
      this.http.post('https://tuservidor.com/api/send-email', this.contact)
      .subscribe(
        response => {
          alert('Mensaje enviado correctamente');
          this.resetForm();
        },
        error => {
          alert('Error, Intente Nuevamente!');
        }        
      );      
    } else {
      alert('Por favor complete todos los campos.')
    }
  }

  resetForm() {
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}
