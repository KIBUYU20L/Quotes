export class Quote {
    public showQuote: boolean;
  constructor(public id: number,public name: string,public quote: string,  public completeDate: Date){
    this.showQuote=false;
  }
}
