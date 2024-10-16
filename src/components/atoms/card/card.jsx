function Card( {title} ) {

    const { title: titleName, description, year, tags, thumbnails } = title;
    const thumbnail = thumbnails?.['thumb-614x1536']?.url || '';

    return (
        <figure className="card">
            <img src={thumbnail} alt={titleName} />
            <figcaption>{titleName}</figcaption>
        </figure>
    )
}

export default Card
