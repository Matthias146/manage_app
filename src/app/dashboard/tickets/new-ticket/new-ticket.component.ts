import { ButtonComponent } from './../../../shared/button/button.component';
import { Component } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss',
})
export class NewTicketComponent {}
