
export function formatDate(dateString) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;

    return formattedDate;
}


export function truncateString(str) {
    var required = 42;
    if (str.length <= required) {
        return str;
    } else {
        return str.substring(0, required-2) + '...';
    }
}