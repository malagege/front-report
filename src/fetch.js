import axios from "axios";

const HOST = import.meta.env.VITE_BACKEND_HOST || ''; // local端要拿掉

// 取得 Report List ok 
function getReports(){
    // debugger;
    return axios.get( HOST + '/api/report')
    .then((res)=> res.data);

}

//append content ok 
function sendContent(id, content){
    return axios.put( HOST + '/api/content',{id,content})
    .then(res=>res.data);
}

//update title content
function editContent(id,content){
    return axios.put( HOST + '/api/report',{id,content})
    .then(res=>res.data);
}

// get one content
function getContent(id){
    return axios.get( HOST + '/api/content',{id})
    .then(res=>res.data);
}

//add Report
function addReport(title,content){
    return axios.post( HOST + '/api/report',{title,content})
    .then(res=>res.data)
}

export default{
    getContent,getReports,sendContent,addReport,editContent
}