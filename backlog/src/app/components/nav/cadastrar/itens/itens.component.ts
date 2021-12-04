import { ItensService } from './itens.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { structItens } from './shared/itens.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  itens!: structItens[];
  itensForm!: FormGroup;



  public objeto: string | undefined;


  constructor(private itensService: ItensService, private location: Location) { }


  ngOnInit(): void {
    this.itensForm = new FormGroup({
      'servico': new FormControl('', [Validators.required]),//Validators.required coloca campo como obrigatorio
      'quantidade': new FormControl('', [Validators.required]),
      'valor_unitario': new FormControl('', [Validators.required]),
      'valor_total': new FormControl('', [Validators.required]),


    })

      ;







  }
  onSubmit() {
    const vlrTotal = this.itensForm.controls['valor_unitario'].value * this.itensForm.controls['quantidade'].value;
    this.itensForm.patchValue({ valor_total: vlrTotal });
    const newRegister = this.itensForm.value;
    this.itensService.create(newRegister)
      .subscribe();
    window.location.reload()





  }







}
