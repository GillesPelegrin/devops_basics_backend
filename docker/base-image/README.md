## How to create an image and deploy to the docker repository

### Docker build image
` Docker build -t base-image .`


### Requirement
have a docker account and create a repository base-image

### Docker push
1. first we need to be sure we are logged in

    ` Docker login`
2. Then we should tag our docker image to the right format

    `docker tag base-image:latest gillespelegrin/base-image:latest`
3. push to your docker registry

    `docker push gillespelegrin/base-image`
