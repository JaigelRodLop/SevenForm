import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { questions } from '../../model/question';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [ RouterLink, RouterModule, CommonModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions = questions;
  pesos: number[] = [];

  registrarPeso(peso: number, event: Event) {
    const target = event.target as HTMLInputElement; // Aserción de tipo
    if (target.checked) {
      // Si el botón está activado, añadir el peso a la lista
      this.pesos.push(peso);
    } else {
      // Si el botón se desactiva, eliminar el peso de la lista
      const index = this.pesos.indexOf(peso);
      if (index > -1) {
        this.pesos.splice(index, 1);
      }
    }
  }

  calcularSumaPesos(): number {
    return this.pesos.reduce((total, peso) => total + peso, 0);
  }
  
  reiniciar() {
    this.pesos = []; // Vaciar la lista de pesos
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
      (radio as HTMLInputElement).checked = false; // Desactivar todos los botones de radio
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
