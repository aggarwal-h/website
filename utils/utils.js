export class TextTyper {
  constructor(wordList, stopTime, setText) {
    this.wordList = wordList;
    this.setText = setText;
    this.loopNum = 0;
    this.stopTime = parseInt(stopTime, 10) || 2000;
    this.text = "";
    this.isDeleting = false;
    this.tick();
  }
  tick() {
    let textToWrite = this.wordList[this.loopNum % this.wordList.length];

    if (this.isDeleting) {
      this.text = textToWrite.substring(0, this.text.length - 1);
    } else {
      this.text = textToWrite.substring(0, this.text.length + 1);
    }

    this.setText(this.text);

    var delta = 200 - Math.random() * 100; // Speed
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.text === textToWrite) {
      delta = this.stopTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => {
      this.tick();
    }, delta);
  }
}
