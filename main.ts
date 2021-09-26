enum UntilFrom {
    //% block="Until"
    Until,

    //% block="From"
    From,
}
enum Types {
    //% block="Number"
    Number,

    //% block="String"
    String,
}
//% color=#bb8900 weight=60 icon="\uf035" block="Advanced Text"
namespace String {
   let temp_txt = ""
   let temp_num = 0
//% block="extract numbers from $text"
//% group="Converting"
export function extract_numbers_from (text: string) {
    temp_txt = ""
    for (let index2 = 0; index2 <= text.length - 1; index2++) {
        if (numbers().includes(text.charAt(index2))) {
            temp_txt = "" + temp_txt + text.charAt(index2)
        }
    }
    return parseFloat(temp_txt)
}
// block="encode $text into a number"
// group="Converting"
export function encode_text_not_in_use (text: string) {
    temp_txt = "9"
    for (let index2 = 0; index2 < text.length; index2++) {
        temp_txt = "" + temp_txt + extend(convertToText(all_letters_and_syms().indexOf(text.charAt(index2))), 2, Types.Number)
    }
    return parseFloat(temp_txt)
}
// block="decode $num into text"
// group="Converting"
export function decode_number_not_in_use (num: number) {
    temp_txt = ""
    for (let index2 = 1; index2 <= convertToText(num).length / 2; index2++) {
        temp_txt = "" + temp_txt + all_letters_and_syms().charAt(parseFloat(convertToText(num).substr((index2 * 2) - 1, 2)))
    }
    return temp_txt
}
//% block="convert $bool into a string"
//% group="Converting"
export function convert_bool (bool: boolean) {
    if (bool) {
        return "true"
    } else {
        return "false"
    }
}
//% block="extend $text until its length becomes $length for the purpose of using it as a $purpose_type"
//% group="Reading"
//% inlineInputMode=inline
export function extend (text: string, length: number, purpose_type: Types) {
    if (purpose_type == Types.Number) {
        if (not(10 ** length - text.length < 10)) {
            text = "" + convertToText(10 ** length - text.length).substr(1, convertToText(10 ** length - text.length).length - 1) + text
        }
    } else if (purpose_type == Types.String) {
        for(let i = length; i < text.length; i++) {
            text = " " + text
        }
    }
    return text
}
function not (oof: boolean) {
    return (!(oof))
}
//% block="read everything except for $extract s from $text"
//% group="Reading"
export function extract__s_from (text: string, extract: string) {
    temp_txt = ""
    for (let index25 = 0; index25 <= text.length - 1; index25++) {
        if (!((text.charAt(index25)) == extract)) {
            temp_txt = "" + temp_txt + text.charAt(index25)
        }
    }
    return parseFloat(temp_txt)
}
//% block="every symbol on the keyboard"
//% group="Reading"
export function all_letters_and_syms () {
    return " `~1!2@3#4$5%6^7&8*9(0)-_=+qQwWeErRtTyYuUiIoOpP[{]}\\|asdfghjklASDFGHJKL;:'zxcvbnmZXCVBNM,<.>/?\""
}
//% block="how many $extract s is there in $text"
//% group="Values"
export function how_many_s_is_there_in_ (text: string, extract: string) {
    temp_num = 0
    for (let index26 = 0; index26 <= text.length - 1; index26++) {
        if (text.charAt(index26) == extract) {
            temp_num += 1
        }
    }
    return temp_num
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
        return read_from_letter(text, "" + convertToText(index(text, read_untilfrom(1, _, "-")) + 1) + "-" + (index(text, read_untilfrom(2, _, "-")) + 1))
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
//% block="read $text $untilfrom $text2"
//% group="Reading"
export function read_untilfrom (untilfrom: UntilFrom, text: string, text2: string) {
    if (untilfrom == UntilFrom.From) {
        return read_from(text, text2)
    } else if (untilfrom == UntilFrom.Until) {
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
