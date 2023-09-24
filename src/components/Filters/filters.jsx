import './filters.css'

function Filters({label,id,handlerChange}) {
    return ( 
            <div className="form-check form-switch">
                <label className="switch">
                    <input type="checkbox" role='switch' id={id} onChange={handlerChange}/>
                    <span className="slider"></span>
                </label>
                <div className="label">
                <label id='labelswitch' htmlFor={id}>{label}</label>
                </div>
            </div>
     );
}

export default Filters;