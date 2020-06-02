import lang_en from "./assets/data/lang_en.json";
import lang_cro from "./assets/data/lang_cro.json";

function initContent() {
    let arr = []

    // set default to english
    if(localStorage.getItem("language") === null ) {
        localStorage.setItem("language", 0)
    }

    if(localStorage.getItem("language") == 1) {
        arr = lang_cro
    }
    else {
        arr = lang_en
    }

    return arr
}

export default initContent();