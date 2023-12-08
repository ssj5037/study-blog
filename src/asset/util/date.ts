const dateToString = (param: Date) => {
    const year = param.getFullYear();
    const month = (param.getMonth() + 1).toString().padStart(2, '0');
    const date = (param.getDate() + 1).toString().padStart(2, '0');
    const hour = (param.getHours() + 1).toString().padStart(2, '0');
    const minute = (param.getMinutes() + 1).toString().padStart(2, '0');
    return `${year}-${month}-${date} ${hour}:${minute}`;
}

export {
    dateToString
}