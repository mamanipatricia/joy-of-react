function render(reactElement, containerDOMElement) {
  const { props, type, children } = reactElement;
  // 1. create a DOM element
  console.log(
    "reactElement/containerDOMElement:",
    reactElement,
    "// ",
    containerDOMElement
  );
  const domElement = document.createElement(type);
  // 2. update properties
  domElement.innerText = children;
  for (const key in props) {
    const value = props[key];
    domElement.setAttribute(key, value);
  }
  // 3. put in the container
  containerDOMElement?.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    id: "some-link",
    "data-number": 20,
    href: "https://wikipedia.org",
  },
  children: "Read more on Wikipedia",
};

const containerDOMElement = document.querySelector("#root");
render(reactElement, containerDOMElement);
