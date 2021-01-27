function KittenList(props) {
    return (
        <ul>
            {props.kittens.map((cat) => {
                return (
                    <li key={cat.name}>
                        <p>{cat.name}, cuteness: {cat.cuteness}</p>
                        {props.kittensAreVisible ? (
                            <img
                            src={cat.img}
                            alt={`a beautiful portrait of ${cat.name}`}
                            />
                        ) : null}
                    </li>
                );
            })}
        </ul>
    )
}
//add kittensAreVisible
export default KittenList;