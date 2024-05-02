import React from "react";
import { Container } from "react-bootstrap";

function MyAppointment() {

    // const handleDelete = async (id) => {
    //     try {
    //         const response = await fetch(uri + `/delete-complaint/${id}`, {
    //             method: 'DELETE',
    //         });
    //         if (response.ok) {
    //             fetchComplaints(); // Refresh the complaints after deletion
    //         } else {
    //             console.error('Failed to delete complaint');
    //         }
    //     } catch (error) {
    //         console.error('Error deleting complaint:', error);
    //     }
    // };

    const handleSortAndSearch = (key) => {
        const direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
        setSortConfig({ key, direction });

        // Perform search on sorted data
        const sortedAndSearchedEvents = [...events].sort((a, b) => {
            if (direction === 'ascending') {
                return a[key] > b[key] ? 1 : -1;
            } else {
                return a[key] < b[key] ? 1 : -1;
            }
        }).filter((event) =>
            event[filterColumn].toLowerCase().includes(filterValue.toLowerCase())
        );

        setEvent(sortedAndSearchedEvents);
    };

    const handleFilter = () => {
        const filteredEvents = events.filter((event) =>
            event[filterColumn].toLowerCase().includes(filterValue.toLowerCase())
        );
        setEvents(filteredEvents);
    };

    const handleClearFilter = () => {
        setFilterColumn('name');
        setFilterValue('');
        fetchEvents();
    };

    const sortedEvents = [...events].sort((a, b) => {
        if (sortConfig.direction === 'ascending') {
            return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
        } else {
            return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
        }
    });

    return (
        <div className="container">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c63b1a57a6c57ce229ab524269293fb89caa064fce14a463cdee9f7b1a65e6a?apiKey=0a7c2887b1ad4700964c6779ce9bea19&"
                alt="Omkaar Temple banner"
                className="banner-image"
            />
            <Navigation />
            <main className="main-content">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/af06a0a7fc78f3b6da1c8d399d64b3a374f108ab0eb2d9908c06137c90a6c09638?apiKey=0a7c2887b1ad4700964c6779ce9bea19&"
                    alt="Temple background"
                    className="background-image"
                />
                <Container fluid>
                    <Card>
                        <CardBody>
                            <div className="filter">
                                <label>
                                    <select style={{ height: '40px', textJustify: 'center' }}
                                        value={filterColumn}
                                        onChange={(e) => setFilterColumn(e.target.value)}
                                    >
                                        <option value="name">Event</option>
                                        <option value="date">Date</option>
                                    </select>
                                </label>
                                <input style={{ height: '40px' }}
                                    type="text"
                                    placeholder="Filter value..."
                                    value={filterValue}
                                    onChange={(e) => setFilterValue(e.target.value)}
                                />
                                <button onClick={handleFilter}>Filter</button>
                                <button onClick={handleClearFilter}>Clear Filter</button>
                            </div>
                            <div className='table-container'>
                                {sortedComplaints.length > 0 ? (
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th onClick={() => handleSortAndSearch('name')}>Event</th>
                                                <th onClick={() => handleSortAndSearch('date')}>Event Date</th>
                                                <th onClick={() => handleSortAndSearch('time')}>Event Time</th>
                                                <th onClick={() => handleSortAndSearch('priest')}>Priest</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sortedComplaints.map((event, index) => (
                                                <tr key={event._id}>
                                                    <td>{event.name}</td>
                                                    <td>{event.date}</td>
                                                    <td>{event.time}</td>
                                                    <td>{event.priest}</td>
                                                    <td>
                                                        <Button variant="danger" onClick={() => handleDelete(event._id)}>
                                                            Cancel
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No items found.</p>
                                )}
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default MyAppointment;