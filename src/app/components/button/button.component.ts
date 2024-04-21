import { Component, EventEmitter, Input, Output } from '@angular/core';
import { loginGuard } from 'src/app/guards/login.guard';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() color!: string;
  @Input() text!: string;
  @Output() btnClick = new EventEmitter()

  constructor(private loginService: LoginService) {}

  onClick() {
    this.btnClick.emit();
    this.loginService.login('test', 'test1');
  }
}
