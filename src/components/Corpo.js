import Posts from './Posts.js'
import Stories from './Stories.js'
import Sidebar from './Sidebar.js'

export default function Corpo(){
    return(
      <>
        <div className ="corpo">
        <div className ="esquerda">
         <Stories />
         <Posts />
        </div>
        <Sidebar />

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

