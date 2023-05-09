import { Component, OnInit } from '@angular/core';
import { Question } from 'src/core/models/Questions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  questionsForm!: Question[];

  constructor(){}

  ngOnInit(): void {
    this.questionsForm = [
      {
        id: uuidv4(),
        title: "¿Cual es el reto más grande que has experimentado al hacer ejercicio?",
        description: "Selecciona la opción con que más te identifiques. Nosotros te ayudaremos a quitar esa barrea.",
        completed: false,
        options: [
          {
            id: uuidv4(),
            name: "Empezar",
            description: "Empezar se le dificulta."
          },
          {
            id: uuidv4(),
            name: "Inseguridad",
            description: "Inseguridad de como empezar."
          },
          {
            id: uuidv4(),
            name: "Sin tiempo",
            description: "Handa muy ocupado."
          },
          {
            id: uuidv4(),
            name: "No le gusta",
            description: "Simplemente no le gusta el ejercicio."
          },
          {
            id: uuidv4(),
            name: "Seguir",
            description: "Mantenerse constante."
          },
          {
            id: uuidv4(),
            name: "Impedimento",
            description: "Alguna lesión corporal o algo de nacimiento le impide realizar ciertos movimientos."
          },
          {
            id: uuidv4(),
            name: "Aburrimiento",
            description: "Todo le parece aburrido."
          },
          {
            id: uuidv4(),
            name: "Sin energía",
            description: "Mantiene bajo de ánimo y sin energía."
          },
        ]
      }
    ];
  }

}
