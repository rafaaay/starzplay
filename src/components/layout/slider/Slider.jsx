import Card from "../../atoms/card/card"

function Slider() {
    return (
        <section className="slider">
            <div className="slider__header">
                <h2>Category Name</h2>
            </div>

            <div className="slider__body">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </section>
    )
}

export default Slider
