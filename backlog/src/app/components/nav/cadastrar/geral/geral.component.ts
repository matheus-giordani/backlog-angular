import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
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
  cont: number = 50;
  public objeto: string | undefined;

  constructor(private geralService: GeralService) { }

  ngOnInit(): void {
    this.geralForm = new FormGroup({
      'numero': new FormControl('', [Validators.required]),//Validators.required coloca campo como obrigatorio
      'prestador': new FormControl('', [Validators.required]),
      'valor': new FormControl('', [Validators.required]),
      'inicio_vigencia': new FormControl('', [Validators.required]),
      'termino_vigencia': new FormControl('', [Validators.required]),
      'descricao': new FormControl('', [Validators.required, Validators.minLength(this.cont)])



    })

  }
  onSubmit() {
    const newRegister = this.geralForm.value;

    this.geralService.create(newRegister).subscribe();






  }

}
