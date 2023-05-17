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
  step: number = 1;
  percentageAdvance: number = 0;

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
      },
      {
        id: uuidv4(),
        title: "Especialidad del entrenador",
        description: "Selecciona lo importante para tí.",
        completed: false,
        options: [
          {
            id: uuidv4(),
            name: "Manejo de peso"
          },
          {
            id: uuidv4(),
            name: "Movilidad y flexibilidad"
          },
          {
            id: uuidv4(),
            name: "Reducir fatiga"
          },
          {
            id: uuidv4(),
            name: "Calidad de vida"
          },
          {
            id: uuidv4(),
            name: "Entrenamiento de fuerza"
          },
          {
            id: uuidv4(),
            name: "Mejorar en deportes"
          },
          {
            id: uuidv4(),
            name: "Salud general"
          },
          {
            id: uuidv4(),
            name: "Ninguna"
          },
        ]
      },
    ];

    this.getPercentage()
  }

  continue() {
    this.questionsForm[this.step-1].completed = true;
    this.step += 1;
    this.getPercentage()
  }

  getPercentage() {
    var countCompleted = 0;
    this.questionsForm.map(q => { 
      if(q.completed) countCompleted++;
    });
    console.log(countCompleted);
    
    this.percentageAdvance = 100 * (countCompleted / this.questionsForm.length)
    console.log(this.percentageAdvance);
    
  }

  getAdvantage() {
    if(this.step == 1) return 20
    else if (this.step == this.questionsForm.length) return 80;
    else return this.percentageAdvance
  }

  selectOption(fatherIndex: number, childIndex: number) {
    let valueSelected = this.questionsForm[fatherIndex].options[childIndex].selected
    this.questionsForm[fatherIndex].options[childIndex].selected = !valueSelected;
  }

}
