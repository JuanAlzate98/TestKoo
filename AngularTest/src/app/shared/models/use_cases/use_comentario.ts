import { IComentario } from '../comentario.model';



 export class Comentario implements IComentario {
    id: string;
    contenido: string;
    usuario: string;

    constructor(public contenidoDto: string, public usuarioDto: string) {
        this.id = Math.random.toString();
        this.contenido = contenidoDto;
        this.usuario = usuarioDto;
       }

}