import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: "app-cadastrar-usuario",
  templateUrl: "./cadastrar-usuario.component.html",
  styleUrls: ["./cadastrar-usuario.component.css"]
})
export class CadastrarUsuarioComponent implements OnInit {

  nome!: string;
  nascimento!: string;
  error!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  cadastrar(){
    let usuario: Usuario = {
      nome: this.nome,
      nascimento: this.nascimento
    };

    this.http
      .post<Usuario>("https://localhost:5001/API/usuario/cadastrar", usuario)
      .subscribe({
        next: (usuario) => {
          this._snackBar.open("A seleção foi cadastrada!", "Ok!", {
          });
          this.router.navigate(["pages/imc/cadastrar"]);
        },
        error: (error) => {
          console.error("Ocorreu um erro!");
        },
      });
  }

}
