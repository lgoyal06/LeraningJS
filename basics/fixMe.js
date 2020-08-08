const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList(list) {
    var item = list.pop();
 
    if (item) {
        removeItemsFromList(list);
    }
};
 
removeItemsFromList(list);
