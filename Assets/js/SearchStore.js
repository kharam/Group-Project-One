



// note for some reason its broken with the w3 textbars ??????
            function StoreItem(ItemName,Item){

                localStorage.setItem(ItemName, JSON.stringify(Item));
    
                }
    
    
                function LoadItem(ItemName){
    
                var LoadItem = JSON.parse(localStorage.getItem(ItemName));
    
                return LoadItem
                }
