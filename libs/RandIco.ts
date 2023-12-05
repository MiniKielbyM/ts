// Copyright (c) 2023 Michael Kielbasinski, all rights reserved
class RandIco {
  private target: any;
  private color = this.randColor();
  constructor(target: any) {
    this.target = target;
  }
  public setColor(color = this.randColor()) {
    if (CSS.supports("color", color)) {
      this.color = color;
    } else {
      console.error(
        "The color '" +
          color +
          "' is not a valid CSS color value. Please enter a valid CSS color such as '#fff' or 'rgba(255, 255, 255, 0.5)'."
      );
    }
  }
  public setTarget(target: any) {
    if (target.nodeName == "CANVAS") {
      if (target.offsetWidth != target.offsetHeight) {
        console.error("The target must have equal side lengths.");
      } else if (target.offsetWidth == 0 || target.offsetHeight == 0) {
        console.error("The target must have a non-zero width and height.");
      } else if (target.offsetWidth < 16 || target.offsetHeight < 16) {
        console.error(
          "The target must have a width and height of at least 116px."
        );
      } else {
        this.target = target;
      }
    } else {
      console.error("The target must be a canvas element.");
    }
  }
  public setSeed(seed: string) {
    const binarySeed = this.asciiToBinary(seed);
    var binaryJSON:any = {};
      const chunkSize = 16;
      const split = [];
      for (let i = 0; i < binarySeed.length; i += chunkSize) {
        split.push(binarySeed.slice(i, i + chunkSize));
      }
      for (let i = 0; i < split.length; i++) {
        binaryJSON["row" + (i + 1)] = split[i];
      }
      alert(JSON.stringify(binaryJSON));
      alert(binaryJSON.length);
    }
  public draw(allColorsRand: boolean = false) {
    const canvas = this.target;
    const context = canvas.getContext("2d");
    var x = 0;
    while (x < Math.ceil(Math.random() * 1000)) {
      x++;
      context.fillStyle = this.color;
      var y = 16 - Math.floor((Math.random() * 16) / 2);
      context.fillRect(
        (canvas.width / 16) * Math.floor(Math.random() * 16),
        (canvas.height / 16) * y,
        canvas.width / 16,
        canvas.height / 16
      );
      if (allColorsRand) {
        this.setColor();
      }
      var za = 16 * 2 - 1 - Math.floor(Math.random() * 16);
      context.fillRect(
        (canvas.width / (16 * 2)) * za,
        (canvas.height / (16 * 2)) * Math.floor(Math.random() * (16 + 2)),
        canvas.width / (16 * 2),
        canvas.height / (16 * 2)
      );
      var z = Math.floor(Math.random() * (16 / 2));
      if (allColorsRand) {
        this.setColor();
      }
      context.fillRect(
        (canvas.width / 16) * z,
        (canvas.height / 16) * Math.floor(Math.random() * 16),
        canvas.width / 16,
        canvas.height / 16
      );
      if (allColorsRand) {
        this.setColor();
      }
    }
  }
  private asciiToBinary(asciiString: string): string {
    let binaryString = "";
    for (let char of asciiString) {
      binaryString += char.charCodeAt(0).toString(2).padStart(8, "0");
    }
    return binaryString;
  }
  private randColor() {
    const letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
