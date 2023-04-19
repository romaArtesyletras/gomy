import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/core/models/animal';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  title: string = "Romario";
  
  contador: number = 0;

  estudiantes: string[] = [
    "Romario","Daniela","Alejandro","Natalia","Luisa","Karen","Walter"
  ];

  animales: Animal[] = [
    {
      nombre: "Perro",
      imagen: "https://cdn.onemars.net/sites/nutro_es_NkyIN_B9cV/image/200_1615974073876.jpeg",
      peso_promedio: 45,
      numero_patas: 4,
      color_predominante: "Café",
      alimentacion: "Purina",
      habitat: "Hogar",
      volador: false
    },
    {
      nombre: "Vaca",
      imagen: "https://a.storyblok.com/f/160385/cceb14b5ce/record-precio-vaca-peluda.jpg",
      peso_promedio: 800,
      numero_patas: 4,
      color_predominante: "Beige",
      alimentacion: "Pasto",
      habitat: "Montes Australianos",
      volador: false
    },
    {
      nombre: "Lemur",
      imagen: "https://live.staticflickr.com/8185/29609859805_dbc60619d4_b.jpg",
      peso_promedio: 20,
      numero_patas: 2,
      color_predominante: "Blanco y gris",
      alimentacion: "Frutos, hojas, flores, hierbas, corteza y resina, pero que también es capaz de capturar y comer insectos, huevos y pequeños vertebrados.",
      habitat: "Cañones rocosos, bosques espinosos y matorrales secos",
      volador: false
    },
    {
      nombre: "Pez volador",
      imagen: "https://www.aquariumcostadealmeria.com/wp-content/uploads/2018/05/shutterstock_349221071.jpg",
      peso_promedio: 0.5,
      numero_patas: 0,
      color_predominante: "Azul",
      alimentacion: "Consiste en plancton",
      habitat: "Aguas de poca profunfidad y alejadas de las costas.",
      volador: true
    },
    {
      nombre: "Pez Beta",
      imagen: "https://mascotafiel.com/wp-content/uploads/2017/01/pez-betta-3_opt.jpg",
      peso_promedio: 0.010,
      numero_patas: 0,
      color_predominante: "Azul",
      alimentacion: "Insectos, gusanos, mosquitos y larvas y huevos de insectos que se posan en la superficie del agua",
      habitat: "Asia en aguas poco profundas, estanques o corrientes lentas.",
      volador: false
    },
    {
      nombre: "Casuario",
      imagen: "https://cnnespanol.cnn.com/wp-content/uploads/2019/04/casuario-ave-asesina-imagen-completa-garras.jpg?quality=100&strip=info",
      peso_promedio: 44,
      numero_patas: 2,
      color_predominante: "Negro",
      alimentacion: "Frutas caídas, algunos hongos y pequeños animales.",
      habitat: "Selvas tropicales de Australia y Nueva Guinea",
      volador: false
    },
    {
      nombre: "Dragón azul (Glaucus Atlanticus)",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Blue_dragon-glaucus_atlanticus_%288599051974%29.jpg/640px-Blue_dragon-glaucus_atlanticus_%288599051974%29.jpg",
      peso_promedio: 0.0010,
      numero_patas: 0,
      color_predominante: "Azul plateado",
      alimentacion: "Medusas como la carabela portuguesa",
      habitat: " Océano Atlántico, aunque se han encontrado ejemplares en todos los océanos.",
      volador: false
    },
    {
      nombre: "Pulpo",
      imagen: "https://kitchenacademy.es/wp-content/uploads/pulpo.jpg",
      peso_promedio: 50,
      numero_patas: 8,
      color_predominante: "Marrón",
      alimentacion: "peces, crustáceos pequeños e incluso de algas.",
      habitat: "Son especies de agua salada por lo que los océanos son los lugares donde dichos moluscos desarrollan su ciclo vital.",
      volador: false
    }
  ]

  constructor(){}

  ngOnInit(): void {
    
  }

  increase() {
    if(this.contador >= 0) this.contador++;
  }

  decrease() {
    if(this.contador > 0) this.contador--;
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

  ifEven(num: number):boolean {
    if(num % 2 == 0) return true;
    return false
  }

  checkSomeStuff(num: number, theNumber: number):boolean {
    if(num % 2 !== 0 && num == theNumber) return true;
    return false
  }

  celciusToFarenheit(celsius: number) {
    return (celsius * 1.8) + 32
  }
}
