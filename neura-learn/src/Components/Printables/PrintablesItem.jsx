function PrintablesItem(props) {
    return (
        <div className="col-12 col-sm-6 col-lg-6 col-xl-4 mb-4">
            <div id="card-printable" className="card printable-card h-100">
                <div className="card-body">
                    <img className="img-printable" src={props.image} alt={props.imagealt} />
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <a
                        href={props.image}
                        className="btn-printable btn btn-primary"
                        download={props.downloadname}
                    >
                        Download
                    </a>
                </div>
            </div>
        </div>
    )
}


export default PrintablesItem;
