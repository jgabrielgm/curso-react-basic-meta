const styles = {
    color: "tomato",
    fontSize: "40px"
}

function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1 style={styles}>Não perca essa oportundidade, {props.firstName}</h1>                
            </div>
            <div>
                <h2>Se inscreva na newsletter e mantenha-se informado sobre gerenciamento de produto.</h2>
            </div>
        </div>
    );
};

export default Promo;