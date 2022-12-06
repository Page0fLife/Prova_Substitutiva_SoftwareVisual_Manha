import { Usuario } from "./Usuario"

export interface Imc{
    id?: number;
    peso: number;
    altura: number;
    imc?: number;
    classificacao?: string;
    usuario?: Usuario;
    usuarioId: number;
}