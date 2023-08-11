import { legacy_createStore } from "redux";
import { rootReuser } from "./root_reducer";

// Створюємо стан redux.
export const store = legacy_createStore(rootReuser);
