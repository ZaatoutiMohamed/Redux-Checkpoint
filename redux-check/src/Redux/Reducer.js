import {ADDTASK,DELETETASK,EDITTASK,REVERSEDONE} from './ActionType';

const initialState = {
    tasks : [
        {description:  "Take shower", id :Math.random(), isDone: false},
        {description: "Eat breakfast", id :Math.random(), isDone:false}
    ]
};

const Reducer = (state= initialState,action) => {
    switch (action.type ){
        case ADDTASK :
            return {
                 ...state, tasks:
                  [...state.tasks,
                    {
                         description: action.payload, id: Math.random(),isDone: false
                    }
                  ]
              };
              
        case DELETETASK :{
          return {
              ...state, tasks: state.tasks.filter((task) => task.id !== action.payload)
          }
        }
        case DELETETASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      };
    case EDITTASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id == action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        )
      };
    case REVERSEDONE:
      return {
        ...state,
        tasks: state.tasks.map((task) => task.id == action.payload ? { ...task, isDone: 
          !task.isDone } : task
        )
      };
   


            default:
              return state;
          }

        };

        export default Reducer;
        