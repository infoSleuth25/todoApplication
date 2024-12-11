import('./CreateTodo.css');

export function CreateTodo(){
    return (
        <div>
            <input className="inputFields" type="text" placeholder="title" />
            <input className="inputFields" type="text" placeholder="description" />
            <button className='btn'>Add a todo</button>
        </div>
    )
}