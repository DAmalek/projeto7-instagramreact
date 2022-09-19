import React from "react";
import meowed from "./assets/img/meowed.svg";
import cat from "./assets/img/gato-telefone.svg";
import respondeAi from "./assets/img/respondeai.svg";
import barked from "./assets/img/barked.svg";
import dog from "./assets/img/dog.svg";
import animals from "./assets/img/adorable_animals.svg";



  export default function Posts(){  
    
    
    const data = [
      { user: meowed, content: cat, liked: respondeAi },
      { user: barked, content: dog, liked: animals }
    ]
    
    return (
      <div className ="posts">
            {data.map((value, index)=> <Post user={value.user} content={value.content}liked={value.liked} key={index}  />)}
        </div>

)

}

function Post(value){
  const [liked,setLiked] = React.useState(false)
    return(
        <div className ="post">
              <div className ="topo">
                <div className ="usuario">
                  <img src={value.user} />
                  meowed
                </div>
                <div className ="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div className ="conteudo">
                <img src={value.content} />
              </div>

              <div className ="fundo">
                <div className ="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    {liked ? <ion-icon name="bookmark" onClick={()=> setLiked(false)}></ion-icon> : <ion-icon name="bookmark-outline" onClick={()=> setLiked(true)}></ion-icon>}
                  </div>
                </div>

                <div className ="curtidas">
                  <img src={value.liked} />
                  <div className ="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                  </div>
                </div>
              </div>
            </div>

    )
}
