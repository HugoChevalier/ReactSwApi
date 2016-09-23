import request from 'superagent'

export default {

    getPeople(page,callback) {
        request
            .get('http://swapi.co/api/people/?page=' + page)//*/?page=' + page
            .end(function(err, res) {
                if (err) {
                    console.log(err);
                } else {
                    var content = res.body;
                    callback(content)
                }
            });
    },

    getDetail(id, callback) {
        request
            .get('http://swapi.co/api/people/' + id )
            .end(function(err, res) {
                // log the error
                if (err) {
                    console.log(err);
                } else {
                    var content = res.body
                    callback(content)
                }
            });
    }
}