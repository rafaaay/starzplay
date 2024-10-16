import Card from "../../atoms/card/card"

function Slider( {module} ) {
    return (
        <section className="slider">
            <div className="slider__header">
                <h2>{module.title}</h2>
            </div>

            <div className="slider__body">
                {module.layoutTitles.titles.map((title) => (
                    <Card key={title.titleId} title={title} />
                ))}
            </div>
        </section>
    )
}

export default Slider
