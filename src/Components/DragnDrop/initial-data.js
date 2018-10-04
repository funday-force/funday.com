const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage.'},
        'task-2': { id: 'task-2', content: 'Watch my favorite show.'},
        'task-3': { id: 'task-3', content: 'Charge my phone.'},
        'task-4': { id: 'task-4', content: 'Walk the dog.' },
        'task-5': { id: 'task-5', content: 'Beat Court in Overwatch'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Table',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Status',
            taskIds: [],
        },
        'column-3': {
            id: 'Person',
            title: 'Done',
            taskIds: [],
        },
        
        
    },

    // facilitate the reordering of the columns
    columnOrder: ['column-1', 'column-2','column-3']
}; 
export default initialData;



// 'column-2', 'column-3',