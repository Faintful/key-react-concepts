import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';

import Header from './components/Header'

class Concept {
  constructor(title, image, description) {
    this.title = title;
    this.image = image;
    this.description = description;
  }
  }

  class Image {
    constructor(src, alt) {
      this.src = src;
      this.alt = alt;
    }
  }

const concepts = [
  new Concept('Key React Concepts', new Image(keyConceptsImage, 'Medal badge with a star'), 'Selected key React concepts you should know about'),
  new Concept('State', new Image(stateImage, 'A top hat'), 'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.'),
  new Concept('Events', new Image(eventsImage, 'A megaphone'), 'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.'),
  new Concept('Components', new Image(componentsImage, 'Cubes stacked up'), 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.')
];

function App() {
  return (
    <div>
      <Header {...concepts[0]} />
      <ul id="concepts">
        <li className="concept">
          <img src="TODO: IMAGE" alt="TODO: TITLE" />
          <h2>TODO: TITLE</h2>
          <p>TODO: DESCRIPTION</p>
        </li>
      </ul>
    </div>
  );
}

export default App;