/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'JHWUV8BVJ7',
  'f0a49ae7f6f85b7396ec93d44068300f'
);

const search = instantsearch({
  indexName: 'test_NAME',
  searchClient,
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: hit => `
        <li class="hit">
          <h3>
            ${hit._highlightResult.name.value}
          </h3>
          <small>on <strong>${moment(hit.date).format('dddd MMMM Do YYYY')}</strong></small>
          <div><small>${hit._highlightResult.location.value}</small></div>
        </li>
      `,
    },
  })
);

search.addWidget(
  instantsearch.widgets.currentRefinements({
    container: '#current-refinements',
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#location-list',
    attribute: 'location',
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

const datePicker = instantsearch.connectors.connectRange(
  (options, isFirstRendering) => {
    if (!isFirstRendering) return;

    const { refine } = options;

    new Calendar({
      element: $('#calendar'),
      callback: function() {
        const start = new Date(this.start_date).getTime();
        const end = new Date(this.end_date).getTime();

        refine([start, end]);
      },
      // Some good parameters based on our dataset:
      start_date: new Date(),
      end_date: new Date('01/01/2020'),
      earliest_date: new Date('01/01/2008'),
      latest_date: new Date('01/01/2020'),
    });
  }
);

const dateRangeWidget = datePicker({
  attribute: 'date',
});

search.addWidget(dateRangeWidget);

search.start();
