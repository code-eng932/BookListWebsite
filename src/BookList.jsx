
function BookList(props) {
    return (
        <div className="card">
            <h2 className="card-title">
                Title : {props.title}
            </h2>
            <p className="card-author">
                Author : {props.author}
            </p>
            <p className="card-summary">
                Summary : {props.summary}
            </p>
            <p className="card-genre">
                Genre : {props.genre}
            </p>
        </div>
    );
}

export default BookList
