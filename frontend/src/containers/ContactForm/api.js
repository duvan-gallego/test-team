import { apiInstance, errorHandler } from '../../api';
 
export default function contactApi(payload) {
  
  return apiInstance({
    url: '/contact',    
    method: 'post',
    data: payload,
  })
    .then(({ data: result }) => result)
    .catch(errorHandler);

}