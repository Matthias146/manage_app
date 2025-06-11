import { ButtonComponent } from './../../../shared/button/button.component';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string; text: string }>();
  enteredTitle = '';
  enteredText = '';

  ngOnInit() {
    console.log('ON INIT');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }
  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form().nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
