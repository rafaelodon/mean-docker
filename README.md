# MEAN Docker Example

## A MEAN (Mongo + Express + Angular + Node) stack app dockerized for learning purposes.

The Angular project static distribution files are served in a nginx container (check `angular/Dockerfile`).

The Node + Express project is served upon a node container (check `node/Dockerfile`).

A multicontainer project is defined with angular/nginx as frontend, node as the backend, and a raw MongoDB official container as persistence layer (check `docker-compose.yml`).

### Installing & Running

From the project root foolder:

* Build the front-end image:

 `docker build -t odon/tasks-angular angular`

* Build the back-end image:

 `docker build -t odon/tasks-node node`

* Run the multi-container stack:

 `docker-compose up`

Access `http://localhost:90` on your web browser.
