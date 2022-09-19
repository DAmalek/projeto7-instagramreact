import Sugestões from "./Sugestões";
import Usuario from "./Usuario";

export default function Sidebar(){
    return(
      <>
        <div class="sidebar">
          <div class="usuario">
            <Usuario />
          </div>
            
            <Sugestões />
          <div className ="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

          <div className ="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    </>

    )
}