import React from "react";
import meowed from "./assets/img/meowed.svg";
import cat from "./assets/img/gato-telefone.svg";
import respondeAi from "./assets/img/respondeai.svg";
import barked from "./assets/img/barked.svg";
import dog from "./assets/img/dog.svg";
import animals from "./assets/img/adorable_animals.svg";

export default function Posts() {
  const data = [
    { user: meowed, content: cat, liked: respondeAi, num: 101523 },
    { user: barked, content: dog, liked: animals, num: 200541 },
  ];

  return (
    <div className="posts">
      {data.map((value, index) => (
        <Post
          user={value.user}
          content={value.content}
          liked={value.liked}
          num={value.num}
          key={index}
        />
      ))}
    </div>
  );
}

function Post(value) {
  const [saved, setSaved] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [contador, setContador] = React.useState(value.num)
  
  function mostrarLikes(){
    if (!liked){
      setContador(contador + 1)
    }else{
      setContador(contador - 1)
    }
    setLiked(!liked);
  }
  function mostrarLikesImg(){
    if (liked !== true){
      setContador(contador + 1);
      setLiked(true)
    }
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={value.user} />
          meowed
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo" onClick={mostrarLikesImg}>
        <img src={value.content}  />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            {liked ? (
              <ion-icon
                name="heart"
                onClick={mostrarLikes}
                class="red"
              ></ion-icon>
            ) : (
              <ion-icon
                name="heart-outline"
                onClick={mostrarLikes}
              ></ion-icon>
            )}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {saved ? (
              <ion-icon
                name="bookmark"
                onClick={() => setSaved(false)}
              ></ion-icon>
            ) : (
              <ion-icon
                name="bookmark-outline"
                onClick={() => setSaved(true)}
              ></ion-icon>
            )}
          </div>
        </div>

        <div className="curtidas">
          <img src={value.liked} />
          <div className="texto">
            Curtido por <strong>respondeai</strong> e{" "}
            <strong>outras {contador} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
