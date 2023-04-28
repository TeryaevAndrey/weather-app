import { createStore, createEvent } from "effector";

export const setSearchValue = createEvent<string>();

export const $searchStore = createStore<string>("");

$searchStore.on(setSearchValue, (state, data) => (state = data));