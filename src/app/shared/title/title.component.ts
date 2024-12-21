import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() tittle!: string;
  @Input() subtittle!: string;
  @Input() isMain!: boolean;
}
