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
          
          <div class="fundo-mobile">
          <ion-icon name="home"></ion-icon>
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="add-circle-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
          </div>

        
        </div>
      
      </>
    )
}

