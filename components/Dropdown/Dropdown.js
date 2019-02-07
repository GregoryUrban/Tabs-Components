class Dropdown { //Step 3: TabLink class definition and pass in the link reference to the DOM element
  constructor(element) {
    
    // Assign this.element to the dropdown element
    // for Greg: Step 7: Properly set up the 'this' keyword for the Dropdown class using our element
    this.element = document.querySelector('.dropdown');

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(`.dropdown-button`);//[data-tab='${link.dataset.tab}']
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(`.dropdown-content`);//[data-tab='${link.dataset.tab}']

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent());
  }
  // method
  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));