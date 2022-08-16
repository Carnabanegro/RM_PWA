export function  getLast(str){
    return str.substring(str.lastIndexOf('=') + 1)
}

export function getPage(str) {
    if (!str){
        return 0;
    }
    let params = new URLSearchParams(str.substring(str.lastIndexOf('/') + 1))
    return  params.get('page');
}

