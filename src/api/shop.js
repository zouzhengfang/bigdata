import axios from 'axios';
let getShopList=(page)=>{
    return axios.get('http://127.0.0.1:8011/zx-manager-web-0.0.1-SNAPSHOT/zm/item/'+page);
}
export {getShopList}