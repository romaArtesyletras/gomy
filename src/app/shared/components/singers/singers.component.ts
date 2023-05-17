import { Component, OnInit } from '@angular/core';
import { Singer } from 'src/core/models/Singer';

@Component({
  selector: 'singers',
  templateUrl: './singers.component.html',
  styleUrls: ['./singers.component.scss']
})
export class SingersComponent implements OnInit {

  name!: string;
  age!: string;
  alive!: boolean;

  cantantes!: Singer[];

  constructor() {

  }

  ngOnInit(): void {
    this.cantantes = [
      {
        name: "Tom Delongue",
        age: 29,
        isAlive: true
      },
      {
        name: "Apache",
        age: 40,
        isAlive: true
      },
      {
        name: "Canserbero",
        age: 26,
        isAlive: false
      },
      {
        name: "El Kanka",
        age: 40,
        isAlive: true
      },
      {
        name: "Juanes",
        age: 50,
        isAlive: true
      },
      { // Blacktide band
        name: "Gabriel García",
        age: 30,
        isAlive: true
      },
      {
        name: "James Hetfield",
        age: 59,
        isAlive: true
      },
      {
        name: "Jhonatan Davis",
        age: 52,
        isAlive: true
      },
      {
        name: "Fred Durst",
        age: 52,
        isAlive: true
      },
      {
        name: "Serj Tankian",
        age: 55,
        isAlive: true
      },
    ]
    
    console.log(this.cantantes.length)
    console.log(this.cantantes[0].name)
    console.log(this.cantantes[0].name.length)
    console.log(this.cantantes[0].name.charAt(1))
    console.log(this.cantantes[0].name.substring(1, 6))
    console.log(this.cantantes[0].name.replace("Tom", "Mercurio"))
    console.log(this.cantantes[0].name.toUpperCase())
    console.log(this.cantantes[0].name.concat(" Sanchez"))
    console.log(this.cantantes[0].name.indexOf("Delongue")) // The position that he founds that word
    console.log(this.cantantes[0].name.includes("Delongue"))

    // Show a table info
    console.table(this.cantantes[0])

    // Pop Delete last element
    console.log(this.cantantes.pop())
    console.table(this.cantantes)

    // Shift delete the first item
    console.log(this.cantantes.shift())
    console.table(this.cantantes)

    // first parameter start position to delete
    // Second parameter the quantity of items to delete
    console.log(this.cantantes.splice(2,1))
    console.table(this.cantantes)

    let newSinger: Singer = {
      name: "Jared Watson",
      age: 41,
      isAlive: true
    }

    this.cantantes.push(newSinger)
    console.table(this.cantantes)

    let nombres = this.cantantes.map(s => s.name.toUpperCase())
    console.table(nombres.sort());
    console.table(nombres.reverse());

    let raizCuadrada = this.cantantes.map(a => Math.sqrt(a.age))
    console.table(raizCuadrada.sort());

    let potencias = this.cantantes.map(a => Math.pow(a.age, 2))
    console.table(potencias.sort());
  }

  
}
