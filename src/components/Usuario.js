import React from "react"

export default function Usuario(){
    const [user,setUser] = React.useState("catanacomics");
    const [profile,setProfile] = React.useState("assets/img/catanacomics.svg");
    
    

    function newUser(){
        const userName = prompt("novo nome de usuario: ")
        setUser(userName)
    }
    function newProfile(){
        const userPic = prompt("nova foto de perfil (URL):")
        setProfile(userPic)
    }

    return(
        <>
            <img onClick={newProfile} src={profile} />
            <div className="texto">
              <strong>{user}</strong>
            
            <span>
              {user}
              <ion-icon name="pencil" onClick={newUser} ></ion-icon>
            </span>
            </div>
        </>
    )
}