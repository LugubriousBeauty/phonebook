const Filter = (props) => {
    return (
      <div>
        <form onSubmit={props.clearFilter}>
            <div>
              filter: <input 
                value={props.newFilter} onChange={props.handleFilter}/>
            </div>
        </form>
      </div>
    )
  }

  export default Filter;