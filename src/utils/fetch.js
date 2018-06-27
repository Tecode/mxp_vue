import _Promise from 'babel-runtime/core-js/promise';
/*
wxy-2017-11-3
*/
import store from './../store/index';
import axios from 'axios';
import qs from 'qs';
import { MessageBox } from 'mint-ui';
var domain = document.domain;
if (domain.indexOf("localhost") > -1) {
    domain = domain + ":8080";
}
axios.defaults.baseURL = 'http://' + domain + '/'; //自定义所有接口的url
// axios.defaults.baseURL = 'http://192.168.2.77/ppx/public/'; //自定义所有接口的url 
// axios.defaults.baseURL = 'http://192.168.2.200/SmallTools_full/public/'; //自定义所有接口的url 
// axios.defaults.baseURL = 'http://47.52.138.176/'; //自定义所有接口的url 


axios.interceptors.request.use(function (config) {
    return config;
}, function (err) {
    return _Promise.reject(err);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return _Promise.resolve(error.response);
});

function checkStatus(response) {

    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && response.status === 200) {

        return response;
        // 如果不需要除了data之外的数据，可以直接 return response.data
    } else if (response.status === 422) {
        return {
            status: 422,
            msg: response.data.msg
        };
    } else if (response.status === 403) {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("companyID");
        sessionStorage.removeItem("userName");
        store.state.accessToken = "zswdl";
        store.state.companyID = "";
        store.state.userName = "";
        MessageBox.alert('当前服务器已经重启，会话已经丢失，请重新登录！', '过期提示').then(function (action) {
            window.location.reload();
        });
    } else {
        return {
            status: -404,
            msg: '网络异常'
        };
    }
}

function checkCode(res) {
    return res;
}

function headersInfo() {
    var headers = void 0;
    headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded' };
    return headers;
}

export default {
    post: function post(url, data) {
        return axios({
            method: 'post',
            url: url,
            data: qs.stringify(data),
            // data: data,
            timeout: 300000,
            headers: headersInfo()
        }).then(function (response) {
            return checkStatus(response);
        }).then(function (res) {
            return checkCode(res);
        });
    },
    put: function put(url, data) {
        return axios({
            method: 'put',
            url: url,
            data: qs.stringify(data),
            // data: data/,
            timeout: 50000,
            headers: headersInfo()
        }).then(function (response) {
            return checkStatus(response);
        }).then(function (res) {
            return checkCode(res);
        });
    },
    delete: function _delete(url, params) {
        return axios({
            method: 'delete',
            url: url,
            params: params, // get 请求时带的参数
            timeout: 50000,
            headers: headersInfo()
        }).then(function (response) {
            return checkStatus(response);
        }).then(function (res) {
            return checkCode(res);
        });
    },
    get: function get(url, params) {
        if (url.indexOf('?') > -1) {
            url = url + '&nocache=' + new Date().getTime();
        } else {
            url = url + '?nocache=' + new Date().getTime();
        }
        return axios({
            method: 'get',
            url: url,
            params: params, // get 请求时带的参数
            timeout: 50000,
            headers: headersInfo()
        }).then(function (response) {
            return checkStatus(response);
        }).then(function (res) {
            return checkCode(res);
        });
    },
    uploadPost: function uploadPost(url, data) {
        return axios({
            method: 'post',
            url: url,
            data: qs.stringify(data),
            // data: data,
            timeout: 50000,
            headers: headersInfo('upload')
        }).then(function (response) {
            return checkStatus(response);
        }).then(function (res) {
            return checkCode(res);
        });
    }
};