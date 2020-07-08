import { IUsuario } from '../usuario.model';

class Usuario implements IUsuario
{
    id: string|number|null
  usuario: string;
  contraseña: string;

  constructor (public usuarioDto : string, public contraseñaDto : string)
  {
      this.id = Math.random.toString();
      this.usuario = usuarioDto;
      this.contraseña = contraseñaDto;
  }
  
}