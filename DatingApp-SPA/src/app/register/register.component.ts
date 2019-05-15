import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output()
  cancelRegisterMode = new EventEmitter();

  constructor(private authService: AuthService) { }
    model: any = {};

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration was successful');
    }, error => {
      console.log(error);
    });
    console.log(this.model);
  }

  cancel() {
    this.cancelRegisterMode.emit(false);
    console.log('cancelled');
  }

}
