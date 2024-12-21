import { Component, OnInit } from '@angular/core';
import { faCloudArrowUp, faTrashCan, faUser } from '@fortawesome/free-solid-svg-icons';
import { DataFormInterface } from './interface/dataForm.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;
  uploadedFileName: string | null = null;
  faUser = faUser;
  faCloudArrowUp = faCloudArrowUp;
  faTrashCan = faTrashCan;
  currentUrl: string = '/';
  parsedData: DataFormInterface = {
    cumpleanios: '',
    documento: '',
    nombre: '',
    pasatiempo: '',
    step: 0,
    anios: 0
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.currentUrl = url.join('/');
    });

    console.log("d", this.currentUrl);
    

    if (sessionStorage.getItem('profileImg')) {
      this.imageUrl = sessionStorage.getItem('profileImg');
      this.uploadedFileName = sessionStorage.getItem('nameImg');
    }

    const storedData = sessionStorage.getItem('data');
    this.parsedData = storedData ? JSON.parse(storedData) : {step: 0};
  }

  onImageSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    this.uploadedFileName = file.name;
    sessionStorage.setItem('nameImg', this.uploadedFileName);
    const reader = new FileReader();

    reader.onload = () => {
      this.imageUrl = reader.result;
      sessionStorage.setItem('profileImg', this.imageUrl!.toString())
    };

    reader.readAsDataURL(file);
  }
}

  removeImage(): void {
    this.imageUrl = null;
    this.uploadedFileName = '';
    sessionStorage.removeItem('profileImg');
    sessionStorage.removeItem('nameImg');
  }
}
