export interface Option {
    id: number;
    label: string;
    value: number;
  }
  
export interface Question {
    id: number;
    question: string;
    options: Option[];
}

export const questions = [
    {
      "id": 1,
      "question": "¿Qué tan importante es la apariencia física para ti?",
      "options": [
        { "id": 1, "label": "Muy importante", "value": 0 },
        { "id": 2, "label": "Importante", "value": 1 },
        { "id": 3, "label": "Nada importante", "value": 2 }
      ]
    },
    {
        
      "id": 2,
      "question": "¿Te incomoda interactuar con personas de diferentes creencias?",
      "options": [
        { "id": 1, "label": "Sí, mucho", "value": 0 },
        { "id": 2, "label": "Un poco", "value": 1 },
        { "id": 3, "label": "Para nada", "value": 2 }
      ]
    },
    {
      "id": 3,
      "question": "¿Cuán cómodo/a te sientes con personas de diferentes estilos de vida?",
      "options": [
        { "id": 1, "label": "Muy cómodo", "value": 2 },
        { "id": 2, "label": "Un poco cómodo", "value": 1 },
        { "id": 3, "label": "Incómodo", "value": 0 }
      ]
    },
    {
      "id": 4,
      "question": "Te resulta díficil entender con personas con diferentes puntos de vista o experiencias?",
      "options": [
        { "id": 1, "label": "Muy difícil", "value": 0 },
        { "id": 2, "label": "Un poco difícil", "value": 1 },
        { "id": 3, "label": "Nada difícil", "value": 2 }
      ]
    },
    {
      "id": 5,
      "question": "¿Piensas que es estilo de vestir de una persona es un reflejo de su personalidad?",
      "options": [
        { "id": 1, "label": "De acuerdo", "value": 0 },
        { "id": 2, "label": "En desacuerdo", "value": 2 }
      ]
    },
    {
      "id": 6,
      "question": "¿Crees que las personas deben cambiar para adaptarse a las demás?",
      "options": [
        { "id": 1, "label": "De acuerdo", "value": 0 },
        { "id": 2, "label": "En desacuerdo", "value": 2 }
      ]
    }
  ]