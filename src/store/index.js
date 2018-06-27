//wxy-2017-11-3
import Vue from 'vue';
import Vuex from 'vuex';

var MyLocalStorage ={         
    Cache : {             
        /** 
         * 总容量5M 
         * 存入缓存，支持字符串类型、json对象的存储 
         * 页面关闭后依然有效 ie7+都有效 
         * @param key 缓存key 
         * @param stringVal 
         * @time 数字 缓存有效时间（秒） 默认60s  
         * 注：localStorage 方法存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用。不能控制缓存时间，故此扩展 
         * */  
        put : function(key,stringVal,time){  
            try{  
                if(!localStorage){return false;}  
                if(!time || isNaN(time)){time=60;}  
                var cacheExpireDate = (new Date()-1)+time*1000;  
                var cacheVal = {val:stringVal,exp:cacheExpireDate};  
                localStorage.setItem(key,JSON.stringify(cacheVal));
                //console.log(key+":存入缓存，"+new Date(cacheExpireDate)+"到期");  
            }catch(e){}   
        },   
        get : function (key){  
            try{  
                if(!localStorage){return false;}  
                var cacheVal = localStorage.getItem(key);  
                var result = JSON.parse(cacheVal);  
                var now = new Date()-1;  
                if(!result){return null;}
                if(now>result.exp){ 
                    this.remove(key);                     
                    return "";  
                }  
                //console.log("get cache:"+key);  
                return result.val;  
            }catch(e){  
                this.remove(key);  
                return null;  
            }  
        },
        remove : function(key){  
            if(!localStorage){return false;}  
            localStorage.removeItem(key);  
        },
        clear : function(){  
            if(!localStorage){return false;}  
            localStorage.clear();  
        }  
    }
}  
var user_id = MyLocalStorage.Cache.get("user_id");
var type = MyLocalStorage.Cache.get("type");
if (!type) {
    type = 1;
}
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {
            type: type,
            user_id: user_id,
            phone: ""
        }
    },
    getters: {},
    mutations: {
        setUser: function setUser(state, id) {
            state.user.user_id = id;
            MyLocalStorage.Cache.put("user_id",id,2*60*60);
        },
        setType: function setType(state, type) {
            state.user.type = type;
            MyLocalStorage.Cache.put("type",type,2*60*60);
        },
        removeUser:function removeUser(state){
            state.user.user_id = '';
            MyLocalStorage.Cache.remove("user_id");
        }
    }
});