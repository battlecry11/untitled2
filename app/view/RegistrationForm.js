Ext.define('AK.view.RegistrationForm', {
    extend: Ext.panel.Panel,
    layout: {
        type: 'vbox',
        //  align: 'stretch'
    },
    items: [{
        xtype: 'form',
        layout: {
            type: 'hbox',
            // align: 'stretch',
        },
        defaultType: 'fieldset',
        fieldDefaults: {
            labelAlign: 'top',
            anchor: '100%',
            // flex: 1
        },
        items: [{

            defaultType: 'combo',
            items: [{
                name: 'providers',
                fieldLabel: 'მომწოდებლები',
                // allowBlank: false,
            }, {
                name: 'stores',
                fieldLabel: 'საწყობები',
                //  allowBlank: false,


            }],


        }, {
            defaultType: 'textfield',
            items: [{
                name: 'brand',
                fieldLabel: 'მოდელი',
                allowBlank: false,
            }, {
                name: 'model',
                fieldLabel: 'ბრენდი',
                allowBlank: false,

            }]
        }, {
            defaultType: 'numberField',
            items: [{
                name: 'price',
                fieldLabel: 'ღირებულება',
                allowBlank: false,
            }, {
                name: 'quantity',
                fieldLabel: 'რაოდენობა',
                allowBlank: false,

            }]

        }, {
            layout: 'vbox',
            items: [{
                margin: '20 0 0 0',
                xtype: 'button',
                text: 'შენახვა',
                handler: 'save'
            }, {
                xtype: 'button',
                margin: '20 0 0 0',
                text: 'გასუფთავება',
            }]

        }]
    }]

})

