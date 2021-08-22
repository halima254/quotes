export class Quote {
   showDescription: boolean;
   constructor(public id:number, public author:string,public description:string, public postedDate:Date){
       this.showDescription=false;
   }
}
