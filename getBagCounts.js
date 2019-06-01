function getBagCounts(clientOrders, availableBagSizes) {
    // Sort bag sizes (ascending) then reverse to make it descending
    sortedBagSizes = availableBagSizes.sort().reverse();
    bags = [];

    // For Each available bag size,
    for(availableBagSize of sortedBagSizes){
        // We add a bag with the size and count zero to bags array
        bags.push({size: availableBagSize, count: 0});
    }

    // For all orders,
    for(order of clientOrders){

        // set remaining order as the entire order
        remainingOrder = order;

        // while the remaining order is greater than zero,
        while (remainingOrder > 0 ) {

          // get the largest bag size which is smaller than or equal to the remaining order
          let bagSize = sortedBagSizes.find( size => size <= remainingOrder);

          // Once we have the bag size, we should add the number of bags to be sent
          // We find the bag with that size from our bags array and add one to its count
          bags.find(bag => bag.size == bagSize).count += 1
          
          // we reduce the remaining value of the order by the bag size we have added
          remainingOrder -= bagSize;
        }
    }
    // return the bags array
    return bags
}

module.exports = getBagCounts;




