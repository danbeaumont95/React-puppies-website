function PuppyList(props) {
    return (
        <ul>
          {props.puppies.map((pup) => {
            return (
              <li key={pup.name}>
                <p>{pup.name}, cuteness: {pup.cuteness}</p>
                {props.puppiesAreVisible ? (
                  <img
                    src={pup.img}
                    alt={`a beautiful portrait of ${pup.name}`}
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
    )
}

export default PuppyList;