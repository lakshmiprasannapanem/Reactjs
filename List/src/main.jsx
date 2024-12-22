import ReactDOM from"react-dom";

import App from "./App";
import { Provider } from "react-redux";
import myStore from "./Redux Concept/Store/Store";
ReactDOM.render(<Provider store={myStore}>
<App/>
</Provider>,

document.getElementById("root"));
