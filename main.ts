//% color=100 weight=10000 icon="\uf1ec" block="Advanced text"
namespace hello {
   let temp_txt = ""
//%block
export function extract_numbers_from (text: string) {
    temp_txt = ""
    for (let index2 = 0; index2 <= text.length - 1; index2++) {
        if (!(alphabet().includes(text.charAt(index2)))) {
            temp_txt = "" + temp_txt + text.charAt(index2)
        }
    }
    return parseFloat(temp_txt)
}
//%block
export function location_in_the_alphabet (letter: string) {
    if (letter.length == 1) {
        return index(alphabet(), letter) + 1
    }
    return 0
}
//%block
export function alphabet () {
    return "abcdefghijklmnopqrstuvwxyz"
}
//%block
export function substring (text: string, num: number, length: number) {
    temp_txt = ""
    for (let index2 = 0; index2 <= length - 1; index2++) {
        temp_txt = "" + temp_txt + text.charAt(index2 + num)
    }
    return temp_txt
}
//%block
export function read_from_to_letters (text: string, _: string) {
    if (_.length == 3) {
        return read_from_letter(text, "" + convertToText(index(text, read_untilfrom("until", _, "-")) + 1) + "-" + (index(text, read_untilfrom("from", _, "-")) + 1))
    } else {
        return ""
    }
}
//%block
export function index (text: string, _this: string) {
    for (let index2 = 0; index2 <= text.length - 1; index2++) {
        if (text.charAt(index2) == _this) {
            return index2
        }
    }
    return -1
}
//%block
export function read_untilfrom (untilfrom: string, text: string, text2: string) {
    if (untilfrom == "from") {
        return read_from(text, text2)
    } else if (untilfrom == "until") {
        return read_until(text, text2)
    }
    return ""
}
function read_until (read: string, find: string) {
    if (find.length == 1) {
        return substring(read, 0, index(read, find))
    } else {
        return ""
    }
}
//%block
export function read_from_letter (text: string, num: string) {
    return substring(text, parseFloat(read_until(num, "-")) - 1, parseFloat(read_from(num, "-")) - parseFloat(read_until(num, "-")) + 1)
}
function read_from (text: string, _from: string) {
    if (_from.length == 1) {
        return substring(text, index(text, _from) + 1, text.length - index(text, _from))
    } else {
        return ""
    }
}
}