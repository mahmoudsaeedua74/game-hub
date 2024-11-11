//for details home
import { Ui } from "./ui.module.js";
export class Details {
    constructor() {
        //for close details
        this.details = document.querySelector(".details")
        this.game = document.querySelector(".game")
        this.btnClose = document.querySelector("#btnClose")
        this.btnClose.addEventListener("click", e => {
            this.game.classList.replace("d-none", "d-block")
            this.details.classList.replace("d-block", "d-none")
        })
        this.ui = new Ui()
    }
    async getApiId(gameId) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '85a2a3d15amshc6c0be0f7ce08f5p1d317ejsn6f3490b788ab',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        $(".loading").fadeIn(100);
        const response = await fetch(url, options);
        const result = await response.json();
        $(".loading").fadeOut(function () {
            $("body").css("overflow", "visible");
        });
        //i put display here becuse the data of details is in getapi
        this.ui.displayDetails(result)
        this.btn = document.querySelector("button.btn")
        this.btn.addEventListener("click", e => {
            document.querySelector("div.modele").classList.replace("d-none", "d-block")
            document.querySelector(".moduleO").classList.replace("d-block", "d-none")
            document.querySelector(".moduleT").classList.replace("d-block", "d-none")
            document.querySelector(".details header").classList.add("d-none")

        })
        this.btnCloseImage=document.querySelector("#btnCloseImage")
        this.btnCloseImage.addEventListener("click",e=>{
            document.querySelector("div.modele").classList.replace("d-block", "d-none")
            document.querySelector(".moduleO").classList.replace("d-none", "d-block")
            document.querySelector(".moduleT").classList.replace("d-none", "d-block")
            document.querySelector(".details header").classList.remove("d-none")
        })
    }


}