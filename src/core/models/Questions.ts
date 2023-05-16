interface OptionsQuestion {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  selected?: boolean;
}

export interface Question {
  id: string;
  title: string;
  description: string;
  options: OptionsQuestion[];
  completed: boolean;
}