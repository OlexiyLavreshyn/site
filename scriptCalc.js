var total = 0;
            
function addToTotal(price)
{
    total = total + price;
    document.getElementById("PriceText").innerHTML = total;            
}

function ClearTotal()
{
    total = 0
    document.getElementById("PriceText").innerHTML = total;            
}