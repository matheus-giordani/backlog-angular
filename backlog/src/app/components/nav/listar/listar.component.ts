import { GeralService } from './../cadastrar/geral/geral.service';
import { Component, OnInit } from '@angular/core';
import { structGeral } from '../cadastrar/geral/shared/geral.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Location } from '@angular/common';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  editForm!: FormGroup
  componentsGeral!: structGeral[];
  constructor(private geralService: GeralService,
    private location: Location) { }


  ngOnInit(): void {
    this.geralService.getAll().subscribe(f => this.componentsGeral = f)
  }

  del(item: structGeral, idx: number) {
    if (confirm("Deseja excluir este item?")) {
      this.geralService.delete(item).subscribe(_ => this.componentsGeral.splice(idx, 1))

    }

  }
  edit(id: number) {
    this.geralService.get(id).subscribe(f => this.creatForm(f))


  }
  creatForm(f: structGeral) {
    this.editForm = new FormGroup({
      'numero': new FormControl(f.numero, [Validators.required]),//Validators.required coloca campo como obrigatorio
      'prestador': new FormControl(f.prestador, [Validators.required]),
      'valor': new FormControl(f.valor, [Validators.required]),
      'inicio_vigencia': new FormControl(f.inicio_vigencia, [Validators.required]),
      'termino_vigencia': new FormControl(f.termino_vigencia, [Validators.required]),
      'descricao': new FormControl(f.descricao, [Validators.required, Validators.minLength(50)]),
      'id': new FormControl(f.id)
    })
  }

  onSubmit() {
    const newRegister = this.editForm.value;
    this.geralService.update(newRegister)
      .subscribe(_ => this.goBack());
    this.goBack()//pra fazer ele ir e voltar pra mesma pagina


  }

  goBack() {
    this.location.back();
  }


}