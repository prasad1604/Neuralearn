import './PrintableActivities.css'
import PrintablesItem from './PrintablesItem';

function PrintableActivities() {
    return (

        <div className="background-printable">
            <PrintablesItem
                title="🎨 Fun Coloring Page 1"
                image="/Images/print1.jpeg"
                imagealt="Coloring Page 1"
                downloadname="coloring1.jpg"
            />

            <PrintablesItem
                title="🎨 Fun Coloring Page 2"
                image="/Images/print2.jpg"
                imagealt="Coloring Page 2"
                downloadname="coloring2.jpg"
            />

            <PrintablesItem
                title="🎨 Fun Coloring Page 3"
                image="/Images/print3.jpg"
                imagealt="Coloring Page 3"
                downloadname="coloring3.jpg"
            />

            <PrintablesItem
                title="🎨 Fun Coloring Page 4"
                image="/Images/print4.webp"
                imagealt="Coloring Page 4"
                downloadname="coloring4.jpg"
            />

        </div>

    )
}

export default PrintableActivities;