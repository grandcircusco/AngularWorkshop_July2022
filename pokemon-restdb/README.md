# Pokemon API Example With Restdb.io

This version of the Pokemon App stores the deck in a database on the back-end via a REST API.

## Of Interest...
* _deck.service.ts_: makes API calls to restdb.io, includes authentication header
* _environment.ts_: stores the API key
* _interfaces/pokemon-model.ts_: Note the additions of `_id?: string` for the database ID of items in the deck
* _deck.component.ts_, _pokemon-details.component.ts_: call the services. Note that you must subscribe to trigger even a post or delete HTTP request.