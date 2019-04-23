export class Comments{
    body: String;
    posterName: String;
    postDate: Date;
    video: Number;

    constructor(body:String, posterName:String, postDate:Date, video: any){
        this.body = body;
        this.posterName = posterName;
        this.postDate = postDate;
        this.video = video;
    }
}