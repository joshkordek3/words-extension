//% color=#bb8900 weight=100 icon="\uf035" block="Advanced Text"
namespace hello {
   let temp_txt = ""
   let temp_num = 0
//% block="extract numbers from $text"
//% group="Converting"
export function extract_numbers_from (text: string) {
    temp_txt = ""
    for (let index2 = 0; index2 <= text.length - 1; index2++) {
        if (!(alphabet().includes(text.charAt(index2)))) {
            temp_txt = "" + temp_txt + text.charAt(index2)
        }
    }
    return parseFloat(temp_txt)
}
//% block="$letter 's location in the alphabet"
//% group="Location"
export function location_in_the_alphabet (letter: string) {
    if (letter.length == 1) {
        return index(alphabet(), letter) + 1
    }
    return 0
}
//%block
//% group="Alphabet"
export function alphabet () {
    return "abcdefghijklmnopqrstuvwxyz"
}
//% block="substring of $text from $num of length $length"
//% group="Reading"
export function substring (text: string, num: number, length: number) {
    temp_txt = ""
    for (let index22 = 0; index22 <= length - 1; index22++) {
        temp_txt = "" + temp_txt + text.charAt(index22 + num)
    }
    return temp_txt
}
//% block="read $text from $_ (ex: a-z)"
//% group="Reading"
export function read_from_to_letters (text: string, _: string) {
    if (_.length == 3) {
        return read_from_letter(text, "" + convertToText(index(text, read_untilfrom("until", _, "-")) + 1) + "-" + (index(text, read_untilfrom("from", _, "-")) + 1))
    }
    return ""
}
//% block="$text find index of $_this"
//% group="Location"
export function index (text: string, _this: string) {
    for (let index23 = 0; index23 <= text.length - 1; index23++) {
        if (text.charAt(index23) == _this) {
            return index23
        }
    }
    return -1
}
//% block="read $text $untilfrom (until/from) $text2"
//% group="Reading"
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
//% block="read $text from $num (ex: 1-10)"
//% group="Reading"
export function read_from_letter (text: string, num: string) {
    return substring(text, parseFloat(read_until(num, "-")) - 1, parseFloat(read_from(num, "-")) - parseFloat(read_until(num, "-")) + 1)
}
function parse_to_number (text9: string) {
    temp_num = 0
    for (let index2 = 0; index2 <= text9.length - 1; index2++) {
      temp_num += extract_numbers_from(text9[index2])
    }
    return temp_num
}
//%block
//% group="Alphabet"
export function numbers () {
    return "1234567890"
}
function read_from (text: string, _from: string) {
    if (_from.length == 1) {
        return substring(text, index(text, _from) + 1, text.length - index(text, _from))
    } else {
        return ""
    }
}
}