import { useState } from "react"

export default function(){
    const [user,setUSer] = useState()
    const [profile,setProfile] = useState()
    
    return(
        <>
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
        </>
    )
}