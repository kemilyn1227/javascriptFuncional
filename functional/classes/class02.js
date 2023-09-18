//static 

class reptile{
    constructor(fristnameaparence){
        this.fristnameaparence = fristnameaparence
    }

    static getClassName(){
        return this.name
    }
}

console.log(reptile.getClassName()) //retornou o nome da classe

class article{
    constructor(title , date){
        this.title = title
        this.date = date
    }

    static compare(firstArticle, secondArticle){
        return firstArticle.date - secondArticle.date

    }
}
const articles = [

        //date é o ano que foi feito (yyyy, mm . dd)

    new article('html', new Date(2019 , 1 , 1)), //ex function article (name,date){}
    new article('css', new Date(2019, 0, 1)),
    new article('javascript', new Date(2019, 11, 1))
]


// os tres pontos vai passar todos os itens como parametro

const sortedArticle = [...articles].sort(article.compare)

//vai pegar todos os artigos nome e data , vai pegar elemento por elemento e selecionar a data e usar o sort

console.log(sortedArticle)