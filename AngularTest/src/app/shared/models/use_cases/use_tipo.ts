import { ITipo } from '../tipo.model';

class Tipo implements ITipo{
    id: string|number;
    nombre: string;
    descripcion: string;

    constructor( public nombreDto : string ,public descripcionDto : string)
    {
        this.id = Math.random.toString();
        this.nombre = nombreDto;
        this.descripcion = descripcionDto;
    }
}

