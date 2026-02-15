import './PrintableActivities.css'
import PrintablesItem from './PrintablesItem';

function PrintableActivities() {
    return (

        <div className="background-printable">

            <div className="container">
                <div className="row justify-content-center">
            <PrintablesItem
                title="🎨 Fun Puzzle to solve!"
                image="/Images/print2.jpg"
                desc="Download and arrange these cards!"
                imagealt="Coloring Page 2"
                downloadname="coloring2.jpg"
            />

            <PrintablesItem
                title="🎨 Fun Cards to arrange!"
                desc="Download and solve this puzzle!"
                image="/Images/print3.jpg"
                imagealt="Coloring Page 3"
                downloadname="coloring3.jpg"
            />

            <PrintablesItem
                title="🎨 Fun Coloring Page 1"
                desc="Download and color this page!"
                image="/Images/print4.webp"
                imagealt="Coloring Page 4"
                downloadname="coloring4.jpg"
            />

            <PrintablesItem
                title="🎨 Fun Coloring Page 2"
                desc="Download and color this page!"
                image="/Images/print1.jpeg"
                imagealt="Coloring Page 1"
                downloadname="coloring1.jpg"
            />
            </div>
            </div>
        </div>

    )
}

export default PrintableActivities;