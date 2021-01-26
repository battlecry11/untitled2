Ext.define('AK.view.MainViewModel', {
    extend: 'Ext.app.ViewModel',

    stores: {
        operations: {
            fields: ['provider', 'store', 'brand', 'model','quantity','pricePerProduct','publishDate'],
            proxy: {
               // url: ,
                type: 'rest',


            }


        }
    }
})