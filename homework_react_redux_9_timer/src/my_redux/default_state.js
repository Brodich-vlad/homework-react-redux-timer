// Функція перевіряє чи є збережені данні в localStorage як що немає повертає дефолтні налаштування.

export const defaultState = (state,key) => {
    const localState = JSON.parse(localStorage.getItem(key));
    // Повертаємо стан.
    return localState ? localState : state;
}