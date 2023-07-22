// https://datatables.net/examples/basic_init/dom.html

new DataTable('#table_episodes', {
    pagingType: 'full_numbers',
    pageLength: 5,
    bLengthChange: false,
    order: [[1, 'desc']],
    responsive: true
});

