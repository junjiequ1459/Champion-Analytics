class Example {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = "<h1>Its alive</h1>";
    this.handleClick = this.handleClick.bind(this);
    this.ele.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    e.preventDefault();
    this.ele.children[0].innerText = "Ouch";
  }
}

export default Example;
