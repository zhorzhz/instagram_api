/**
 * Created 28/07/2016 by Zhorzh Zakaryan.
 * email: zhorzh.zakaryan@gmail.com
 */

var request = require('request');
var md5 = require('md5');
var crypto = require('crypto');

var clientId = '377e67cfbfe840e19a903aa5ea8dbe10';
var clientSecret = '2bdd32e096194666b2c3b292d16fbc49';
var appKey = 'CBAJOEJKEBABABABA';
var redirectURI = 'insra';

module.exports = {
    createSignature: function(params){
        return crypto.createHmac('sha256', clientSecret).update(params).digest('hex');
    },

    getMe: function (data, callback) {
        var params = '/users/self|access_token='+data.token;
        var sig = this.createSignature(params);
        request({
            url: 'https://api.instagram.com/v1/users/self/', //URL to hit
            qs: {access_token: data.token, sig: sig}, //Query string data
            method: 'GET',
        }, function(error, response, body){
            if(error) {
                console.log(error);
                callback({status: response.statusCode, body:body});
            } else {
                callback({status: response.statusCode, body:body});
            }
        });

    },

    getLiked: function(data, callback){
        var params = '/users/self/media/liked|access_token='+data.token;
        var sig = this.createSignature(params);
        request({
            url: 'https://api.instagram.com/v1/users/self/media/liked/', //URL to hit
            qs: {access_token: data.token, sig: sig}, //Query string data
            method: 'GET',
        }, function(error, response, body){
            if(error) {
                console.log(error);
                callback({status: response.statusCode, body:body});
            } else {
                callback({status: response.statusCode, body:body});
            }
        });
    },

    getFollowedusers: function(data, callback){
        var params = '/users/self/follows|access_token='+data.token;
        var sig = this.createSignature(params);
        request({
            url: 'https://api.instagram.com/v1/users/self/follows/', //URL to hit
            qs: {access_token: data.token, sig: sig}, //Query string data
            method: 'GET',
        }, function(error, response, body){
            if(error) {
                console.log(error);
                callback({status: response.statusCode, body:body});
            } else {
                callback({status: response.statusCode, body:body});
            }
        });
    },

    getFriends: function(data, callback){
    	var friendUserName = 'naushadzaman';
        var params = '/users/search|access_token='+data.token+'|q='+friendUserName;
        var sig = this.createSignature(params);
        request({
            url: 'https://api.instagram.com/v1/users/search/', //URL to hit
            qs: {q: friendUserName, access_token: data.token, sig: sig}, //Query string data
            method: 'GET',
        }, function(error, response, body){
            if(error) {
                console.log(error);
                callback({status: response.statusCode, body:body});
            } else {
                callback({status: response.statusCode, body:body});
            }
        });
    }


};
