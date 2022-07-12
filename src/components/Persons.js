const Persons = (props) => {
    const peopleToShow = props.newFilter ? 
    props.persons.filter(p => p.name.toLowerCase().startsWith(props.newFilter.toLowerCase())) : props.persons
    return (
      <ul>
        {peopleToShow.map(p => 
          <li key={p.name}>{p.name} {p.number}</li>
        )}
      </ul>
    )
}

export default Persons;