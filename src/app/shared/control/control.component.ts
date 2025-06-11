import {
  afterEveryRender,
  afterNextRender,
  Component,
  contentChild,
  ElementRef,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onclick()',
  },
})
export class ControlComponent {
  constructor() {
    afterNextRender(() => {
      console.log('AFTER RENDER');
    });
    afterEveryRender(() => {
      console.log('AFTER EVERY RENDER');
    });
  }
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );
  label = input.required<string>();

  onclick() {
    console.log(this.control());
  }
}
