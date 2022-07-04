import React from 'react'

function Menu({menuItem}) {
    return (
        <div className="item">
            {
                menuItem.map((item) =>{
                    return <div key={item.id}>
                        <div class="card">
                            <img src={item.image} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <a href="#" role="tab" data-rb-event-key="newArrival" aria-selected="false" class="nav-link text-center">{item.title}</a>
                                    <p class="card-text text-center">{item.stars}</p>
                                    <p class="card-text text-center">{item.price}</p>
                            </div>
                        </div> 
                    </div>
                })
            }
        </div>
    )
}

export default Menu;
