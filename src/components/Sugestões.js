import React from "react"
import badvibes from "./assets/img/bad.vibes.memes.svg"
import chibi from "./assets/img/chibirdart.svg"
import razoes from "./assets/img/razoesparaacreditar.svg"
import animals from "./assets/img/adorable_animals.svg"
import cats from "./assets/img/smallcutecats.svg"

const data =[{nome:"bad.vibes", img:badvibes},{nome:"chibirdart", img:chibi},{nome:"razoesparaacreditar", img:razoes},{nome:"adorable_animals", img:animals},{nome:"smallcutecats", img:cats}]

export default function Sugestões(){
    return(
        <div class="sugestoes">
          <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
          </div>
        {data.map((value)=> <Sugestão nome={value.nome} img={value.img} />)}
            
        </div>
    )

}

function Sugestão(value){
  return(
    <>
      <div class="sugestao">
          <div class="usuario">
                <img src={value.img} />
                <div class="texto">
                  <div class="nome">{value.nome}</div>
                  <div class="razao">Segue você</div>
                </div>
          </div>

        <div class="seguir">Seguir</div>
      </div>
      
      </>
  )
}