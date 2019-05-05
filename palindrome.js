function palindrome(str) {
    var str_lowercase = str.toLowerCase();
    str_lowercase = str_lowercase.replace(/\s/g, '');
    str_lowercase = str_lowercase.replace(/[^\w\s]|_/g, "")
    var str_backwards = []

    for (var i = 0; i < str_lowercase.length; i++) {
        str_backwards.push(str_lowercase[str_lowercase.length - 1 - i]);
    }
    str_backwards = str_backwards.toString()
    str_backwards = str_backwards.replace(/,/g, '')

    console.log(str_backwards)
    if (str_lowercase == str_backwards) {
        return true
    }
    else {
        return false
    }
}



palindrome("never odd $#@%$#%$#!or even");