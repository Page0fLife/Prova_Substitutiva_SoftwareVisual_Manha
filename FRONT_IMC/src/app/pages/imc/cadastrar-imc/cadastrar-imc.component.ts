import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Imc } from 'src/app/Models/Imc';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-cadastrar-imc',
  templateUrl: "./cadastrar-imc.component.html", 
  styleUrls: ["./cadastrar-imc.component.css"]
})
export class CadastrarImcComponent implements OnInit {

  peso!: number;
  altura!: number;
  classificacao!: string;
  imc!: number;
  usuarioId!: number;
  id!: number;
  usuarios!: Usuario[];
  erro!: string;


  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {this.route.params.subscribe((params) => {
    let { id } = params;
    if (id !== undefined) {
      this.http.get<Imc>(`https://localhost:5001/API/Imc/buscar/${id}`).subscribe({
        next: (imc) => {
          this.peso = imc.peso;
          this.altura = imc.altura;
          this.usuarioId = imc.usuarioId!;
        },
      });
    }
  });
    this.http.get<Usuario[]>
      ("https://localhost:5001/API/usuario/listar")
      .subscribe({
        next: (usuarios) => {
          this.usuarios = usuarios;
        }
      });
  }

  alterar(): void {
    let imc: Imc = {
      peso: this.peso,
      altura: this.altura,
      usuarioId: this.usuarioId
    };
    this.http
      .patch<Imc>("https://localhost:5001/API/Imc/alterar", imc)
      .subscribe({
        next: (imc) => {
          this._snackBar.open("usuário alterado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/imc/listar"]);
        },
        error: (error) => {
          console.error("Ocorreu um erro!");
        },
      });
  }

  cadastrar(){
    let Imc : Imc = {
      peso: this.peso,
      altura: this.altura,
      usuarioId: this.usuarioId
    };

    this.http
      .post<Imc>("https://localhost:5001/API/Imc/cadastrar", Imc)
      .subscribe({
        next: (Imc) => {
          this._snackBar.open("O usuário foi cadastrado!", "Ok!", {
          });
          this.router.navigate(["pages/imc/listar"]);
        },
        error: (error) => {
          console.error("Ocorreu um erro!");
        },
      });
  }
}
