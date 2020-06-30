import lang_en from "./assets/data/lang_en.json";
import lang_cro from "./assets/data/lang_cro.json";
import lang_ger from "./assets/data/lang_ger.json";

function initContent() {
    let arr = []

    // set default to english
    if(localStorage.getItem("language") === null ) {
        localStorage.setItem("language", 0)
    }
    
    if(localStorage.getItem("language") == 0) {
        arr = lang_en
    }
    if(localStorage.getItem("language") == 1) {
        arr = lang_cro
    }
    if(localStorage.getItem("language") == 2) {
        arr = lang_ger
    }

    return arr
}

export default initContent();