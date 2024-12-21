import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  tittle: string = '¡Hola! Configuremos tu perfil';
  subtittle: string = 'Queremos conocerte mejor.';
  tittleForm: string = 'Tu información';
  subtittleForm: string = 'Completa la siguiente información para completar tu perfil';
  register: FormGroup;
  isMayor: boolean = true;
  loading: boolean = false;
  actualAge: number = 0;

  constructor(private fb: FormBuilder, private router: Router) {
    this.register = this.fb.group({
      nombre: this.fb.control('', [Validators.required]),
      pasatiempo: this.fb.control(''),
      cumpleanios: this.fb.control('', [Validators.required]),
      documento: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    const storedData = sessionStorage.getItem('data');
    if (storedData) {
      const profileData = JSON.parse(storedData);
      this.register.patchValue({
        nombre: profileData.nombre,
        pasatiempo: profileData.pasatiempo,
        cumpleanios: profileData.cumpleanios,
        documento: profileData.documento
      });
    }
  }

  validateDate(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      const dateValue = input.value;
      this.register.get('documento')?.setValue('');
      const selectedDate = new Date(dateValue);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - selectedDate.getFullYear();
      const isBirthdayPassed =
        currentDate.getMonth() > selectedDate.getMonth() ||
        (currentDate.getMonth() === selectedDate.getMonth() && currentDate.getDate() >= selectedDate.getDate());
      this.actualAge = isBirthdayPassed ? age : age - 1;

      this.isMayor = this.actualAge >= 18;
    }
  }

  sendData() {
    const updatedValue = { ...this.register.value, step: 1, anios: this.actualAge };
    sessionStorage.setItem('data', JSON.stringify(updatedValue));
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/pokemon-selected']);
    }, 1200);
  }
}
