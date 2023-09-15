import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.URL + 'task/';

class TaskService {

  getAllTasks() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  storeTask(task) {
    return axios.post(API_URL, {
      name: task.name,
      description: task.description,
      employee_id: task.employee_id
    }, 
    { headers: authHeader() });
  }

  changeTaskStatus(task) {
    return axios.patch(API_URL + 'status', {
      task_id: task.task_id,
      status_id: task.status_id
    }, 
    { headers: authHeader() });
  }

}

export default new TaskService();