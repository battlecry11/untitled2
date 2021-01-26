Ext.define('AK.view.MainController', {
    extend: 'Ext.app.ViewController',
    save: function () {
        const form = this.lookup('form');
        const values = form.getForm().getValues();
        const store = this.getViewModel().getStore('operations');
        const record = Ext.create('AK.model.Post', values);
        store.add(record);

    }

})