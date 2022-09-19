import { useState } from "react"

export default function Usuario(){
    const [user,setUser] = useState("catanacomics");
    const [profile,setProfile] = useState("assets/img/catanacomics.svg");
    
    return(
        <>
            <img src={profile} />
            <div class="texto">
              <strong>{user}</strong>
            
            <span>
              Catana
              <ion-icon name="pencil"></ion-icon>
            </span>
            </div>
        </>
    )
}