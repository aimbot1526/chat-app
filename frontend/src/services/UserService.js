import axios from 'axios';
import URL from '../Helper';

export const AddUser = (data) => {
    return axios(URL+"/auth/user/add", {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: data,
    }).then((res) => res.data)
        .catch((e) => { throw e });
};