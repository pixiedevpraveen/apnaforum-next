var pagedown = require("pagedown");

/* Returns the converted and sanitized HTML of the given markdown string */
const markToHtml = (text: string) => {
    var safeConverter = pagedown.getSanitizingConverter();
    let res = safeConverter.makeHtml(text)
    return res
}

/* Extracts the innerHTML of all the elements with the given query and Set with converted and sanitized HTML */
const convertMarkToHtmlWithQuery = (query: string) => {
    let elements = document.querySelectorAll(query)
    for (let index = 0; index < elements.length; index++) {
        const el = elements[index];
        el.innerHTML = markToHtml(el.innerHTML)
    }
}

/* Extracts the tookie respect to the given name */
const getCookie = (name: string): string => {
    var cookieValue = '';
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const getAuthToken = (): string => {
    if (process.env.DEBUG === 'true')
        return process.env.NEXT_PUBLIC_DEBUG_AUTH_TOKEN ?? ''
    else
        /* In production The auth token of the user will be returned */
        return ''
}

/* Convert JSON object data to FormData for POST/PUT submission */
const objToFormData = (obj: object): FormData => {
    const form = new FormData()
    Object.entries(obj).forEach((o) => {
        form.set(o[0], o[1]);
    })
    return form
}


let headersList = {
    "Accept": "*/*",
    "authorization": process.env.NEXT_PUBLIC_DEBUG_AUTH_TOKEN ?? getAuthToken()
}
/* Will return fetch response without converting to json or text */
const usePostFetch = async (path = '', formData: FormData, method: string = 'POST', auth = false) => {

    return fetch(`${process.env.NEXT_PUBLIC_API_BASE}/${path}?res_type=api`, {
        method: method,
        body: formData,
        headers: auth ? headersList : {},
        credentials: "same-origin"
    });
}
/* The path must not start with '/' and data string must be start with & */
const dataFetch = async (path = '', data: string = '', method: string = 'GET', auth = false) => {

    return fetch(`${process.env.NEXT_PUBLIC_API_BASE}/${path}?res_type=api${data}`, {
        headers: auth ? headersList : {},
        method: method,
        credentials: 'same-origin'
    });
}

/* Set and Show Toast message */
const setMsg = (msg: string, milisec: number = 0) => {
    let toast = document.getElementById('main-toast')
    let toastMsg = document.getElementById('toast-msg')
    if (toast && toastMsg) {
        toastMsg.innerText = msg
        toast.firstElementChild?.classList.add('show')
        if (milisec > 0) {
            setTimeout(() => {
                unsetMsg()
            }, milisec);
        }
    }
}

/* Hide Toast message */
const unsetMsg = () => {
    let toast = document.getElementById('main-toast')
    let toastMsg = document.getElementById('toast-msg')
    if (toast && toastMsg) {
        toast.firstElementChild?.classList.remove('show')
    }
}

/* Start the Main Loading. If milliseconds provided then hide the loading after the given time */
const startLoading = (milliseconds: number = 0) => {
    let mainLoading = document.getElementById('main-loading')
    if (mainLoading) {
        mainLoading.classList.add('show')
        if (milliseconds > 0) {
            setTimeout(() => {
                stopLoading()
            }, milliseconds);
        }
    }
}

/* Stops the Main Loading */
const stopLoading = () => {
    let mainLoading = document.getElementById('main-loading')
    if (mainLoading) {
        mainLoading.classList.remove('show')
    }
}

export { objToFormData, usePostFetch, dataFetch, markToHtml, convertMarkToHtmlWithQuery, setMsg, unsetMsg, startLoading, stopLoading }
