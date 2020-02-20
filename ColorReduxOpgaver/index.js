
// Action Creators

const blue = () => ({ type: "BLUE" });
const green = () => ({ type: "GREEN" });
const red = () => ({ type: "RED" });

// Reducer

const colorReducer = (color = "red", action) => {
  if (action.type === "RED") {
    return "ui label massive red";
  }
  if (action.type === "BLUE") {
    return "ui label massive blue";
  }
  if (action.type === "GREEN") {
    return "ui label massive green";
  }
  return color;
};

// Store

const store = Redux.createStore(colorReducer);

// render html - update

function render() {
  document.getElementById("value").className = store.getState().toString();
}

// Subscribe på ændringer. Callbackfunktionen render() kaldes når "store" opdateres

store.subscribe(render);
