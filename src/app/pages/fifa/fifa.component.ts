import { Component, OnInit } from '@angular/core';
import { Player, TeamClassified } from 'src/core/models/ClassifiedCountries';

@Component({
  selector: 'app-fifa',
  templateUrl: './fifa.component.html',
  styleUrls: ['./fifa.component.scss']
})
export class FifaComponent implements OnInit{

  public team: TeamClassified = {} as TeamClassified;

  public players: Player[] = [] as  Player[];

  constructor() {

  }

  ngOnInit(): void {

    // Mexico Players
    this.players = [
      { // 1
        name: "Francisco Guillermo",
        lastname: "Ochoa Magaña",
        age: 37,
        height: 185,
        place_of_birth: "Guadalajara, México.",
        position: "Guardameta",
        current_club: "U. S. Salernitana",
        shirt_number: 13
      },
      { // 2
        name: "Hirving Rodrigo",
        lastname: "Lozano Bahena",
        age: 27,
        height: 174,
        place_of_birth: "Ciudad de México, México.",
        position: "Extremo",
        current_club: "S. S. C. Napoli de la Serie A de Italia",
        shirt_number: 22
      },
      { // 3
        name: "Santiago Tomás",
        lastname: "Giménez",
        age: 22,
        height: 182,
        place_of_birth: "Buenos Aires, Argentina.",
        position: "Delantero",
        current_club: "Feyenoord de Róterdam de la Eredivisie",
        shirt_number: 29
      },
      { // 4
        name: "Diego Lainez",
        lastname: "Leyva",
        age: 22,
        height: 169,
        place_of_birth: "Villahermosa, México.",
        position: "Extremo o centrocampista",
        current_club: " Tigres de la UANL de la Liga BBVA MX",
        shirt_number: 16
      },
      { // 5
        name: "Julián Vicente",
        lastname: "Araujo Zúñiga",
        age: 21,
        height: 178,
        place_of_birth: "Lompoc, California, Estados Unidos.",
        position: "Defensa",
        current_club: "Futbol Club Barcelona",
        shirt_number: 2
      },
      { // 6
        name: "Kevin Nahin",
        lastname: "Álvarez Campos",
        age: 24,
        height: 185,
        place_of_birth: "Colima, México.",
        position: "Lateral derecho",
        current_club: "Club de Fútbol Pachuca.",
        shirt_number: 10
      },
      { // 7
        name: "José Andrés",
        lastname: "Guardado Hernández",
        age: 36,
        height: 169,
        place_of_birth: "Guadalajara, México.",
        position: "Lateral Izquierdo o Centro campista.",
        current_club: " Real Betis Balompié",
        shirt_number: 18
      },
      { // 8
        name: "Alexis",
        lastname: "Vega Rojas",
        age: 25,
        height: 173,
        place_of_birth: "Ciudad de México, México.",
        position: "Delantero",
        current_club: " Club Deportivo Guadalajara",
        shirt_number: 11
      },
      { // 9
        name: "Edson Omar",
        lastname: "Álvarez Velázquez",
        age: 25,
        height: 187,
        place_of_birth: "Tlalnepantla de Baz, México.",
        position: "Defensa o centrocampista",
        current_club: "Ajax de Ámsterdam",
        shirt_number: 4
      },
      { // 10
        name: "Jorge Eduardo",
        lastname: "Sánchez Ramos",
        age: 25,
        height: 175,
        place_of_birth: "Torreón, México.",
        position: "Defensa",
        current_club: "Ajax de Ámsterdam",
        shirt_number: 6
      },
      { // 11
        name: "Jesús Daniel",
        lastname: "Gallardo Vasconcelos",
        age: 28,
        height: 176,
        place_of_birth: "Heróica Cardenas, México.",
        position: "Lateral Izquierdo",
        current_club: "Club de Fútbol Monterrey",
        shirt_number: 23
      },
    ];

    // Mexico Team
    this.team = {
      name: "México",
      country_name: "México",
      alternative_names: ["Republica de México"], // (string array),
      colors: ["#d72228","#ffffff","#0e694b"], // (string array), 
      won_titles: [ // resource -> https://www.aiscore.com/es/team-mexico/0ndkz6ipjoueq3z/trophies
        {
          "name": "Gold cup Winner",
          "year": 2019,
        },
        {
          "name": "Gold cup Winner",
          "year": 2015,
        }
      ], // (objects array), 
      captain_name: "Andrés Guardado", 
      coach_name: "Gerardo Martino's",
      logo_url: "https://img0.aiscore.com/football/team/3653cce234494bfbd33e077f4a028f66.png!w100", 
      abbreviation: "MEX",
      top_scorer: { // https://www.google.com/search?q=mexico+team+2022&rlz=1C1CHBF_esCO884CO884&oq=mexico+team+2022&aqs=chrome.0.0i19i512l10.7591j1j7&sourceid=chrome&ie=UTF-8#sie=t;/m/03dj48;2;/m/030q7;st;fp;1;;;
        "name": "Luis Chávez",
        "number_of_goals": 1,
      }, // (object <name & number of goals>)
      stadium: { // https://www.google.com/search?q=mexico+team+2022&rlz=1C1CHBF_esCO884CO884&oq=mexico+team+2022&aqs=chrome.0.0i19i512l10.7591j1j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnytv3l;2;/m/030q7;dt;fp;1;;;
        name: "Lusail",
        nickname: "Lusail",
        location: "Arabia Saudita",
        capacity: 88966
      },
      players: this.players
    }

    console.log(this.team);
  }


}
