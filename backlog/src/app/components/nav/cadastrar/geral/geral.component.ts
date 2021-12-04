import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GeralService } from './geral.service';
import { structGeral } from './shared/geral.model'

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.scss']
})

export class GeralComponent implements OnInit {

  geral!: structGeral[];
  geralForm!: FormGroup;

  public objeto: string | undefined;

  constructor(private geralService: GeralService,
    private location: Location) { }
  private geralUrl = 'http://localhost:3000/contrato'


  ngOnInit(): void {




    this.geralForm = new FormGroup({
      'numero': new FormControl('', [Validators.required]),//Validators.required coloca campo como obrigatorio
      'prestador': new FormControl('', [Validators.required]),
      'valor': new FormControl('', [Validators.required]),
      'inicio_vigencia': new FormControl('', [Validators.required]),
      'termino_vigencia': new FormControl('', [Validators.required]),
      'descricao': new FormControl('', [Validators.required, Validators.minLength(50)])



    })

  }




  onSubmit() {


    const newRegister = this.geralForm.value;
    this.geralService.create(newRegister)
      .subscribe();






  }




}
