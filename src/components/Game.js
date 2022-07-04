import React from 'react'

function Game(menuItem) {
  return (
    <div>
        <div class="card" key={item.id}>
                <img src={item.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <a href="#" role="tab" data-rb-event-key="newArrival" aria-selected="false" class="nav-link text-center">{props.name}</a>
                        <p class="card-text text-center">{item.stars}</p>
                        <p class="card-text text-center">{item.price}</p>
                </div>
            </div> 
    </div>
  )
}

export default Game