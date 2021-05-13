import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HijosComponent } from '../Hijos/hijos.component';
@Component({
    selector: 'app-padre',
    templateUrl: './padre.component.html',
    styleUrls: ['./padre.component.css']
})

export class PadreComponent implements OnInit{
    padre: any
    genero: string;

    hijo: boolean = false
    hija: boolean = false

    generos: any[] = [
        {value: 'h', viewValue: 'Hombre'},
        {value: 'm', viewValue: 'Mujer'},
      ];

    padreForm = new FormGroup({
        nombre: new FormControl(''),
        apellido: new FormControl(''),
        dni: new FormControl(''),
        edad: new FormControl(''),
    });

    constructor() {}

    ngOnInit(): void {
        this.initPadreForm();
    }
    
    initPadreForm(){  
    }

    // setHijo(){
    //     this.padre = this.padreForm.value;
    // }

    setGenero(value){
        debugger
        if(value.value == 'h'){
            this.hijo = true;
            this.hija = false;
        }else{
            this.hija = true;
            this.hijo = false;
        }
    }

}