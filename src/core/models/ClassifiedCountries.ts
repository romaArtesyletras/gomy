interface TopScore {
    name: string;
    number_of_goals: number;
}

interface Stadium {
    name: string;
    nickname: string;
    location: string;
    capacity: number;
}

interface WonTitle {
    name: string;
    year: number;
}

export interface Player {
    name: string;
    lastname: string;
    age: number;
    height: number;
    place_of_birth: string;
    position: string;
    current_club: string;
    shirt_number: number;
}

export interface TeamClassified {
    name: string;
    country_name: string;
    alternative_names: string[]; // (string array),
    colors: string[]; // (string array), 
    won_titles: WonTitle[]; // (objects array), 
    captain_name: string; 
    coach_name: string;
    logo_url: string; 
    abbreviation: string;
    top_scorer: TopScore; // (object <name & number of goals>)
    stadium: Stadium;
    players: Player[];
}
