// Write a function that takes an array of URLs, and returns 
// the most commonly used origin in the array.

let arr1 = ["https://example.com", "http://sub.example.com/page", "https://google.com/maps?location=abcd", "https://fonts.google.com/futura", "http://example.com/category/date/page", "https://sub.example.com/abcd", "https://sub1.sub2.maps.google.com/abcd?x1=a&x2=b"]

const getOrigin = (str) => {
    let splitStr = str.split("/");
    let decimalSplit = splitStr[2].split(".");
    return decimalSplit[decimalSplit.length - 2] + "." + decimalSplit[decimalSplit.length - 1];
}

const findMostCommonOrigin = (arr) => {
    let commonOriginUrls = {};
    let maxCount = 0;
    let maxOrigin = "";
    for (let url in arr){
        const origin = getOrigin(url)
        if (commonOriginUrls[origin]){
            commonOriginUrls[origin] += 1
        } else {
            commonOriginUrls[origin] = 1
        }
        if (commonOriginUrls[origin] > maxCount) {
            maxCount = commonOriginUrls[origin]
            maxOrigin = origin
        }
    }
    return maxOrigin
}

console.log(findMostCommonOrigin(arr1))