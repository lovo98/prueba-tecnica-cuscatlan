import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFormInterface } from 'src/app/shared/photo-card/interface/dataForm.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  subtittle: string = '';
  tittle: string = 'Mis Pokémon';
  parsedData: DataFormInterface = {
    cumpleanios: '',
    documento: '',
    nombre: '',
    pasatiempo: '',
    step: 0,
    anios: 0
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedData = sessionStorage.getItem('data');
    this.parsedData = storedData ? JSON.parse(storedData) : {step: 0};
  }

  redirectTo(url: string) {
    this.router.navigate([url]);
  }

}
