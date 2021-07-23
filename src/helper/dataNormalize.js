
const headers = ["Стандарт","Комфорт","Бизнес","Комфорт+","Эконом","Минивен","Лайт"];

function Normalize(data){
    let arr = [];

    data.forEach((row, index) =>{
        arr[index] = [];
        const {mark, model, tariffs} = row;
        arr[index].push(`${mark} ${model}`);
        headers.forEach((header) => {
            tariffs.hasOwnProperty(header) ? arr[index].push(String(tariffs[header].year)) : arr[index].push('-');
        })
    })

    return arr;
}

export default Normalize;