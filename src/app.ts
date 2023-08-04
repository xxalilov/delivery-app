import express from "express";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  public listen(): void {
    this.app.listen(3999, () => {
      console.log("================================================");
      console.log(`🚀 App is listening on the PORT: ${3999}`);
      console.log("================================================");
    });
  }
}

export default App;
