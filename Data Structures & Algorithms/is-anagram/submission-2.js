class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const str1 = s.split("").sort().join("");
        const str2 = t.split("").sort().join("");

        if (str1 === str2)
            return true
        else return false;
    }
}
