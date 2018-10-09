
exports.run = async (client, message, args, ops, eEmb, userData) => {
    try {
        var maxcoins = getMax(userData, "ppg");
        console.log(maxcoins)
    } catch(e) {
        eEmb(e)
    }
}

function getMax(arr, prop) {
    var max;
    for (var i=0 ; i<arr.length ; i++) {
        if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i];
    }
    return max;
}