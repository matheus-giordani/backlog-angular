import { GeralService } from './../cadastrar/geral/geral.service';
import { Component, OnInit } from '@angular/core';
import { structGeral } from '../cadastrar/geral/shared/geral.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  componentsGeral!: structGeral[];
  constructor(private geralService: GeralService) { }

  ngOnInit(): void {
    this.geralService.getAll().subscribe(f => this.componentsGeral = f)
  }

}
