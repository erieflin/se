import { Component } from '@angular/core';

@Component({
  template: `
  <div>
    <div>
      <label form="index">index</label>
      <input type="text" id="index">
    </div>

    <div>
      <label form="index">index</label>
      <input type="text" id="index">
    </div>

    <button>Create</button>
    </div>
    `,
    styles: [`
      label: {
        display: inline-block;
        width: 140px;
      }

      input {
        width: 250px;
      }
    `]

})

export class UIComponent {

}
