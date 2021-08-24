export class Quote {
   likeQuote:number;

   dislikeQuote:number;

   showDescription: boolean;
   constructor(public id:number, public author:string,public description:string,public username:string, public postedDate:Date){
       this.showDescription=false;
       this.likeQuote = 0;
       this.dislikeQuote =0;
   }
}
