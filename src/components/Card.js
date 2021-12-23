export default function Card({ currEl }) {
    const { id, category, name, description, price, image } = currEl;

    return (
        <div className="card">
            <span className="number">{id}</span>
            <span className="category">{category}</span>
            <h3 className="name">{name}</h3>
            <p className="desc">{description}</p>
            <span className="price">{price}</span>
            <img src={image} alt="Img" />
        </div>
    );
}
