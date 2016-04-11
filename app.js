
var custId, offerId, redemptionCode;
var custIds = [], offerIds = [], redemptionCodes = [];

offerId = Math.floor(100000000000 + Math.random() * 900000000000);

var yId= AlphabeticID.encode(999999999999);
console.log(yId);
console.log(AlphabeticID.decode(yId));
console.log(offerId);

var reversed = parseInt('EDB88320', 16)
var reversed = parseInt('EDB88320', 16)

//console.log("CustomerId     OfferId    RedemptionCode")
custId = Math.floor(100000000000 + Math.random() * 900000);    
var index = 0;
var len = 0;
for(var i=custId; i<(custId+10); i++){
    redemptionCode = AlphabeticID.encode(i);
    custIds[index] = i;
    redemptionCodes[index++] = redemptionCode;
    if(redemptionCode.length > len){
        len = redemptionCode.length;
    }
    console.log(i + "," + redemptionCode);
}


var uniqueredemptionCodes = [];


for (var i = 0; i < redemptionCodes.length; i++) {
    if (uniqueredemptionCodes.indexOf(redemptionCodes[i]) < 0) {
        uniqueredemptionCodes.push(redemptionCodes[i]);
    }else{
        console.log(redemptionCodes[i]);
    }
}

if(uniqueredemptionCodes.length === redemptionCodes.length){
    console.log("No duplicates");
}else{
    console.log(redemptionCodes.length - uniqueredemptionCodes.length + " duplicates found");
}

console.log("Max red code len " + len)
function isSwearWord(fieldValue)
{
    for (i = 0; i < badWords.length; i++)
    {
        var rgx = new RegExp(badWords[i], 'gi');
        if (rgx.test(fieldValue))
        {
            return true;   
        }							
    }
    
    return false;
}