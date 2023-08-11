// Функція конвертує хвилини в секунди.
export const minConvertSec =({min,sec})=>{
    let second = Number((min*60 + sec*1));
    return second
}
// Функція конвертує секунди в хвилини та секунди.
export const secConvertMin = (sec) =>{
    let min = Math.trunc((sec/60));
    let second = Number((sec - min*60));

    let time = {
        min:min,
        sec:second,
    }
    return time
}
