export class Quote {
   showDescription: boolean;
   constructor(public id:number, public author:string,public description:string){
       this.showDescription=false;
   }
}
