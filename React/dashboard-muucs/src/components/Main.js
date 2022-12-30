import React from "react"

function Main() {
    return (
        <div>
            <div className='PanelDetail'>
                <PanelDetail />

            </div>
            <div className='PanelCategorias'>
                <PanelCategorias />

            </div>
          
            <div className='PanelUsers'>
                <PanelUsers />

            </div>
            <div className='PanelListProduct'>
                <PanelListProduct />

            </div>
            <div className='PanelVisitas'>
                <PanelVisitas />

            </div>


        </div>
    );
}

export default Main;