import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { PadreComponent } from '../componente-padre/padre.component';
@Component({
  selector: 'app-hija',
  templateUrl: './hija.component.html',
  styleUrls: ['./hija.component.css']
})
export class HijaComponent {

  hijo: any
      hijoForm = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      edad: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {
      this.initHijoForm();
  }
  
  initHijoForm(){  
  }

  onChange(value: any) {
      console.log(value.value);
  } 

  // setHijo(value){
  //     if(value == 1){
  //         this.hijoForm.patchValue({
  //             edad: 'Mayor de edad'
  //         });
  //     }else{
  //         this.hijoForm.patchValue({
  //             edad: 'Menor de edad'
  //         });
  //     }
  // }
      
  
}
