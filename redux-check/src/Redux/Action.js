import {ADDTASK,DELETETASK,EDITTASK,REVERSEDONE } from "./ActionType";

export const addTask = (payload) => {
    return (
        {
            type : ADDTASK,
            payload

        }
    );    
};
export const deleteTask = (payload) => {
    return (
        {
            type : DELETETASK,
            payload
        }
    )
}
export const editTask = (payload) => {
    return {
      type: EDITTASK,
      payload
    };
  };
  export const reverseDone = (payload) => {
    return {
      type: REVERSEDONE,
      payload
    };
  };
  
  