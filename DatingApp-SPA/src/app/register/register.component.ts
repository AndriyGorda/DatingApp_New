import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output()
  cancelRegisterMode = new EventEmitter();

  constructor(private authService: AuthService, private alertify: AlertifyService) { }
    model: any = {};

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('registration was successful');
    }, error => {
      this.alertify.error(error);
    });
    console.log(this.model);
  }

  cancel() {
    this.cancelRegisterMode.emit(false);
  }

}
