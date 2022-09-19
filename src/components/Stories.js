import meowed from './assets/img/meowed.svg';
import barked from  "./assets/img/barked.svg" 
import nathan from "./assets/img/nathanwpylestrangeplanet.svg"
import wawawicomics from "./assets/img/wawawicomics.svg"

import respondeai from "./assets/img/respondeai.svg"
import filomoderna from "./assets/img/filomoderna.svg"
import memeriagourmet from "./assets/img/memeriagourmet.svg"

import style from "./assets/style.css"



const imgStory = [{name:meowed ,user: "nome"}, {name:barked,user: "nome"}, {name:nathan,user: "nome"}, {name:wawawicomics,user: "nome"},{ name:respondeai,user: "nome"}, {name:memeriagourmet,user: "nome"}];

export default function Stories(){
    return(
        <>
            <div className="stories">
                
                {imgStory.map((value, index)=> <Story img={value.name} user={value.user} key={index}/>)}
                
                <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </>
    )

    function Story(value){
        return(
            <>
                <div className="story">
                    <div className="imagem">
                        <img src={value.name} />
                    </div>
                    <div className="usuario">
                        {value.user}
                    </div>
                </div>
            </>
        )
    }
}

    