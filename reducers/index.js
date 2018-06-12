import { combineReducers } from 'redux';
import auth from './auth_reducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});
