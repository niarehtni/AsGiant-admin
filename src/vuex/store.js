import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    "users": [
        {
            "id" : 1,
            "username": "admin",
            "avarter":"http://pic.cnblogs.com/face/1220521/20170816150011.png"
            "password": "123456"
        },
        {
            "id" : 2,
            "username": "sxy",
            "password": "920716"
            "avarter":"http://pic.cnblogs.com/face/1220521/20170816150011.png"
        },
        {
            "id": 3,
            "username": "ccc",
            "password": "ccc"
            "avarter":"http://pic.cnblogs.com/face/1220521/20170816150011.png"
        }
    ]    
};

export default new Vuex.Store({
	state
})