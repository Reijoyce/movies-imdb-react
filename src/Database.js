
export default class Database  {
    static WantWatch = []
    static Watched = []

    static setWantWatch(movie) {
        this.WantWatch.push(movie);
        console.log("Want Watch");
        console.log(this.WantWatch);
    }

    static setWatched(movie) {
        this.Watched.push(movie);
    }

    static getWatched() {
        return this.Watched;
    }

    static getWantWatch() {
        return this.WantWatch;
    }
}


