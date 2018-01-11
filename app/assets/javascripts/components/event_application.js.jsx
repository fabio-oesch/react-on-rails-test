class EventApplication extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>ReactJS Tutorial</h1>
                    <p>by Fabio</p>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <EventTable />
                    </div>
                </div>
            </div>
        )
    }
}
