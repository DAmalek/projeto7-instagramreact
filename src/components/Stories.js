import meowed from './assets/img/meowed.svg';
import barked from  "./assets/img/barked.svg" 
import nathan from "./assets/img/nathanwpylestrangeplanet.svg"
import wawawicomics from "./assets/img/wawawicomics.svg"
import ninegag from "./assets/img/9gag.svg"
import respondeai from "./assets/img/respondeai.svg"
import filomoderna from "./assets/img/filomoderna.svg"
import memeriagourmet from "./assets/img/memeriagourmet.svg"





const imgStory = [{name: ninegag ,user: "9gag"},{name: meowed,user: "meowed"}, {name:barked,user: "barked"}, {name:nathan,user: "nathan"}, {name:wawawicomics,user: "wawawi"},{ name:respondeai,user: "respondeai"}, {name:memeriagourmet,user: "memeriagourmet"}, {name:filomoderna,user: "filomoderna"}];

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

    