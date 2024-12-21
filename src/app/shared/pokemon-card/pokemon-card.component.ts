import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() id!: string;
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() isSelected: boolean = false;
  @Input() isDisabled: boolean = false;

  ngOnInit(): void {}

  toggleSelection() {
    if (this.isDisabled) {
      return;
    }

    this.isSelected = !this.isSelected;
  }
}
