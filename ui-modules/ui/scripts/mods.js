define(function (require, exports, module) {

    $.ajaxSetup({
        dataFilter: function (data, type) {
            if (type === 'json' && data && data.href && data.href.contains('/alpaca/datasource&')) {
                var jsonData = JSON.parse(data);
                data = [];
                for (var i = 0; i < jsonData.items.length; i++) {
                    data.push({
                        value: jsonData.items[i].value
                    });
                }

                    $.JSON({

                    })
                    data = [];
                    for (var i = 0; i < jsonData.items.length; i++) {
                        data.push({
                            value: jsonData.items[i].makeId,
                            text: jsonData.items[i].makeName
                        });
                    }
                }

                data = JSON.stringify(data);
            }

            return data;
        }
    });

});