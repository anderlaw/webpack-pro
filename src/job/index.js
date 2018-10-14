require('../common/index.css')
require('./index.css')
import util from '../common/util'
let viewEle = document.getElementById('view-ele')
util.ajax('/job',function(item){
    let response = JSON.parse(item);
    if(response.success){
        viewEle.innerHTML = response.data.description;
    }
    
})
util.insertTimer('#date-ele')
util.insertImg('#avatar',require('../assets/job.jpg'))