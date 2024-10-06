define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
    return {
        add  : function () {
            Form.api.bindevent($('form[role=form]'))
        },
        edit : function () {
            Form.api.bindevent($('form[role=form]'))
        },
        index: function () {
            Table.api.init({extend: {index_url: 'book/index', add_url: 'book/add', edit_url: 'book/edit', del_url: 'book/del', table: 'book'}})
            const table = $('#table')
            table.bootstrapTable({
                url         : $.fn.bootstrapTable.defaults.extend.index_url,
                commonSearch: false,
                search      : false,
                columns     : [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'name', title: '书名'},
                        {field: 'author', title: '作者'},
                        {field: 'category.name', title: '类别'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            })
            Table.api.bindevent(table)
        }
    }
})
