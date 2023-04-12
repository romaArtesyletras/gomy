import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title: string = "Romario";
  contador: number = 0;

  constructor(){}

  ngOnInit(): void {
    
  }

  increase() {
    this.contador++;
  }

  decrease() {
    if(this.contador >= 0) this.contador--;
  }

  multiply(num: number) {
    if(this.contador >= 0) this.contador = this.contador * num;
  }

  divide(num: number) {
    if(this.contador > 0) this.contador = this.contador / num;
  }

  reset() {
    this.contador = 0;
  }
}
