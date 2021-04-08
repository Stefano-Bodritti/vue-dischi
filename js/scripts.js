/* Attraverso una chiamata ajax all’API di boolean
https://flynn.boolean.careers/exercises/api/array/music
avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita. */

var app = new Vue(
  {
    el: "#app",
    data: {
      albums: [],
      genres: [],
      selected: ""
    },
    mounted: function () {
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then( (risposta) => {
        this.albums = risposta.data.response;
        //ciclo l'array di album e creo un nuovo array con i generi
        this.albums.forEach((item, i) => {
          if ( !this.genres.includes(item.genre) ) {
            this.genres.push(item.genre);
          }
        });
        //ordino i dischi per anno d'uscita
        // this.albums.sort(function (a, b) {return a.year - b.year});
        this.albums.sort( (a, b) => a.year - b.year);
      });
    }
  }
);
