# Docker Scripts

## What's the point?
* Setting up the Ruby For Good app on your local machine is quick and easy with the aid of Docker and Docker Compose.
* Docker provides a common virtual environment available to all developers and resolves the infamous "but it works on my machine" problem.
* Use the scripts that begin with "d" in this directory to execute tasks in Docker.  Please note that these scripts are intended to be executed from this app's root directory.

## Installing Docker
* You should have at least 2 GB free on your local machine to download Docker images and create Docker containers for this app.
* Docker installation instructions are at https://docs.docker.com/install/.
* Docker Compose installation instructions are at https://docs.docker.com/compose/install/.
* To run Docker commands as a regular user instead of as root (with sudo), follow the instructions at https://docs.docker.com/engine/install/linux-postinstall/.

## Getting Started
* Open a terminal with a shell.
* Clone this repository. If you're planning on contributing code to the project, begin by forking this repo with the Fork button in the top-right corner of this screen.
* Use git clone to copy your fork onto your local machine.
```sh
$ git clone https://github.com/YOUR_GITHUB_USERNAME_HERE/rubyforgood.org
```
* Otherwise, if you just want to get things running, clone from the rubyforgood.org main repo:

```sh
$ git clone https://github.com/rubyforgood/rubyforgood.org.git
```
* Go at the root of the app:

```sh
$ cd rubyforgood.org
```
* Download the Docker image and build the Docker container:
```sh
$ bin/dbuild
```
* Run the Jekyll server:

```sh
$ docker/dserver
```
* View the app in the browser at `http://localhost:4000`.
* You can stop the containers using Ctrl-C in the terminal.

## Script Summary
* docker/dbuild: This script builds the Docker container specified for this app.  After you use "git clone" to download this repository, run the docker/dbuild script to start the setup process.
* docker/dserver: Use this script to run this app in the Jekyll server.  If all goes well, you will be able to view this app on your local browser at http://localhost:4000/.
* docker/nuke: Use this script to delete all Docker images and containers.  This fully resets your Docker setup and is useful for making sure that the setup procedure specified for this app is complete.
