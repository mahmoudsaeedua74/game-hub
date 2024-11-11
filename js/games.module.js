import { Details } from "./details.module.js"
import { Ui } from "./ui.module.js"
//for section home 
//here everythink about home section navbar and display cards 
export class Games {
    constructor() {
        //ues Jquery for class active 
        const buttonAncor = $("a.nav-link")
        buttonAncor.click(e => {
            buttonAncor.removeClass("active")
            $(e.target).addClass("active")
            //make custom attr data for know every e.target i click on it
            const category = (e.target.dataset.category)
            //send that category for getgames and that can display everycards and will change when i click in differnt button
            this.getGames(category)

        })
        this.details = document.querySelector(".details")
        this.game = document.querySelector(".game")
        // take a instance from ui class to ues funtion displayGame for display all cards
        this.ui = new Ui()
        // give get game some category for when i open the page its will be there are some data for display
        this.getGames("mmorpg")
        //select input and add event 
        this.searchInput = document.getElementById("searchInput");
        this.searchInput.addEventListener("input", (e) => this.handleSearch(e));
    }
    
    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredGames = this.gamesData.filter(game =>
            game.title.toLowerCase().includes(searchTerm)
        );
        this.ui.displayGame(filteredGames); // display game after fillter
        this.displayGameDetils()
    }
    // // for loading page
    async getGames(category) {
        $(".loading").fadeIn();
        //that function for fetch data ad take promter from constructor its a category for change api 
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = { method: "GET", headers: { "x-rapidapi-key": "85a2a3d15amshc6c0be0f7ce08f5p1d317ejsn6f3490b788ab", "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com", }, };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            this.gamesData = result;
            //give  displayGame  a api for display data
            this.ui.displayGame(result);
            this.displayGameDetils()
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        finally {
            $(".loading").fadeOut(function () {
                $("body").css("overflow", "visible");
            });
        }
    }
    displayGameDetils() {
        //for display cards and display
        this.cards = document.querySelectorAll(".card")
        this.cards.forEach(card => {
            card.addEventListener("click", e => {
                this.game.classList.replace("d-block", "d-none")
                this.details.classList.replace("d-none", "d-block")
                const data = new Details()
                const gameId = card.dataset.id
                data.getApiId(gameId)
            })

        })


    }

}
