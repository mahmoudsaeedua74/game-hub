// //for display gamedata
// //and display games details

export class Ui {
  constructor() { }
  displayGame(gameData) {
    let gamesBox = ``
    for (let i = 0; i < gameData.length; i++) {
      gamesBox += ` <div class="col">
              <div class="card h-100 bg-transparent" data-id="${gameData[i].id}">
                <div class="card-body ">
                  <figure>
                    <img src=${gameData[i].thumbnail} class="card-img-top imgGame" alt="">
                  </figure>
                  <figcaption>
                    <div class="d-flex justify-content-between align-items-center">
                      <h3 class="card-title m-0 nameOfGame color-text-second">${gameData[i].title}</h3>
                      <span class="badge text-bg-card p-2"> free</span>
                    </div>
                    <p class="card-text  text-center text-color catogryGame">
                    ${gameData[i].short_description}
                    </p>
                  </figcaption>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <small class="bg-second-color  badge"> ${gameData[i].genre}</small>
                  <small class="bg-second-color  badge platform"> ${gameData[i].platform}</small>
                </div>
              </div>
            </div>`;
    }
    getDate.innerHTML = gamesBox;
  }
  displayDetails(gameData) {
    const detailsGameBox = `
  <div class="modele min-vh-100 w-100 d-none d-flex justify-content-center ">
    <div class=" h-75 w-75 d-flex flex-column ">
      <button class="btn-close btn-close-white my-3 align-self-end p-3" id="btnCloseImage"></button>
     <div clses="fixed-top ">
      <img src="${gameData.screenshots[0].image}" class="w-100">
      <img src="${gameData.screenshots[1].image}" class="w-100">
      <img src="${gameData.screenshots[2].image}" class="w-100"></div>
    </div>
  </div>
        <div class="col-5 moduleO d-block "><img src=${gameData.thumbnail} alt="" class="w-100"></div>
        <div class="col-7 moduleT d-block  ">
          <h3>Title: ${gameData.title}</h3>
          <p>Category: <span class="badge text-bg-info">${gameData.genre}</span></p>
          <p>Platform: <span class="badge text-bg-info">  ${gameData.platform}</span> </p>
          <p>Status: <span class="badge text-bg-info"> ${gameData.status}</span> </p>
          <p>Developer: <span class="badge text-bg-info"> ${gameData.developer}</span> </p>
          <h4 class="mt-2">System Requirements :</h4>
         <ul class="list-group unlist list-unstyled mb-2 ">
          <li >os : <span class="badge text-bg-info"> ${gameData.minimum_system_requirements.os}</span></li>
          <li>graphics :<span class="badge text-bg-info"> ${gameData.minimum_system_requirements.graphics}</span>  </li>
          <li>memory :<span class="badge text-bg-info"> ${gameData.minimum_system_requirements.memory}</span></li>
          <li>processor :<span class="badge text-bg-info"> ${gameData.minimum_system_requirements.processor}</span> </li>
          <li>storage :<span class="badge text-bg-info"> ${gameData.minimum_system_requirements.storage}</span> </li>
          </ul>
          <p class="paragraph text-color">
          ${gameData.description}
          </p>
          <a class="btn btn-outline-warning" target="_blank" href=${gameData.game_url}>ShowGame</a>
          <button class="btn btn-outline-warning">Show More Photos </button>
          <a class="btn btn-outline-info" target="_blank" href=${gameData.game_url}>Buy now</a>
        </div> 
        
        `
    gameDetails.innerHTML = detailsGameBox
  }

}
