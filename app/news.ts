export class News {

    headLine:String;
    category:string;
    mainNews:string;
    imageName:string;

    constructor(
        headLine:String,
        category:string,
        mainNews:string,
        imageName:string,

    ){
        this.headLine = headLine;
        this.category = category;
        this.mainNews = mainNews;
        this.imageName = imageName;

    }
}
