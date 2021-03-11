module.exports = function check(str, bracketsConfig) {
    let strTmp;
    while (str) {
        bracketsConfig.forEach(
            (bracketsPair) => (str = str.replace(bracketsPair.join(""), ""))
        );
        if (str === strTmp) {
            return false;
        }
        strTmp = str;
    }
    return str.length === 0;
};
