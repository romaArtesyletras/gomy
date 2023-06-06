import { Component, OnInit } from '@angular/core'
import { Question } from 'src/app/core/models/Questions'
import { StorageService } from 'src/app/core/services/storage.service'
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  questionsForm!: Question[]

  step: number = 1

  percentageAdvance: number = 0

  infoSendIt!: boolean

  questionsAnswered: any[] = []

  constructor(
    private storageService: StorageService
  ){}

  ngOnInit(): void {
    let questionsFormSaved = this.storageService.getData("questionsSaved")
    let stepSaved = this.storageService.getData("stepSaved")

    if(questionsFormSaved) {
      // console.log("here > ", questionsFormSaved)
      // console.log("step > ", stepSaved)
      this.questionsForm = questionsFormSaved
      this.step = parseInt(stepSaved)
    } else {
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
              description: "Empezar se le dificulta.",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Inseguridad",
              description: "Inseguridad de como empezar.",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Sin tiempo",
              description: "Handa muy ocupado.",
              selected: false
            },
            {
              id: uuidv4(),
              name: "No le gusta",
              description: "Simplemente no le gusta el ejercicio.",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Seguir",
              description: "Mantenerse constante.",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Impedimento",
              description: "Alguna lesión corporal o algo de nacimiento le impide realizar ciertos movimientos.",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Aburrimiento",
              description: "Todo le parece aburrido.",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Sin energía",
              description: "Mantiene bajo de ánimo y sin energía.",
              selected: false
            },
          ]
        },
        // Second
        {
          id: uuidv4(),
          title: "Especialidad del entrenador",
          description: "Selecciona lo importante para tí.",
          completed: false,
          options: [
            {
              id: uuidv4(),
              name: "Manejo de peso",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Movilidad y flexibilidad",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Reducir fatiga",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Calidad de vida",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Entrenamiento de fuerza",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Mejorar en deportes",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Salud general",
              selected: false
            },
            {
              id: uuidv4(),
              name: "Ninguna",
              selected: false
            },
          ]
        },
      ]
    }
    
    this.getPercentage()
  }

  continue() {
    this.questionsForm[this.step-1].completed = true
    this.step += 1
    this.getPercentage()
  }

  getPercentage() {
    var countCompleted = 0
    this.questionsForm.map(q => { 
      if(q.completed) countCompleted++
    })
    // console.log(countCompleted)
    
    this.percentageAdvance = 100 * (countCompleted / this.questionsForm.length)
    // console.log("this.percentageAdvance > ", this.percentageAdvance)

    if(this.percentageAdvance == 100) {
      this.infoSendIt = true
      this.getOptionsSelected()
    }

    let actualQuestionsForm = this.questionsForm

    this.storageService.saveData("questionsSaved", actualQuestionsForm)
    this.storageService.saveStr("stepSaved", this.step.toString())
    
  }

  getAdvantage() {
    if(this.step == 1) return 20
    else if (this.step == this.questionsForm.length) return 80
    else return this.percentageAdvance
  }

  selectOption(fatherIndex: number, childIndex: number) {
    let valueSelected = this.questionsForm[fatherIndex].options[childIndex].selected
    this.questionsForm[fatherIndex].options[childIndex].selected = !valueSelected
  }

  async getOptionsSelected() {

    await this.questionsForm.map((pf: Question) => {
      var answers:any[] = []
      var answer:any = {
        id: null,
        options: []
      }

      if(pf.completed) {
        let parentId = pf.id
        answer.id = parentId
        for (let e = 0; e < pf.options.length; e++) {
          if(pf.options[e]['selected']){
            answer.options.push(pf.options[e])
          }
        }
        answers.push(answer)
        this.questionsAnswered.push(answers) 
      }
    })
    console.log("this.questionsAnswered > ",this.questionsAnswered)

  }

}
