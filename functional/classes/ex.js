class kpop {
    constructor(grupo, musica){
        this.grupo = grupo
        this.musica = musica 
    } 
}

class oldKpop extends kpop{
    constructor(grupo,musica){
        super(grupo, musica)
    }
}

const bts = new kpop('bts', 'save-me')

const shinee = new oldKpop('shinee', 'sorry')

console.log(bts.musica)

console.log(shinee.musica)